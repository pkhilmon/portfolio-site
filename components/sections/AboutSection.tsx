import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants"
import type { AboutContent } from "@/sanity/lib/types"

export function AboutSection({ content }: { content: AboutContent }) {
    return (
        <section id={SECTION_IDS.about} className={cn("scroll-mt-nav py-12 md:py-20 px-6")}>
            <h2 className={cn("mb-6 text-3xl font-semibold")}>
                {content.heading}
            </h2>
            <div className={cn("space-y-4")}>
                {content.paragraphs.map((paragraph, index) => (
                    <p key={index} className={cn("text-base font-normal leading-relaxed text-foreground")}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    )
}
