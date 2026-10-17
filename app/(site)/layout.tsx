import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css"
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/env";
import { ACTIVE_THEME, HEADER_TITLE, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: HEADER_TITLE,
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
