import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants"
import type { ServicesContent } from "@/lib/data/services"

// "a", "a and b", "a, b and c"
function joinList(items: string[]) {
    if (items.length <= 1) return items.join("")
    return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`
}

export function ServicesSection({ content }: { content: ServicesContent }) {
    const { labels } = content
    return (
        <section id={SECTION_IDS.services} className={cn("scroll-mt-nav py-12 md:py-20 px-0 md:px-6")}>
            <h2 className={cn("px-6 md:px-0 mb-6 text-3xl font-semibold")}>
                {content.heading}
            </h2>
            <ul className={cn("grid gap-5")}>
                {content.items.map(service => (
                    // Stacked on mobile; from md the summary and quote link sit left, the scope sits right
                    <li
                        key={service.id}
                        className={cn("grid gap-3 p-4 md:p-6 md:grid-cols-[5fr_7fr] md:gap-x-10 bg-card text-card-foreground ring-1 ring-foreground/10 rounded-lg")}
                    >
                        <div className={cn("flex flex-col gap-3")}>
                            <h3 id={`service-${service.id}`} className={cn("text-base md:text-lg font-semibold")}>{service.title}</h3>
                            <p className={cn("text-sm text-muted-foreground")}>
                                <span className={cn("font-medium")}>{labels.timeline}</span> {service.timeline}
                            </p>
                            <p className={cn("text-sm")}>
                                <span className={cn("font-medium")}>{labels.audience}</span> {service.audience}
                            </p>
                        </div>
                        <div className={cn("flex flex-col gap-3 md:col-start-2 md:row-start-1 md:row-span-2")}>
                            <ul className={cn("list-disc pl-5 space-y-1 text-sm")}>
                                {service.inclusions.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className={cn("text-sm text-muted-foreground")}>
                                {labels.exclusions} {joinList(service.exclusions)}.
                            </p>
                        </div>
                        <a
                            href={`#${SECTION_IDS.contact}`}
                            // The three links share one label, so screen readers also announce the service
                            aria-describedby={`service-${service.id}`}
                            className={cn("justify-self-start md:self-end inline-flex items-center min-h-11 text-sm font-medium text-accent underline-offset-4 hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}
                        >
                            {labels.quoteLink}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
