import { render, screen } from "@testing-library/react"
import { ContactSection } from "./ContactSection"
import { EMAIL, SECTION_IDS } from "@/lib/constants"

jest.mock('./ContactForm', () => ({
    ContactForm: () => <div data-testid="contact-form-mock">ContactForm</div>,
}))

describe('ContactSection', () => {
    it('renders section with correct id', () => {
        render(<ContactSection />)
        const section = document.getElementById(SECTION_IDS.contact)
        expect(section).toBeInTheDocument()
    })

    it('renders an h2 heading', () => {
        render(<ContactSection />)
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('renders the ContactForm component', () => {
        render(<ContactSection />)
        expect(screen.getByTestId('contact-form-mock')).toBeInTheDocument()
    })

    it('renders email link with mailto href', () => {
        render(<ContactSection />)
        const emailLink = screen.getByRole('link', { name: /email me directly/i })
        expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
    })

    it('renders CV download links for both languages', () => {
        render(<ContactSection />)
        const links = screen.getAllByRole('link')
        const hrefs = links.map(l => l.getAttribute('href'))
        expect(hrefs.some(h => h?.includes('en.pdf'))).toBe(true)
        expect(hrefs.some(h => h?.includes('de.pdf'))).toBe(true)
    })

    it('renders privacy notice text', () => {
        render(<ContactSection />)
        expect(screen.getByText(/Formspree/i)).toBeInTheDocument()
        expect(screen.getByText(/not stored/i)).toBeInTheDocument()
    })
})