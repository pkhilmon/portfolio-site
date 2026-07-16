import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";
import { projectId, dataset, apiVersion } from "@/lib/sanity/env";

const SINGLETON_TYPES = new Set(["hero", "about", "contact", "projectsSettings"]);

export default defineConfig({
    name: "default",
    title: "Pavlo Khilmon — Content",
    projectId,
    dataset,
    basePath: "/studio",
    plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
    schema: { types: schemaTypes },
    document: {
        actions: (prev, context) =>
            SINGLETON_TYPES.has(context.schemaType)
                ? prev.filter(({ action }) => action !== "delete" && action !== "duplicate")
                : prev,
    },
});
