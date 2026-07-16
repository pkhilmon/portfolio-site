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
            type: "string",
            validation: (Rule) => Rule.required(),
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
