import { HEADER_TITLE, JOB_TITLE, SOCIAL_LINKS } from "@/lib/constants";
import { SITE_URL } from "@/lib/env";

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: HEADER_TITLE,
    jobTitle: JOB_TITLE,
    url: SITE_URL,
    sameAs: SOCIAL_LINKS.map(({ href }) => href),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildPersonJsonLd()) }}
    />
  );
}
