import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button-variants"

export function CVDownload({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-row gap-3", className)}>
            <a
                href="/files/CV-Pavlo-Khilmon-en.pdf"
                download="CV-Pavlo-Khilmon-en.pdf"
                className={cn(buttonVariants({ variant: "outline" }))}
            >
                <span aria-hidden="true">↓</span> CV (English)
            </a>
            <a
                href="/files/CV-Pavlo-Khilmon-de.pdf"
                download="CV-Pavlo-Khilmon-de.pdf"
                className={cn(buttonVariants({ variant: "outline" }))}
            >
                <span aria-hidden="true">↓</span> CV (Deutsch)
            </a>
        </div>
    )
}
