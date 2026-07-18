/**
 * One-off, local-only migration script — moves the hardcoded content in lib/data/*.ts
 * into Sanity as real documents, and uploads the project images as Sanity image assets.
 *
 * Requires a temporary write-capable token, passed via SANITY_WRITE_TOKEN — set it in
 * .env.local for this one run only, never commit it, never add it to Vercel.
 *
 * Run with: node --env-file=.env.local -r ts-node/register scripts/migrate-content-to-sanity.ts
 *
 * Safe to re-run: every document uses a deterministic _id and createOrReplace, so a
 * partial failure (network blip, bad image, rate limit) can be retried without creating
 * duplicates.
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { join } from "path";
import { heroContent } from "../lib/data/hero";
import { aboutContent } from "../lib/data/about";
import { projects, projectsHeading } from "../lib/data/projects";
import { contactHeading, PRIVACY_NOTICE } from "../lib/data/contact";
import { projectId, dataset, apiVersion } from "../sanity/lib/env";

const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN;

if (!WRITE_TOKEN) {
    console.error("SANITY_WRITE_TOKEN is required to run this migration script. Set it in .env.local for this one run only.");
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token: WRITE_TOKEN,
    useCdn: false,
});

const PROJECT_IMAGES_DIR = join(__dirname, "../public/images/projects");
const ORDER_GAP = 10;

type FieldCheck = { label: string; expected: unknown; actual: unknown };

function reportFields(checks: FieldCheck[]) {
    for (const { label, expected, actual } of checks) {
        const pass = JSON.stringify(expected) === JSON.stringify(actual);
        if (pass) {
            console.log(`  ✓ ${label} matches`);
        } else {
            console.log(`  ✗ ${label} MISMATCH — expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
        }
    }
}

async function migrateHero() {
    console.log("Migrating hero...");
    await client.createOrReplace({
        _id: "hero",
        _type: "hero",
        eyebrow: heroContent.eyebrow,
        headline: heroContent.headline,
        tagline: heroContent.tagline,
        primaryCtaLabel: heroContent.primaryCtaLabel,
        bookACallLabel: heroContent.bookACallLabel,
    });
    const fetched = await client.getDocument("hero");
    reportFields([
        { label: "hero.eyebrow", expected: heroContent.eyebrow, actual: fetched?.eyebrow },
        { label: "hero.headline", expected: heroContent.headline, actual: fetched?.headline },
        { label: "hero.tagline", expected: heroContent.tagline, actual: fetched?.tagline },
        { label: "hero.primaryCtaLabel", expected: heroContent.primaryCtaLabel, actual: fetched?.primaryCtaLabel },
        { label: "hero.bookACallLabel", expected: heroContent.bookACallLabel, actual: fetched?.bookACallLabel },
    ]);
}

async function migrateAbout() {
    console.log("Migrating about...");
    await client.createOrReplace({
        _id: "about",
        _type: "about",
        heading: aboutContent.heading,
        paragraphs: aboutContent.paragraphs,
    });
    const fetched = await client.getDocument("about");
    reportFields([
        { label: "about.heading", expected: aboutContent.heading, actual: fetched?.heading },
        { label: "about.paragraphs", expected: aboutContent.paragraphs, actual: fetched?.paragraphs },
    ]);
}

async function migrateContact() {
    console.log("Migrating contact...");
    await client.createOrReplace({
        _id: "contact",
        _type: "contact",
        heading: contactHeading,
        privacyNotice: PRIVACY_NOTICE,
    });
    const fetched = await client.getDocument("contact");
    reportFields([
        { label: "contact.heading", expected: contactHeading, actual: fetched?.heading },
        { label: "contact.privacyNotice", expected: PRIVACY_NOTICE, actual: fetched?.privacyNotice },
    ]);
}

async function migrateProjectsSettings() {
    console.log("Migrating projectsSettings...");
    await client.createOrReplace({
        _id: "projectsSettings",
        _type: "projectsSettings",
        heading: projectsHeading,
    });
    const fetched = await client.getDocument("projectsSettings");
    reportFields([
        { label: "projectsSettings.heading", expected: projectsHeading, actual: fetched?.heading },
    ]);
}

async function uploadProjectImage(imageSrc: string) {
    const filename = imageSrc.replace(/^\/images\/projects\//, "");
    const filePath = join(PROJECT_IMAGES_DIR, filename);
    const buffer = readFileSync(filePath);
    return client.assets.upload("image", buffer, { filename });
}

async function migrateProjects() {
    console.log("Migrating projects...");
    for (const [index, item] of projects.entries()) {
        const docId = `project-${item.id}`;
        const order = (index + 1) * ORDER_GAP;
        console.log(`  Uploading image for ${item.id}...`);
        const asset = await uploadProjectImage(item.imageSrc);

        await client.createOrReplace({
            _id: docId,
            _type: "project",
            title: item.title,
            description: item.description,
            stack: item.stack,
            liveUrl: item.liveUrl,
            gitUrl: item.gitUrl,
            image: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
            imageAlt: item.imageAlt,
            order,
        });

        const fetched = await client.getDocument(docId);
        reportFields([
            { label: `project[${item.id}].title`, expected: item.title, actual: fetched?.title },
            { label: `project[${item.id}].description`, expected: item.description, actual: fetched?.description },
            { label: `project[${item.id}].stack`, expected: item.stack, actual: fetched?.stack },
            { label: `project[${item.id}].liveUrl`, expected: item.liveUrl, actual: fetched?.liveUrl },
            { label: `project[${item.id}].gitUrl`, expected: item.gitUrl, actual: fetched?.gitUrl },
            { label: `project[${item.id}].imageAlt`, expected: item.imageAlt, actual: fetched?.imageAlt },
            { label: `project[${item.id}].image`, expected: asset._id, actual: (fetched?.image as { asset?: { _ref?: string } } | undefined)?.asset?._ref },
            { label: `project[${item.id}].order`, expected: order, actual: fetched?.order },
        ]);
    }
}

async function main() {
    await migrateHero();
    await migrateAbout();
    await migrateContact();
    await migrateProjectsSettings();
    await migrateProjects();
    console.log("\nMigration complete. Review the ✓/✗ summary above, then check Studio and / before deleting lib/data/*.ts.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
