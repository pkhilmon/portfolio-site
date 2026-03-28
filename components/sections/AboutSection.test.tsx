import { render, screen } from "@testing-library/react"
import { AboutSection } from "./AboutSection"
import { aboutContent } from "@/lib/data/about"
import { SECTION_IDS } from "@/lib/constants"

describe('AboutSection', () => {
    it('renders an h2 heading', () => {
        render(<AboutSection />)
        expect(screen.getByRole('heading', { level: 2})).toBeInTheDocument()
    })

    it('renders multiple paragraphs', () => {
        render(<AboutSection />)
        // each paragraph maps to a <p> element
        expect(document.querySelectorAll('p').length).toBeGreaterThanOrEqual(3)
    })

    it('renders first paragraph from aboutContent', () => {
        render(<AboutSection />)
        expect(screen.getByText(aboutContent.paragraphs[0])).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        render(<AboutSection />)
        const section = document.getElementById(SECTION_IDS.about)
        expect(section).toBeInTheDocument()
    })
})