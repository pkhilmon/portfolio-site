import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { SECTION_IDS, CALENDLY_URL } from "@/lib/constants";
import type { HeroContent } from "@/lib/data/hero";

export function HeroSection({ content }: { content: HeroContent }) {
    return (
        <section id={SECTION_IDS.hero} className={cn("scroll-mt-nav px-6 py-20 md:py-32 text-center")}>
            <hgroup>
                <p className={cn("mb-3 text-xs sm:text-sm font-medium text-accent uppercase tracking-widest")}>
                    {content.eyebrow}
                </p>
                <h1 className={cn("mb-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight")}>
                    {content.headline}
                </h1>
            </hgroup>
            <p className={cn("mb-10 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed")}>
                {content.tagline}
            </p>
            <div className={cn("flex flex-col sm:flex-row justify-center gap-3")}>
                {CALENDLY_URL && (
                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "2xl" }))}
                    >
                        {content.bookACallLabel}
                    </a>
                )}
                <a
                    href={`#${SECTION_IDS.contact}`}
                    className={cn(buttonVariants({ variant: "outline", size: "2xl" }))}
                >
                    {content.primaryCtaLabel}
                </a>
            </div>
        </section>
    )
}
