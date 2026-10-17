import { HEADER_TITLE, JOB_TITLE, SITE_DESCRIPTION, SOCIAL_LINKS } from "@/lib/constants";
import { servicesContent } from "@/lib/data/services";
import { SITE_URL } from "@/lib/env";

const PERSON_ID = `${SITE_URL}#person`

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: HEADER_TITLE,
        jobTitle: JOB_TITLE,
        url: SITE_URL,
        sameAs: SOCIAL_LINKS.map(({ href }) => href),
      },
      {
        "@type": "ProfessionalService",
        name: HEADER_TITLE,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        provider: { "@id": PERSON_ID },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: servicesContent.heading,
          itemListElement: servicesContent.items.map(({ title, audience }) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: title, description: audience },
          })),
        },
      },
    ],
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
