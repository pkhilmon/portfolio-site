export const SECTION_IDS = {
    hero: "hero",
    about: "about",
    skills: "skills",
    projects: "projects",
    testimonials: "testimonials",
    contact: "contact",
} as const;

export const NAV_LINKS = ["about", "skills", "projects", "contact"] as const satisfies ReadonlyArray<keyof typeof SECTION_IDS>;

export const HEADER_TITLE = "Pavlo Khilmon" as const;
// "teal" uses :root defaults; "indigo" applies [data-theme="indigo"] overrides
export const ACTIVE_THEME = "indigo" as const satisfies "teal" | "indigo";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "";
export const LANDING_PAGE_REPO = 'https://github.com/pkhilmon/portfolio-site' as const;

type SocialLink = {
    href: string;
    label: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
    { href: "https://www.linkedin.com/in/pavlo-khilmon-260335131", label: "LinkedIn" },
    // { href: "https://github.com/pkhilmon", label: "GitHub" },
    // { href: "https://www.upwork.com/freelancers/~01fda2e07bc1fa016b", label: "Upwork" },
];
