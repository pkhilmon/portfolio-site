import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "@/sanity/sanity/env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: "published",
});
