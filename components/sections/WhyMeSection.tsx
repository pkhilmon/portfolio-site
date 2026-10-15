import { SECTION_IDS } from "@/lib/constants";
import { WhyMeContent } from "@/lib/data/process";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

export function WhyMeSection({ content }: { content: WhyMeContent }) {
    return (
        <section id={SECTION_IDS.whyMe} className={cn("scroll-mt-nav py-12 md:py-20 px-0 md:px-6")}>
            <h2 className={cn("px-6 md:px-0 mb-6 text-3xl font-semibold")}>
                {content.heading}
            </h2>
            <ul className={cn("grid gap-5 md:grid-cols-2")}>
                {content.points.map(point => (
                    <li
                        key={point.title}
                        className={cn("flex flex-col gap-2 p-4 md:p-6 bg-card text-card-foreground ring-1 ring-foreground/10 rounded-lg")}
                    >
                        <h3 className={cn("text-base md:text-lg font-semibold")}>{point.title}</h3>
                        <p className={cn("text-sm text-muted-foreground")}>
                            {point.description}
                            {point.links?.map((link, i) => (
                                // "a and b." - the separator goes before every link except the first
                                <Fragment key={link.href}>
                                    {i === 0 ? " " : " and "}
                                    <Link
                                        href={link.href}
                                        className={cn("inline-flex items-center min-h-11 font-medium text-accent underline-offset-4 hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}
                                    >
                                        {link.label}
                                    </Link>
                                </Fragment>
                            ))}
                            {point.links && "."}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}