import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants"
import type { AboutContent } from "@/lib/data/about"
import { Fragment } from "react"

export function AboutSection({ content }: { content: AboutContent }) {
    return (
        <section id={SECTION_IDS.about} className={cn("scroll-mt-nav py-12 md:py-20 px-6")}>
            <h2 className={cn("mb-6 text-3xl font-semibold")}>
                {content.heading}
            </h2>
            <div className={cn("space-y-4")}>
                <p className={cn("text-base font-normal leading-relaxed text-foreground")}>
                    {content.paragraph}
                </p>
                <p className={cn("text-base font-normal leading-relaxed text-foreground")}>
                    {content.games.intro}{" "}
                    {content.games.links.map((link, index) => (
                        <Fragment key={link.url}>
                            {index > 0 && (index === content.games.links.length - 1 ? " and " : ", ")}
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn("underline hover:no-underline")}
                            >
                                {link.title}
                            </a>
                        </Fragment>
                    ))}
                    .
                </p>
            </div>
        </section>
    )
}
