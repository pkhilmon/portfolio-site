import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { SECTION_IDS, CALENDLY_URL } from "@/lib/constants";
import type { HeroContent } from "@/sanity/lib/types";

// xl on mobile (<640px), 2xl on sm+ — matches 2xl size definition
const heroButtonSm = "sm:h-12 sm:gap-2 sm:px-7 sm:text-base";

export function HeroSection({ content }: { content: HeroContent }) {
    return (
        <section id={SECTION_IDS.hero} className={cn("scroll-mt-nav px-6 py-20 md:py-32 text-center")}>
            <hgroup>
                <p className={cn("mb-3 text-xs sm:text-sm font-medium text-accent uppercase tracking-widest")}>
                    {content.eyebrow}
                </p>
                <h1 className={cn("mb-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight")}>
                    {content.headline}
                </h1>
            </hgroup>
            <p className={cn("mb-10 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed")}>
                {content.tagline}
            </p>
            <div className={cn("flex flex-row justify-center gap-3")}>
                <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "default", size: "xl" }), heroButtonSm)}
                >
                    {content.bookACallLabel}
                </a>
                <a
                    href={`#${SECTION_IDS.contact}`}
                    className={cn(buttonVariants({ variant: "outline", size: "xl" }), heroButtonSm)}
                >
                    {content.primaryCtaLabel}
                </a>
            </div>
        </section>
    )
}
