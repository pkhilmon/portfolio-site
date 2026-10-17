export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqContent {
    heading: string;
    items: FaqItem[];
}

// Percentages only: Release 1 shows no prices anywhere on the site
export const faqContent: FaqContent = {
    heading: "FAQ",
    items: [
        {
            question: "Who owns the code?",
            answer: "You do. At launch you get the full code in your own GitHub repository and admin access to every account: hosting, database and domain. Nothing stays tied to me.",
        },
        {
            question: "What happens after launch?",
            answer: "Bugs in what I built are fixed free for 30 days after launch. After that, new features get their own short scope and quote.",
        },
        {
            question: "Why do you take a deposit?",
            answer: "The 40\u00a0% deposit reserves my time for your project once you accept the written scope. The other 60\u00a0% is due at launch. Agency Overflow is invoiced weekly or per feature instead.",
        },
        {
            question: "What if I want changes?",
            answer: "Feedback on the weekly staging builds is part of the work: anything inside the written scope gets adjusted until it matches. Something new gets its own short scope and quote before I build it.",
        },
        {
            question: "How do we communicate?",
            answer: "By email in English (German works too), with a short written update and a staging link every week. A call when something needs a decision. Every message gets an answer within 24 hours.",
        },
        {
            question: "What stack do you use?",
            answer: "Next.js and TypeScript for the UI and API, PostgreSQL with Prisma for the database, and Vercel for hosting. Supabase where managed Postgres fits. For agencies I work inside your existing Next.js setup.",
        },
    ],
}
