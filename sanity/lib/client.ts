import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "@/sanity/lib/env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: "published",
});
