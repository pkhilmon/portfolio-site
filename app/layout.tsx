import "@/lib/env";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-inter'});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-site-pi-weld.vercel.app'),
  title: 'Pavlo Khilmon — Frontend Developer',
  description: 'Frontend developer specialising in React and Next.js. Background in game dev, embedded systems, and enterprise Java. Available for freelance and full-time roles.',
  alternates: {
    canonical: 'https://portfolio-site-pi-weld.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://portfolio-site-pi-weld.vercel.app',
    title: 'Pavlo Khilmon — Frontend Developer',
    description: 'Frontend developer specialising in React and Next.js. Available for freelance and full-time roles in Europe.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pavlo Khilmon — Frontend Developer',
      },
    ],
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
    <html lang="en" data-theme="clean" className={cn(inter.variable)}>
      <body className={cn("font-inter", "antialiased")}>
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
