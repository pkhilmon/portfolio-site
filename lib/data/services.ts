export interface ServiceItem {
    id: string
    title: string
    audience: string
    inclusions: string[]
    exclusions: string[]
    timeline: string
}

export interface ServicesContent {
    heading: string
    labels: {
        audience: string
        exclusions: string
        timeline: string
        quoteLink: string
    }
    items: ServiceItem[]
}

// No price field on purpose: Release 1 shows no prices anywhere on the site
export const servicesContent: ServicesContent = {
    heading: "Services",
    labels: {
        audience: "For:",
        exclusions: "Not included:",
        timeline: "Timeline:",
        quoteLink: "Fixed price · Get a quote",
    },
    items: [
        {
            id: "mvp-build",
            title: "MVP Build",
            audience: "founders who need a working first version to show users or investors.",
            inclusions: [
                "Web app in Next.js and TypeScript",
                "PostgreSQL database with Prisma",
                "User accounts and an admin area",
                "Separate staging and production on Vercel",
                "Full code and account handover",
            ],
            exclusions: ["visual design and branding", "copywriting", "native mobile apps", "payment processing"],
            timeline: "4–8 weeks",
        },
        {
            id: "landing-page-waitlist-analytics",
            title: "Landing Page + Waitlist + Analytics",
            audience: "founders who want to test demand before building the product.",
            inclusions: [
                "Responsive landing page in Next.js",
                "Waitlist sign-up with confirmation email",
                "Cookieless analytics",
                "SEO basics and a social share image",
            ],
            exclusions: ["copywriting", "brand design", "ad campaigns"],
            timeline: "1–2 weeks",
        },
        {
            id: "agency-overflow",
            title: "Agency Overflow",
            audience: "agencies of 3–20 people that need extra Next.js capacity.",
            inclusions: [
                "White-label work in your repo, tools and process",
                "Features end to end: UI, API and database",
                "20–30 hours a week",
                "Tested pull requests ready for review",
                "An optional paid test task before a longer engagement",
            ],
            exclusions: ["design", "direct contact with your clients unless you want it"],
            timeline: "start within 1–2 weeks, then by the week or per feature",
        },
    ],
}
