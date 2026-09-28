import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { SECTION_IDS } from "@/lib/constants";

const TITLE = "Tournament software for a 24-hour charity swim";
const DESCRIPTION =
    "Case study: a staff app and public kiosk that register 300–500 swimmers, record every distance they swim over 24 continuous hours, and produce the official rankings and award lists.";

const DEMO_URL = "https://24h-schwimmen-demo.vercel.app";
// Repo stays private until the client agrees (27.10.2026). Set the URL here once it is public.
const REPO_URL: string | null = null;
// Drops in once the client has approved the wording. Never publish a draft quote.
const TESTIMONIAL: { quote: string; author: string } | null = null;

const IMAGE_DIR = "/images/work/dlrg-24h-schwimmen";

// Verified in the repo on 2026-09-28
const METRICS = ["525 commits in 9 weeks", "57 user stories shipped", "Next.js 16 · React 19 · Prisma 7"] as const;

const CONSTRAINTS = [
    {
        title: "24 hours, once a year",
        body: "The competition runs continuously for a full day. There is no maintenance window and no second attempt.",
    },
    {
        title: "Volunteers at 3 a.m.",
        body: "Helpers record distances at the pool edge in night shifts, on their own phones, after a few minutes of instruction.",
    },
    {
        title: "300–500 participants, results under a second",
        body: "Several thousand bookings a night, and every ranking view has to answer in under one second while the event is live.",
    },
    {
        title: "Personal data of minors",
        body: "Birth dates, children's names and publication objections. GDPR is a feature requirement here, not a footer link.",
    },
    {
        title: "Official rules I don't control",
        body: "Age groups, medal thresholds and awards follow the 2027 competition rules. They changed while the app was being built.",
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
        rule: "The booking ledger is append-only.",
        how: "A booking row is never updated or deleted. A correction is a new row that points at the booking it replaces, and a unique index allows each booking to be corrected only once, so every history is a single chain.",
        prevents:
            "Arguments at the award ceremony about who changed a distance, and totals that silently count a corrected card twice. The trail the club asked for comes free, without a separate audit table.",
        image: {
            src: `${IMAGE_DIR}/3-buchungen-phone.webp`,
            alt: "Booking form on a phone: count card 4711, start number 289, 130 m, with a yellow warning that 130 m is not a multiple of 50 m.",
            caption:
                "Recording a count card. 130 m is not a multiple of the 50 m pool, so the app asks before it saves. It's a warning, not a block, because the helper is holding the paper card.",
            width: 600,
            height: 1022,
        },
    },
    {
        rule: "“Exactly one active event” is enforced by the database.",
        how: "A partial unique index on the event table, UNIQUE (status) WHERE status = 'active', instead of a check in application code.",
        prevents:
            "Two admins on two laptops starting different events in the same second. The second write fails at the database, whatever the code above it gets wrong.",
    },
    {
        rule: "Start numbers are assigned atomically.",
        how: "Several helpers register walk-ins at the same time. Each registration increments a per-event counter and creates the participant in one transaction. The row lock on the counter serialises concurrent sign-ups, and a unique (event, start number) constraint backs it up.",
        prevents:
            "The classic read-max-then-insert race, where two swimmers leave the desk with the same number printed on their card.",
    },
    {
        rule: "Privacy is one shared filter, not per-screen logic.",
        how: "A participant who objects to publication is redacted in the ranking queries themselves. The live rankings, the public lookup kiosk and every PDF list read from those queries, and the unauthenticated kiosk returns only the fields it displays.",
        prevents:
            "Next year's new export quietly printing an objector's name because nobody remembered to add the check.",
        image: {
            src: `${IMAGE_DIR}/2-abfrage-phone.webp`,
            alt: "Public lookup on a phone: greeting for start number 289, total distance 43,050 m split into 26,850 m day and 16,200 m night, and a gold medal notice.",
            caption:
                "The public kiosk: swimmers type their start number and see their total, day/night split and current medal. It shows a first name only, and none at all for objectors.",
            width: 600,
            height: 1022,
        },
    },
];

export const metadata: Metadata = {
    title: `${TITLE} — Pavlo Khilmon`,
    description: DESCRIPTION,
    alternates: { canonical: "/work/dlrg-24h-schwimmen" },
    openGraph: {
        type: "article",
        title: TITLE,
        description: DESCRIPTION,
        url: "/work/dlrg-24h-schwimmen",
        images: [{ url: `${IMAGE_DIR}/og.jpg`, width: 1200, height: 630, alt: "Live ranking screen of the 24h-Schwimmen app" }],
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

export default function DlrgCaseStudyPage() {
    return (
        <main id="main-content" tabIndex={-1} className={cn("mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8")}>
            {/* Hero */}
            <section className={cn("pt-16 pb-12 md:pt-24")}>
                <hgroup>
                    <p className={cn("mb-3 text-xs sm:text-sm font-medium text-accent uppercase tracking-widest")}>
                        Case study · DLRG Melle · 2026
                    </p>
                    <h1 className={cn("mb-5 text-4xl sm:text-5xl font-bold leading-tight tracking-tight")}>{TITLE}</h1>
                </hgroup>
                <p className={cn("mb-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed")}>
                    A staff app and public lookup kiosk for a volunteer lifesaving club. It registers 300–500 swimmers,
                    records every distance they swim over 24 continuous hours, and produces the official rankings and
                    award lists under the 2027 competition rules.
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
                        href={DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "xl" }))}
                    >
                        Open the live demo →
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
                        src={`${IMAGE_DIR}/1-wertung-desktop.webp`}
                        alt="Live ranking screen: a table of swimmers ordered by distance, led by start number 289 with 43,050 m, with tabs for age groups, night owls and group standings."
                        width={1800}
                        height={1125}
                        priority
                        className={cn("w-full h-auto rounded-lg ring-1 ring-foreground/10 shadow-sm")}
                    />
                    <figcaption className={cn("mt-3 text-sm text-muted-foreground")}>
                        The live ranking, 16 hours into the demo event. It refreshes on its own while helpers record new
                        distances, with tabs for age groups, gender, night owls and club standings. The UI is German
                        because its users are.
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
                <SectionHeading eyebrow="Engineering">Four decisions, and what each one prevents</SectionHeading>
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
                <figure className={cn("mt-16 max-w-md mx-auto")}>
                    <Image
                        src={`${IMAGE_DIR}/4-siegerehrung-pdf.webp`}
                        alt="First page of the award ceremony list PDF: places one to three per age group and gender, with names and distances."
                        width={900}
                        height={1273}
                        className={cn("w-full h-auto rounded-lg ring-1 ring-foreground/10 shadow-sm")}
                    />
                    <figcaption className={cn("mt-3 text-sm text-muted-foreground")}>
                        The award ceremony list: a generated PDF that goes from the ranking to the podium without
                        anyone retyping it. Generated from the demo&apos;s fictional data.
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
                <h2 className={cn("mb-3 text-2xl sm:text-3xl font-bold tracking-tight")}>Try it yourself</h2>
                <p className={cn("mb-8 max-w-xl mx-auto text-base text-muted-foreground leading-relaxed")}>
                    The demo is the real app with fictional swimmers. The logins are printed on its sign-in page, you can
                    click everything, and it resets every night.{" "}
                    {REPO_URL ? "The source is on GitHub." : "The source code is available on request."}
                </p>
                <div className={cn("mb-8 flex flex-wrap justify-center gap-3")}>
                    <a
                        href={DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "xl" }))}
                    >
                        Open the live demo →
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
