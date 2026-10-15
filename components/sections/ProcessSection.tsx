import { SECTION_IDS } from "@/lib/constants";
import type { ProcessContent } from "@/lib/data/process";
import { cn } from "@/lib/utils";

export function ProcessSection({ content }: { content: ProcessContent }) {
    return (
        <section id={SECTION_IDS.process} className={cn("scroll-mt-nav py-12 md:py-20 px-0 md:px-6")}>
            <h2 className={cn("px-6 md:px-0 mb-6 text-3xl font-semibold")}>
                {content.heading}
            </h2>
            <div className={cn("px-6 md:px-0")}>
                {/* Native numbering, so screen readers announce the step numbers */}
                <ol className={cn("list-decimal pl-5 space-y-4 marker:text-accent marker:font-semibold")}>
                    {content.steps.map(step => (
                        <li key={step.title} className={cn("pl-1")}>
                            <strong className={cn("block font-semibold")}>{step.title}</strong>
                            <p className={cn("mt-1 text-sm text-muted-foreground")}>{step.description}</p>
                        </li>
                    ))}
                </ol>
                <p className={cn("mt-6 text-sm")}>{content.paymentTerms}</p>
            </div>
        </section>
    )
}
