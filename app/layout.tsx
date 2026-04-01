import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/env";
import { ACTIVE_THEME } from "@/lib/constants";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const DESCRIPTION = 'Frontend developer specialising in React and Next.js. Background in game dev, embedded systems, and enterprise Java. Available for freelance and full-time roles.';
const OG_DESCRIPTION = 'Frontend developer specialising in React and Next.js. Background in game dev, embedded systems, and enterprise Java. Available for freelance and full-time roles.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Pavlo Khilmon — Frontend Developer',
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Pavlo Khilmon',
    url: SITE_URL,
    title: 'Pavlo Khilmon — Frontend Developer',
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pavlo Khilmon — Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavlo Khilmon — Frontend Developer',
    description: OG_DESCRIPTION,
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={ACTIVE_THEME} className={cn(inter.variable)}>
      <body className={cn("font-inter", "antialiased")}>
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
