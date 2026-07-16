if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.warn("[config] NEXT_PUBLIC_SANITY_PROJECT_ID is not set - Sanity content will not load");
}
if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.warn("[config] NEXT_PUBLIC_SANITY_DATASET is not set - Sanity content will not load");
}
if (!process.env.SANITY_REVALIDATE_SECRET) {
    console.warn("[config] SANITY_REVALIDATE_SECRET is not set - the revalidate route will reject all requests");
}

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-07-16";
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET ?? "";
