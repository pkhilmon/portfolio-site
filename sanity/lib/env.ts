if (!process.env.SANITY_STUDIO_PROJECT_ID) {
    console.warn("[config] SANITY_STUDIO_PROJECT_ID is not set - Sanity content will not load");
}
if (!process.env.SANITY_STUDIO_DATASET) {
    console.warn("[config] SANITY_STUDIO_DATASET is not set - Sanity content will not load");
}
if (!process.env.SANITY_REVALIDATE_SECRET) {
    console.warn("[config] SANITY_REVALIDATE_SECRET is not set - the revalidate route will reject all requests");
}

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "";
export const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";
export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2026-07-16';
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET ?? "";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
