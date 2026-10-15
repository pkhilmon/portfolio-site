export interface ProcessStep {
    title: string;
    description: string;
}

export interface ProcessContent {
    heading: string;
    steps: ProcessStep[];
    paymentTerms: string;
}

export interface WhyMePoint {
    title: string;
    description: string;
    links?: { label: string; href: string; }[];
}

export interface WhyMeContent {
    heading: string;
    points: WhyMePoint[];
}

// Percentages only: Release 1 shows no prices anywhere on the site
export const processContent: ProcessContent = {
    heading: "How it works",
    steps: [
        {
            title: "20-minute call",
            description: "We talk through what you need, who it's for and when it has to be live. Free and with no obligation.",
        },
        {
            title: "Written scope and quote within 48 hours",
            description: "You get what's included, what isn't, the timeline and a fixed price in writing. You pay nothing until you accept it.",
        },
        {
            title: "Weekly builds on a staging URL",
            description: "Work starts after the deposit. Every week you get a working version on a staging URL to click through and comment on.",
        },
        {
            title: "Launch and handover",
            description: "We go live on your domain, and you get the full code and every account.",
        }
    ],
    paymentTerms: "Payment: 40\u00a0% deposit when you accept the scope, 60\u00a0% at launch. Agency Overflow is invoiced weekly or per feature.",
}

export const whyMeContent: WhyMeContent = {
    heading: "Why me",
    points: [
        {
            title: "The whole stack, one person",
            description: "UI, API, database and deployment from one developer. No hand-offs between frontend and backend, and one person who answers for all of it.",
        },
        {
            // "For MVPs and landing pages": Agency Overflow is billed by the week, not at a fixed price
            title: "Fixed prices from written scopes",
            description: "For MVPs and landing pages you know the price before work starts. A change gets its own short scope and quote.",
        },
        {
            title: "Response within 48 hours",
            description: "Every email and every question gets an answer within 48 hours.",
        },
        {
            title: "Proof you can click",
            description: "Two live client projects with case studies:",
            // hrefs must match caseStudyUrl in projects.ts (checked in process.test.ts)
            links: [
                { label: "DLRG 24h-Schwimmen", href: "/work/dlrg-24h-schwimmen" },
                { label: "Vladlena Fotografie", href: "/work/vladlena-fotografie" },
            ],
        },
    ],
}
