import { defineField, defineType } from "sanity";

export const hero = defineType({
    name: "hero",
    title: "Hero",
    type: "document",
    fields: [
        defineField({
            name: "eyebrow",
            title: "Eyebrow",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tagline",
            title: "Tagline",
            description: "Not currently displayed on the page (commented out in HeroSection) — kept for when it's reintroduced.",
            type: "string",
        }),
        defineField({
            name: "primaryCtaLabel",
            title: "Primary CTA Label",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "bookACallLabel",
            title: "Book a Call Label",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
