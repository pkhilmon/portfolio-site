import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { SECTION_IDS } from "@/lib/constants";
import { heroContent } from "@/lib/data/hero";

export function HeroSection() {
    return (
        <section id={SECTION_IDS.hero} className={cn("scroll-mt-nav px-6 py-12 md:py-20")}>
            <h1 className={cn("mb-4 text-5xl font-bold leading-tight tracking-tight")}>
                <span className={cn("underline underline-offset-6 decoration-6 decoration-accent")}>
                    {heroContent.firstName}
                </span> <mark className={cn("px-3 pb-0.5 text-white bg-accent rounded-2xl")}>
                    {heroContent.lastName}
                </mark>
            </h1>
            <p className={cn("mb-4 text-sm font-medium text-accent uppercase tracking-wide")}>
                {heroContent.eyebrow}
            </p>
            <p className={cn("mb-8 max-w-xl text-base text-muted-foreground leading-relaxed")}>
                {heroContent.tagline}
            </p>
            <div className={cn("flex flex-col sm:flex-row gap-3")}>
                <a href={`#${SECTION_IDS.contact}`} className={cn(buttonVariants({ variant: "default" }))}>
                    {heroContent.primaryCtaLabel}
                </a>
                <a href={`#${SECTION_IDS.projects}`} className={cn(buttonVariants({ variant: "outline" }))}>
                    {heroContent.secondaryCtaLabel}
                </a>
            </div>
        </section>
    )
}
