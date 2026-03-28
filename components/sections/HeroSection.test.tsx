import { render, screen } from "@testing-library/react"
import { HeroSection } from "./HeroSection"
import { heroContent } from "@/lib/data/hero"
import { SECTION_IDS } from "@/lib/constants"

describe('HeroSection', () => {
    it ('renders an h1 with the name', () => {
        render(<HeroSection />)
        expect(screen.getByRole('heading', { level: 1, name: heroContent.name })).toBeInTheDocument()
    })

    it ('renders the eyebrow label', () => {
        render(<HeroSection />)
        expect(screen.getByText(heroContent.eyebrow)).toBeInTheDocument()
    })

    it ('render the tagline', () => {
        render(<HeroSection />)
        expect(screen.getByText(heroContent.tagline)).toBeInTheDocument()
    })

    it ('primary CTA links to the contact section', () => {
        render(<HeroSection />)
        const primaryLink = screen.getByRole('link', {name: heroContent.primaryCtaLabel})
        expect(primaryLink).toHaveAttribute('href', `#${SECTION_IDS.contact}`)
    })

    it ('secondary CTA links to the projects section', () => {
        render(<HeroSection />)
        const secondaryLink = screen.getByRole('link', {name: heroContent.secondaryCtaLabel})
        expect(secondaryLink).toHaveAttribute('href', `#${SECTION_IDS.projects}`)
    })

    it ('section has the correct id for scroll-spy', () => {
        render(<HeroSection />)
        const section = document.getElementById(SECTION_IDS.hero)
        expect(section).not.toBeNull()
    })
})
