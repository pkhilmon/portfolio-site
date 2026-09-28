import type { ProjectWithImageUrl } from "@/sanity/lib/types";

// TODO(remove-sanity): planned rebuild without Sanity. Project content is moving into code,
// starting with the entries below; the Sanity-backed ones get migrated here, then the Studio,
// schemas, queries and the /api/revalidate webhook go. See README "Planned: remove Sanity".

export type ProjectCardData = ProjectWithImageUrl & {
    // Internal case-study route; rendered as the card's primary link when set
    caseStudyUrl?: string;
};

// Rendered before the Sanity projects, in this order
export const LOCAL_PROJECTS: readonly ProjectCardData[] = [
    {
        _id: "local-dlrg-24h-schwimmen",
        title: "DLRG 24h-Schwimmen",
        description:
            "Tournament software for a 24-hour charity swim: registration, round-the-clock distance booking by volunteers, live rankings, a public lookup kiosk and the award lists as PDF. Built for a DLRG lifesaving club under the 2027 competition rules.",
        stack: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "PostgreSQL", "Tailwind 4"],
        liveUrl: "https://24h-schwimmen-demo.vercel.app",
        caseStudyUrl: "/work/dlrg-24h-schwimmen",
        imageUrl: "/images/work/dlrg-24h-schwimmen/card.webp",
        imageAlt: "Live ranking table of the 24h-Schwimmen app with swimmers ordered by distance",
    },
];
