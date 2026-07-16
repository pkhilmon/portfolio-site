import { client } from "@/sanity/lib/client";
import type {
    HeroContent,
    AboutContent,
    ContactContent,
    ProjectsSettingsContent,
    ProjectItem,
} from "@/sanity/lib/types";

const FETCH_OPTIONS = { next: { tags: ["sanity-content"], revalidate: false as const } };

export async function getHero() {
    return client.fetch<HeroContent | null>(
        `*[_type == "hero"][0]{eyebrow, headline, tagline, primaryCtaLabel, bookACallLabel}`,
        {},
        FETCH_OPTIONS,
    );
}

export async function getAbout() {
    return client.fetch<AboutContent | null>(
        `*[_type == "about"][0]{heading, paragraphs}`,
        {},
        FETCH_OPTIONS,
    );
}

export async function getProjectsSettings() {
    return client.fetch<ProjectsSettingsContent | null>(
        `*[_type == "projectsSettings"][0]{heading}`,
        {},
        FETCH_OPTIONS,
    );
}

export async function getProjects() {
    return client.fetch<ProjectItem[]>(
        `*[_type == "project"] | order(order asc){_id, title, description, stack, liveUrl, gitUrl, image, imageAlt}`,
        {},
        FETCH_OPTIONS,
    );
}

export async function getContact() {
    return client.fetch<ContactContent | null>(
        `*[_type == "contact"][0]{heading, privacyNotice}`,
        {},
        FETCH_OPTIONS,
    );
}
