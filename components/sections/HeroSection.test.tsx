import { render, screen } from "@testing-library/react"
import { HeroSection } from "./HeroSection"
import { heroContent } from "@/lib/data/hero"
import { SECTION_IDS } from "@/lib/constants"

describe('HeroSection', () => {
    it ('renders an h1 with the headline', () => {
        render(<HeroSection content={heroContent} />)
        expect(screen.getByRole('heading', { level: 1, name: heroContent.headline })).toBeInTheDocument()
    })

    it ('renders the eyebrow label', () => {
        render(<HeroSection content={heroContent} />)
        expect(screen.getByText(heroContent.eyebrow)).toBeInTheDocument()
    })

    it ('renders the tagline', () => {
        render(<HeroSection content={heroContent} />)
        expect(screen.getByText(heroContent.tagline)).toBeInTheDocument()
    })

    it ('primary CTA links to the contact section', () => {
        render(<HeroSection content={heroContent} />)
        const primaryLink = screen.getByRole('link', {name: heroContent.primaryCtaLabel})
        expect(primaryLink).toHaveAttribute('href', `#${SECTION_IDS.contact}`)
    })

    it ('section has the correct id for scroll-spy', () => {
        render(<HeroSection content={heroContent} />)
        const section = document.getElementById(SECTION_IDS.hero)
        expect(section).not.toBeNull()
    })
})
