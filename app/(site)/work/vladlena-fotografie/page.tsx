import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { SECTION_IDS } from "@/lib/constants";

const TITLE = "A portfolio site that turns a photo into a WhatsApp enquiry";
const DESCRIPTION =
    "Case study: a mobile-first portfolio website for Vladlena Nikulina, a portrait and family photographer, built so that visitors who arrive from Instagram can ask about a shoot from the photo they are looking at.";

const LIVE_URL = "https://www.vladlena-fotografie.de";
// Repo is private. Set the URL here if it is ever made public.
const REPO_URL: string | null = null;
// Drops in once the client has approved the wording. Never publish a draft quote.
const TESTIMONIAL: { quote: string; author: string } | null = null;

const IMAGE_DIR = "/images/work/vladlena-fotografie";

// Verified in the repo and on the live site on 2026-09-29
const METRICS = ["62 commits over 8 weeks", "0 cookies, 0 third-party requests", "Next.js 16 · React 19 · Tailwind 4"] as const;

const CONSTRAINTS = [
    {
        title: "Visitors arrive from Instagram, on a phone",
        body: "Instagram is where people find her. The site is the step between a post and a message, so every layout starts from a phone held upright.",
    },
    {
        title: "WhatsApp is the contact channel",
        body: "It is the lowest-friction way to reach someone in Germany. No booking form, no pricing page: the site's job is to start a conversation.",
    },
    {
        title: "The photos are the product",
        body: "Six services, from portraits and families to business and events, each introduced by one of her photos. Nothing on the page may compete with them.",
    },
    {
        title: "German law, and no cookie banner",
        body: "A commercial site needs an Impressum and a privacy policy. The client also wanted no consent dialog, which rules out analytics and third-party embeds.",
    },
    {
        title: "Light and warm, by her choice",
        body: "A dark, dramatic direction was designed and explored. She rejected it: her style is soft natural light, and the site had to look like her work.",
    },
] as const;

type Decision = {
    rule: string;
    how: string;
    prevents: string;
    image?: { src: string; alt: string; caption: string; width: number; height: number };
};

const DECISIONS: readonly Decision[] = [
    {
        rule: "Every photo is a way to ask about it.",
        how: "Each service photo carries a WhatsApp button that opens a chat with a message already written for that service: “Hallo Vladlena, ich interessiere mich für ein Portraitshooting.” Phones have no hover, so there the caption and button are always visible (@media (hover: none)). On desktop, hover reveals the caption and the button sits next to the service text instead.",
        prevents:
            "A visitor who likes a photo having to look for contact details and then explain which kind of shoot they mean. The first message already says it.",
        image: {
            src: `${IMAGE_DIR}/2-foto-cta-phone.webp`,
            alt: "Portraits section on a phone: a portrait photo with an italic caption and a “Porträts anfragen” button over it, and the fixed “Anfragen” bar at the bottom of the screen.",
            caption:
                "On a phone the photo carries its own enquiry button, above the fixed bar. Tapping it opens WhatsApp with the portrait-shoot message filled in.",
            width: 600,
            height: 1022,
        },
    },
    {
        rule: "The way to write to her is never off-screen.",
        how: "A fixed bar at the bottom of every page, the legal pages included, holds a single WhatsApp button with a general message. The first screen adds WhatsApp and Instagram buttons above the fold.",
        prevents:
            "Interest peaking halfway down the page while the only contact link waits in the footer.",
        image: {
            src: `${IMAGE_DIR}/3-hero-phone.webp`,
            alt: "First screen on a phone: portrait photo with the name Vladlena Nikulina, Instagram and WhatsApp buttons at the top, and the “Anfragen” bar at the bottom.",
            caption:
                "The first screen on a phone: her name, two contact buttons at the top and the enquiry bar at the bottom, before any scrolling.",
            width: 600,
            height: 1022,
        },
    },
    {
        rule: "No cookies, so no consent banner.",
        how: "No analytics and no YouTube or Vimeo embeds. The planned video was specified as self-hosted, and was later deferred. Fonts are bundled at build time with next/font. Loading the live site sets no cookies, and every request goes to her own domain.",
        prevents:
            "A legal dialog over the hero photo being the first thing a visitor from Instagram sees on their phone, and a consent tool the client would have to maintain.",
    },
    {
        rule: "Photos never move the page.",
        how: "The site is a static export with no image server, so a sharp script converts every photo to WebP (quality 82) before the build. Each service photo sits in a fixed-height frame (500 px on phones) and is cropped to fit, photos below the fold load lazily, and only the first-screen photo loads eagerly. The trade-off: every screen gets the same file.",
        prevents:
            "Text and buttons jumping as photos arrive, so a thumb aimed at “Anfragen” lands on it, whatever the shape of the photo Vladlena swaps in next.",
    },
];

export const metadata: Metadata = {
    title: `${TITLE} — Pavlo Khilmon`,
    description: DESCRIPTION,
    alternates: { canonical: "/work/vladlena-fotografie" },
    openGraph: {
        type: "article",
        title: TITLE,
        description: DESCRIPTION,
        url: "/work/vladlena-fotografie",
        images: [{ url: `${IMAGE_DIR}/og.jpg`, width: 1200, height: 630, alt: "First screen of vladlena-fotografie.de with the fixed WhatsApp enquiry bar" }],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [`${IMAGE_DIR}/og.jpg`],
    },
};

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
    return (
        <hgroup className={cn("mb-8")}>
            <p className={cn("mb-2 text-xs sm:text-sm font-medium text-accent uppercase tracking-widest")}>{eyebrow}</p>
            <h2 className={cn("text-2xl sm:text-3xl font-bold tracking-tight")}>{children}</h2>
        </hgroup>
    );
}

export default function VladlenaFotografieCaseStudyPage() {
    return (
        <main id="main-content" tabIndex={-1} className={cn("mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8")}>
            {/* Hero */}
            <section className={cn("pt-16 pb-12 md:pt-24")}>
                <hgroup>
                    <p className={cn("mb-3 text-xs sm:text-sm font-medium text-accent uppercase tracking-widest")}>
                        Case study · Vladlena Nikulina Fotografie · 2026
                    </p>
                    <h1 className={cn("mb-5 text-4xl sm:text-5xl font-bold leading-tight tracking-tight")}>{TITLE}</h1>
                </hgroup>
                <p className={cn("mb-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed")}>
                    A portfolio website for a portrait and family photographer in the Essen, Düsseldorf and Münster
                    area, built so that a visitor who arrives from Instagram can ask about a shoot from the photo they
                    are looking at.
                </p>
                <ul className={cn("mb-8 flex flex-wrap gap-2")}>
                    {METRICS.map((metric) => (
                        <li key={metric}>
                            <Badge variant="secondary" className={cn("h-7 px-3 text-xs")}>
                                {metric}
                            </Badge>
                        </li>
                    ))}
                </ul>
                <div className={cn("mb-12 flex flex-wrap gap-3")}>
                    <a
                        href={LIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "xl" }))}
                    >
                        Visit the live site →
                    </a>
                    {REPO_URL && (
                        <a
                            href={REPO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
                        >
                            Source on GitHub
                        </a>
                    )}
                </div>
                <figure>
                    <Image
                        src={`${IMAGE_DIR}/1-hero-desktop.webp`}
                        alt="First screen of the site on a desktop: a full-width portrait with the name Vladlena Nikulina and “Fotografin für Portraits und Familie”, Instagram and WhatsApp buttons at the top, and a gold “Interesse? Schreib mir gerne.” bar with an “Anfragen” button at the bottom."
                        width={1800}
                        height={1125}
                        priority
                        className={cn("w-full h-auto rounded-lg ring-1 ring-foreground/10 shadow-sm")}
                    />
                    <figcaption className={cn("mt-3 text-sm text-muted-foreground")}>
                        The first screen: one of her photos, her name, and two ways to reach her before any scrolling. The
                        gold bar stays at the bottom of the screen on every page. The UI is German because her clients
                        are.
                    </figcaption>
                </figure>
            </section>

            {/* §2 Constraints */}
            <section className={cn("py-12 border-t border-border")}>
                <SectionHeading eyebrow="The constraints">What I didn&apos;t get to choose</SectionHeading>
                <ul className={cn("grid gap-4 sm:grid-cols-2")}>
                    {CONSTRAINTS.map(({ title, body }) => (
                        <li key={title} className={cn("rounded-lg bg-card ring-1 ring-foreground/10 p-5")}>
                            <h3 className={cn("mb-2 text-base font-semibold")}>{title}</h3>
                            <p className={cn("text-sm text-muted-foreground leading-relaxed")}>{body}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* §5 Decisions */}
            <section className={cn("py-12 border-t border-border")}>
                <SectionHeading eyebrow="Design and engineering">Four decisions, and what each one prevents</SectionHeading>
                <ol className={cn("flex flex-col gap-12")}>
                    {DECISIONS.map(({ rule, how, prevents, image }, index) => (
                        <li
                            key={rule}
                            className={cn("grid gap-6", image && "md:grid-cols-[1fr_16rem] md:items-start")}
                        >
                            <div>
                                <h3 className={cn("mb-3 text-lg sm:text-xl font-semibold")}>
                                    <span className={cn("mr-2 text-accent")}>{index + 1}.</span>
                                    {rule}
                                </h3>
                                <p className={cn("mb-4 text-base text-muted-foreground leading-relaxed")}>{how}</p>
                                <p className={cn("border-l-2 border-accent pl-4 text-base leading-relaxed")}>
                                    <span className={cn("font-semibold")}>Prevents: </span>
                                    {prevents}
                                </p>
                            </div>
                            {image && (
                                <figure className={cn("max-w-64 mx-auto md:mx-0")}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        className={cn("w-full h-auto rounded-2xl ring-1 ring-foreground/10 shadow-sm")}
                                    />
                                    <figcaption className={cn("mt-3 text-sm text-muted-foreground")}>
                                        {image.caption}
                                    </figcaption>
                                </figure>
                            )}
                        </li>
                    ))}
                </ol>
                <figure className={cn("mt-16")}>
                    <Image
                        src={`${IMAGE_DIR}/4-portraets-desktop.webp`}
                        alt="Portraits section on a desktop: a portrait photo on the left; on the right the heading “Porträts”, a short German introduction and a gold “Porträts anfragen” button."
                        width={1800}
                        height={675}
                        className={cn("w-full h-auto rounded-lg ring-1 ring-foreground/10 shadow-sm")}
                    />
                    <figcaption className={cn("mt-3 text-sm text-muted-foreground")}>
                        One of the six service sections on a desktop. The photo keeps its fixed frame, and the enquiry
                        button moves next to the text, where a mouse user is already reading.
                    </figcaption>
                </figure>
            </section>

            {TESTIMONIAL && (
                <section className={cn("py-12 border-t border-border")}>
                    <figure className={cn("max-w-2xl mx-auto text-center")}>
                        <blockquote className={cn("text-lg sm:text-xl leading-relaxed")}>
                            „{TESTIMONIAL.quote}“
                        </blockquote>
                        <figcaption className={cn("mt-4 text-sm text-muted-foreground")}>
                            — {TESTIMONIAL.author}
                        </figcaption>
                    </figure>
                </section>
            )}

            {/* CTA */}
            <section className={cn("py-12 mb-12 border-t border-border text-center")}>
                <h2 className={cn("mb-3 text-2xl sm:text-3xl font-bold tracking-tight")}>See it on your phone</h2>
                <p className={cn("mb-8 max-w-xl mx-auto text-base text-muted-foreground leading-relaxed")}>
                    The site is live and in use. Open it on a phone to follow the path her visitors take, from the first
                    photo to a pre-written WhatsApp message.{" "}
                    {REPO_URL ? "The source is on GitHub." : "The source code is private."}
                </p>
                <div className={cn("mb-8 flex flex-wrap justify-center gap-3")}>
                    <a
                        href={LIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "xl" }))}
                    >
                        Visit the live site →
                    </a>
                    {REPO_URL && (
                        <a
                            href={REPO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
                        >
                            Source on GitHub
                        </a>
                    )}
                    <a
                        href={`/#${SECTION_IDS.contact}`}
                        className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
                    >
                        Get in touch
                    </a>
                </div>
                <p className={cn("text-sm text-muted-foreground")}>
                    Available for freelance projects and full-time frontend roles.
                </p>
            </section>
        </main>
    );
}
