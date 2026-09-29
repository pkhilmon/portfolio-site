import { EMAIL, HEADER_TITLE } from "@/lib/constants";
import type { Metadata } from "next";

const TITLE = `Impressum — ${HEADER_TITLE}`;
const DESCRIPTION = 'Impressum und Kontaktangaben gemäß § 5 DDG.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/impressum' },
  openGraph: {
    type: 'website',
    siteName: HEADER_TITLE,
    url: '/impressum',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      <section className="mb-8 space-y-2">
        <h2 className="text-xl font-semibold">Angaben gemäß § 5 DDG:</h2>
        <p>Pavlo Khilmon</p>
        <p>Grönenberger Str. 26b</p>
        <p>49324 Melle</p>
      </section>
      <section className="mb-8 space-y-2">
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <p>E-Mail: {EMAIL}</p>
      </section>
    </main>
  );
}
