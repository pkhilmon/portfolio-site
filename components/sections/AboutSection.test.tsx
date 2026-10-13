import { render, screen } from "@testing-library/react"
import { AboutSection } from "./AboutSection"
import { aboutContent } from "@/lib/data/about"
import { SECTION_IDS } from "@/lib/constants"

describe('AboutSection', () => {
    it('renders an h2 heading', () => {
        render(<AboutSection content={aboutContent} />)
        expect(screen.getByRole('heading', { level: 2})).toBeInTheDocument()
    })

    it('renders exactly 2 paragraphs', () => {
        const { container } = render(<AboutSection content={aboutContent} />)
        expect(container.querySelectorAll('p')).toHaveLength(2)
    })

    it('renders the main paragraph from aboutContent', () => {
        render(<AboutSection content={aboutContent} />)
        expect(screen.getByText(aboutContent.paragraph)).toBeInTheDocument()
    })

    it('links every game in a new tab from the second paragraph', () => {
        const { container } = render(<AboutSection content={aboutContent} />)
        const links = Array.from(container.querySelectorAll('p')[1].querySelectorAll('a'))
        expect(links).toHaveLength(4)
        expect(links.map(a => a.getAttribute('href'))).toEqual(aboutContent.games.links.map(l => l.url))
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank')
            expect(link).toHaveAttribute('rel', 'noopener noreferrer')
        })
    })

    it('joins the game links as "A, B, C and D."', () => {
        const { container } = render(<AboutSection content={aboutContent} />)
        expect(container.querySelectorAll('p')[1].textContent).toBe(
            'Before web, I shipped HTML5 games that are still playable: Bubble Burst, Jelly Madness, Jelly Madness 2 and Jewel Burst.'
        )
    })

    it('section has the correct id for scroll-spy', () => {
        const { container } = render(<AboutSection content={aboutContent} />)
        const section = container.querySelector('#' + SECTION_IDS.about)
        expect(section).toBeInTheDocument()
    })
})
