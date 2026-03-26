import "@/lib/env";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-inter'});

export const metadata: Metadata = {
  title: "Pavlo Khilmon - Software Developer",
  description: "Frontend developer specialising in React and Next.js with a background spanning game dev, Java, embedded systems and Python.",
};

export const viewport = {
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
      <body className={cn("antialiased")}>
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
