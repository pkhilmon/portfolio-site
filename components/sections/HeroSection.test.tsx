import { render, screen } from "@testing-library/react"
import { HeroSection } from "./HeroSection"
import { heroContent } from "@/lib/data/hero"
import { SECTION_IDS, JOB_TITLE } from "@/lib/constants"

const TEST_CALENDLY_URL = 'https://calendly.com/test/20min'

// CALENDLY_URL is read from env at import time; the getter lets a test switch it
let mockCalendlyUrl = TEST_CALENDLY_URL
jest.mock('@/lib/constants', () => ({
    ...jest.requireActual('@/lib/constants'),
    get CALENDLY_URL() { return mockCalendlyUrl },
}))

afterEach(() => {
    mockCalendlyUrl = TEST_CALENDLY_URL
})

describe('HeroSection', () => {
    it ('renders an h1 with the headline', () => {
        render(<HeroSection content={heroContent} />)
        expect(screen.getByRole('heading', { level: 1, name: heroContent.headline })).toBeInTheDocument()
    })

    it ('renders the eyebrow label', () => {
        render(<HeroSection content={heroContent} />)
        expect(screen.getByText(heroContent.eyebrow)).toBeInTheDocument()
    })

    it ('eyebrow matches the job title used in metadata and JSON-LD', () => {
        expect(heroContent.eyebrow).toBe(JOB_TITLE)
    })

    it ('both CTAs are at least 44px tall (h-12) at every width', () => {
        render(<HeroSection content={heroContent} />)
        screen.getAllByRole('link').forEach((link) => expect(link).toHaveClass('h-12'))
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

    it ('Book a Call links to Calendly in a new tab with the default variant', () => {
        render(<HeroSection content={heroContent} />)
        const link = screen.getByRole('link', { name: heroContent.bookACallLabel })
        expect(link).toHaveAttribute('href', TEST_CALENDLY_URL)
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
        expect(link).toHaveClass('bg-accent')
    })

    it ('quote CTA uses the outline variant', () => {
        render(<HeroSection content={heroContent} />)
        expect(screen.getByRole('link', { name: heroContent.primaryCtaLabel })).toHaveClass('border-accent')
    })

    it ('renders Book a Call before the quote CTA', () => {
        render(<HeroSection content={heroContent} />)
        const links = screen.getAllByRole('link')
        expect(links.map((l) => l.textContent)).toEqual([heroContent.bookACallLabel, heroContent.primaryCtaLabel])
    })

    it ('renders no Book a Call link when CALENDLY_URL is empty', () => {
        mockCalendlyUrl = ''
        render(<HeroSection content={heroContent} />)
        expect(screen.queryByRole('link', { name: heroContent.bookACallLabel })).not.toBeInTheDocument()
        expect(screen.getByRole('link', { name: heroContent.primaryCtaLabel })).toBeInTheDocument()
    })

    it ('contains no prices, placeholders or out-of-scope claims', () => {
        const { container } = render(<HeroSection content={heroContent} />)
        expect(container.textContent).not.toMatch(/€|\[ \]|auth|rls|row level security|sdk|stripe|tenantry/i)
    })
})
