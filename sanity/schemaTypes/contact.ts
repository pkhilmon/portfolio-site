import { defineField, defineType } from "sanity";

export const contact = defineType({
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "privacyNotice",
            title: "Privacy Notice",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
