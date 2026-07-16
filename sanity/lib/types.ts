import type { SanityImageSource } from "@sanity/image-url";

export interface HeroContent {
    eyebrow: string;
    headline: string;
    tagline?: string;
    primaryCtaLabel: string;
    bookACallLabel: string;
}

export interface AboutContent {
    heading: string;
    paragraphs: string[];
}

export interface ContactContent {
    heading: string;
    privacyNotice: string;
}

export interface ProjectsSettingsContent {
    heading: string;
}

export interface ProjectItem {
    _id: string;
    title: string;
    description: string;
    stack: string[];
    liveUrl?: string;
    gitUrl?: string;
    image: SanityImageSource;
    imageAlt: string;
}
