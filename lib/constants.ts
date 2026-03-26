export const SECTION_IDS = {
    hero: "hero",
    about: "about",
    skills: "skills",
    projects: "projects",
    testimonials: "testimonials",
    contact: "contact",
} as const;

export const NAV_LINKS = ["about", "skills", "projects", "testimonials", "contact"] as const satisfies ReadonlyArray<keyof typeof SECTION_IDS>;

export const HEADER_TITLE = "Portfolio" as const;
export const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "";

type SocialLink = {
    href: string;
    label: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
    { href: "https://www.linkedin.com/in/pavlo-khilmon-260335131", label: "LinkedIn" },
    { href: "https://github.com/Apelmon", label: "GitHub" },
    { href: "https://www.upwork.com/freelancers/~01fda2e07bc1fa016b", label: "Upwork" },
];