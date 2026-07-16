import { defineField, defineType } from "sanity";

export const projectsSettings = defineType({
    name: "projectsSettings",
    title: "Projects Settings",
    type: "document",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
