import { defineField, defineType } from "sanity";

export const about = defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "paragraphs",
            title: "Paragraphs",
            type: "array",
            of: [{ type: "text", validation: (Rule) => Rule.required() }],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});
