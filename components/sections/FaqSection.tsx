import { SECTION_IDS } from "@/lib/constants";
import type { FaqContent } from "@/lib/data/faq";
import { cn } from "@/lib/utils";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FaqSection({ content }: { content: FaqContent }) {
    return (
        <section id={SECTION_IDS.faq} className={cn("scroll-mt-nav py-12 md:py-20 px-0 md:px-6")}>
            <h2 className={cn("px-6 md:px-0 mb-6 text-3xl font-semibold")}>
                {content.heading}
            </h2>
            <ul className={cn("px-6 md:px-0 flex flex-col gap-3")}>
                {content.items.map(item => (
                    <li key={item.question}>
                        {/* Native disclosure: works without JS, answer is in the static HTML,
                            and the browser exposes the open/closed state to assistive tech */}
                        <details className={cn("group rounded-lg bg-card text-card-foreground ring-1 ring-foreground/10")}>
                            <summary className={cn(
                                "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-4 py-3 font-medium",
                                "outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
                                "[&::-webkit-details-marker]:hidden"
                            )}>
                                {item.question}
                                <span aria-hidden="true" className={cn("shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none")}>
                                    <HugeiconsIcon icon={ArrowDown01Icon} size={18} />
                                </span>
                            </summary>
                            <p className={cn("px-4 pb-4 text-sm text-muted-foreground")}>{item.answer}</p>
                        </details>
                    </li>
                ))}
            </ul>
        </section>
    )
}
