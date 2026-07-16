import { defineField, defineType } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "stack",
            title: "Stack",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "liveUrl",
            title: "Live URL",
            type: "url",
            validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
        }),
        defineField({
            name: "gitUrl",
            title: "Git URL",
            type: "url",
            validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "imageAlt",
            title: "Image Alt Text",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
            description:
                "Controls display order (ascending). Leave gaps of 10 (10, 20, 30...) so you can insert an item between two others later without renumbering everything.",
            initialValue: () => Date.now(),
            validation: (Rule) => Rule.required(),
        }),
    ],
});
