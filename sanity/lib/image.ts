import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
