import { cn } from "@/lib/utils";
import { EMAIL, SECTION_IDS } from "@/lib/constants";
import { ContactForm } from "@/components/sections/ContactForm";
import { CVDownload } from "@/components/sections/CVDownload";
import { contactHeading, PRIVACY_NOTICE } from "@/lib/data/contact";
import { buttonVariants } from "@/components/ui/button-variants";

export function ContactSection() {
    return (
        <section id={SECTION_IDS.contact} className={cn("scroll-mt-nav py-12 md:py-20 px-6")}>
            <div className={cn("flex flex-col gap-8")}>
                <h2 className={cn("text-3xl font-semibold leading-tight")}>
                    {contactHeading}
                </h2>
                <ContactForm />

                {EMAIL && <div className={cn("flex flex-col gap-3")}>
                    <p className={cn("text-sm font-medium text-muted-foreground")}>
                        Prefer email?
                    </p>
                    <a
                        href={`mailto:${EMAIL}`}
                        className={cn(buttonVariants({ variant: "ghost" }), "w-fit")}>
                        Email me directly <span aria-hidden="true">↗</span>
                    </a>
                </div>}

                <div className={cn("flex flex-col gap-3")}>
                    <p className={cn("text-sm font-medium text-muted-foreground")}>
                        Download my CV
                    </p>
                    <CVDownload />
                </div>
                
                <p className={cn("text-xs text-muted-foreground")}>
                    {PRIVACY_NOTICE}
                </p>
            </div>
        </section>
    )
}
