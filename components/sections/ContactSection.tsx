import { cn } from "@/lib/utils";
import { CALENDLY_URL, EMAIL, SECTION_IDS } from "@/lib/constants";
import { ContactForm } from "@/components/sections/ContactForm";
import { buttonVariants } from "@/components/ui/button-variants";
import { ContactContent } from "@/lib/data/contact";

export function ContactSection({ content }: { content: ContactContent }) {
    return (
        <section id={SECTION_IDS.contact} className={cn("scroll-mt-nav py-12 md:py-20 px-0 md:px-6")}>
            <div className={cn("flex flex-col gap-8 px-6 md:px-0")}>
                <div className={cn("flex flex-col gap-3")}>
                    <h2 className={cn("text-3xl font-semibold leading-tight")}>
                        {content.heading}
                    </h2>
                    <p className={cn("text-muted-foreground")}>{content.body}</p>
                    <p className={cn("text-sm font-medium")}>{content.availability}</p>
                </div>

                {/* Each CTA renders only when its env var is set, same guard as before */}
                {(CALENDLY_URL || EMAIL) && (
                    <div className={cn("flex flex-col gap-3 sm:flex-row")}>
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
                        {EMAIL && (
                            <a
                                href={`mailto:${EMAIL}`}
                                className={cn(buttonVariants({ variant: "outline", size: "2xl" }))}
                            >
                                {content.emailLabel}
                            </a>
                        )}
                    </div>
                )}

                <ContactForm />

                <p className={cn("text-xs text-muted-foreground")}>
                    {content.privacyNotice}
                </p>
            </div>
        </section>
    )
}
