"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef, useCallback } from "react"
import { SECTION_IDS, NAV_LINKS, SOCIAL_LINKS, HEADER_TITLE } from "@/lib/constants"
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { QRCodeButton } from "../ui/QRCodeButton";


export function NavBar() {
    const [activeId, setActiveId] = useState<string>("")
    const [scrolled, setScrolled] = useState<boolean>(false)
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [heroInView, setHeroInView] = useState<boolean>(true)
    const pathname = usePathname()
    // Only the home page has a hero; every other page shows the name from the start
    const hideTitle = pathname === "/" && heroInView

    const drawerRef = useRef<HTMLDivElement>(null)
    const hamburgerRef = useRef<HTMLButtonElement>(null)
    const drawerOpenRef = useRef<boolean>(drawerOpen);

    const closeDrawer = useCallback(() => {
        setDrawerOpen(false);
        hamburgerRef.current?.focus();
    }, []) // stable - setDrawerOpen and refs dont change

    // active secrtion
    useEffect(() => {
        const sectionIds = Object.values(SECTION_IDS);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            {
                rootMargin: "-40% 0px -55% 0px", // trigger when secrion hits middle of the screen
                threshold: 0,
            }
        )

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        })

        return () => observer.disconnect()
    }, [])

    // hide/show nav name based on hero section visibility
    useEffect(() => {
        const hero = document.getElementById("hero")
        if (!hero) return
        const observer = new IntersectionObserver(
            ([entry]) => setHeroInView(entry.isIntersecting),
            { rootMargin: "-250px 0px 0px 0px", threshold: 0 }
        )
        observer.observe(hero)
        return () => observer.disconnect()
    }, [pathname]) // NavBar lives in the layout, so re-observe the new hero after client navigation back to /

    // scroll threshold for frosted glass
    useEffect(() => {
        const threshold = 10
        const handleScroll = () => { setScrolled(window.scrollY > threshold); }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    // close drawer on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && drawerOpen) closeDrawer()
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [closeDrawer, drawerOpen]) // safe dep - closeDrawer is now stable

    // focus trap
    useEffect(() => {
        if (!drawerOpen) return

        const drawer = drawerRef.current;
        if (!drawer) return

        // focus the drawer itself on open
        drawer.focus()

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return

            const focusable = drawer.querySelectorAll<HTMLElement>(
                'a, button, [tabindex]:not([tabindex="-1"])'
            )
            const first = focusable[0]
            const last = focusable[focusable.length - 1]

            if (!first) return // nothing focusable - bail out entirely
            if (focusable.length === 1) {
                // single element = keep focus pinned
                e.preventDefault()
                first.focus()
                return
            }
            if (e.shiftKey) {
                // shift+tab on first -> wrap to last
                if (document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                }
            } else {
                // tab on last -> wrap to first
                if (document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        }

        drawer.addEventListener("keydown", handleTab)

        return () => drawer.removeEventListener("keydown", handleTab)
    }, [drawerOpen])

    // lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [drawerOpen])

    useEffect(() => { drawerOpenRef.current = drawerOpen; }, [drawerOpen])

    // close drawer on viewport resize past the md breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && drawerOpenRef.current) closeDrawer();
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [closeDrawer])

    return (
        <div>
            <header className={cn("fixed top-0 inset-x-0 z-50 h-nav transition-all duration-300",
                scrolled
                    ? "border-b border-border bg-background/80 backdrop-blur-sm"
                    : "border-b border-transparent bg-transparent"
            )}>
                <nav
                    className="mx-auto flex max-w-5xl items-center justify-between px-6 h-full"
                    aria-label="Primary navigation"
                >
                    <Link href="/" className={cn(
                        "uppercase text-sm font-semibold text-gray-700 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        "transition-all duration-300",
                        hideTitle ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}>
                        {HEADER_TITLE}
                    </Link>

                    {/* Desktop links */}
                    {/* <ul className="hidden md:flex items-center gap-6 text-sm">
                        {NAV_LINKS.map((key) => {
                            const id = SECTION_IDS[key];
                            const isActive = activeId === id;
                            return (
                                <li key={key}>
                                    <a href={`#${id}`}
                                        aria-current={isActive ? "page" : undefined}
                                        className={cn("capitalize transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                                            isActive
                                                ? "text-accent font-medium"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}>
                                        {id}
                                    </a>
                                </li>
                            )
                        }
                        )}
                    </ul> */}

                    {/* Desktop CV download link */}
                    <QRCodeButton className={cn("hidden md:flex h-9 w-9")} />

                    {/* Hamburger mobile only */}
                    <div className={cn("md:hidden flex gap-0")}>
                        <QRCodeButton className={cn("items-center justify-center h-nav w-11 text-muted-foreground")} />
                        {/* <button
                            ref={hamburgerRef}
                            onClick={() => setDrawerOpen(true)}
                            aria-label="open navigation menu"
                            aria-expanded={drawerOpen}
                            aria-controls="mobile-drawer"
                            className={cn("flex flex-col justify-center items-center gap-1.5 w-11 h-nav rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-gray-700")}
                        >
                            <span className={cn("block h-px w-5 bg-current transition-all duration-300", drawerOpen && "translate-y-2 rotate-45")} />
                            <span className={cn("block h-px w-5 bg-current transition-all duration-300", drawerOpen && "opacity-0")} />
                            <span className={cn("block h-px w-5 bg-current transition-all duration-300", drawerOpen && "-translate-y-2 rotate-45")} />
                        </button> */}
                    </div>
                </nav>
            </header>

            {/* Backdrop */}
            {drawerOpen && (
                <div
                    className={cn("fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden")}
                    aria-hidden="true"
                    onClick={closeDrawer}
                />
            )}

            {/* Drawer */}

            <div
                id="mobile-drawer"
                ref={drawerRef}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                tabIndex={-1}
                aria-hidden={!drawerOpen}
                className={cn("fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border",
                    "flex flex-col pt-20 pb-8 px-6 gap-2",
                    "transition-transform duration-300 ease-in-out md:hidden",
                    drawerOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Close button */}
                <button
                    onClick={closeDrawer}
                    aria-label="Close navigation menu"
                    className={cn("absolute top-4 right-4 flex items-center justify-center w-11 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-muted-foreground hover:text-foreground transition-colors")}
                >x</button>

                {/* Section links - min 44x44px tap targets */}
                {/* <nav aria-label="Mobile navigation">
                    <ul className={cn("flex flex-col gap-1")}>
                        {NAV_LINKS.map((id) => {
                            const key = SECTION_IDS[id];
                            return (
                                <li key={key}>
                                    <a
                                        href={`#${id}`}
                                        onClick={closeDrawer}
                                        aria-current={activeId === id ? "page" : undefined}
                                        className={cn(
                                            "flex items-center capitalize min-h-11 px-3 rounded text-base transition-colors",
                                            "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                                            activeId === id
                                                ? "text-accent font-medium bg-accent/10"
                                                : "text-muted-foreground hover:text-accent hover:bg-accent/10"
                                        )}
                                    >
                                        {id}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav> */}

                {/* Social links at the bottom */}
                <div className={cn("mt-auto flex gap-4 text-sm text-muted-foreground")}>
                    {SOCIAL_LINKS.map(({ href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cn("min-h-11 flex items-center hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}
                        >
                            {label}
                            <HugeiconsIcon icon={LinkSquare01Icon} size={14} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}