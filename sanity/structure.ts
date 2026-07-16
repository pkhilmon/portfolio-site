import type { StructureResolver } from "sanity/structure";

const SINGLETON_TYPES = ["hero", "about", "contact", "projectsSettings"];

export const structure: StructureResolver = (S) =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Hero")
                .id("hero")
                .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
                .title("About")
                .id("about")
                .child(S.document().schemaType("about").documentId("about")),
            S.listItem()
                .title("Contact")
                .id("contact")
                .child(S.document().schemaType("contact").documentId("contact")),
            S.listItem()
                .title("Projects Settings")
                .id("projectsSettings")
                .child(
                    S.document()
                        .schemaType("projectsSettings")
                        .documentId("projectsSettings"),
                ),
            S.divider(),
            S.documentTypeListItem("project")
                .title("Projects")
                .child(
                    S.documentTypeList("project")
                        .title("Projects")
                        .defaultOrdering([{ field: "order", direction: "asc" }]),
                ),
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() &&
                    !SINGLETON_TYPES.includes(item.getId()!) &&
                    item.getId() !== "project",
            ),
        ]);
