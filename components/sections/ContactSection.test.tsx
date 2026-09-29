import { render, screen } from "@testing-library/react"
import { ContactSection } from "./ContactSection"
import { SECTION_IDS } from "@/lib/constants"
import { contactHeading, PRIVACY_NOTICE } from "@/lib/data/contact"

jest.mock('./ContactForm', () => ({
    ContactForm: () => <div data-testid="contact-form-mock">ContactForm</div>,
}))

function renderSection() {
    return render(<ContactSection heading={contactHeading} privacyNotice={PRIVACY_NOTICE} />)
}

describe('ContactSection', () => {
    it('renders section with correct id', () => {
        renderSection()
        const section = document.getElementById(SECTION_IDS.contact)
        expect(section).toBeInTheDocument()
    })

    it('renders an h2 heading', () => {
        renderSection()
        expect(screen.getByRole('heading', { level: 2, name: contactHeading })).toBeInTheDocument()
    })

    it('renders the ContactForm component', () => {
        renderSection()
        expect(screen.getByTestId('contact-form-mock')).toBeInTheDocument()
    })

    it('renders email link with mailto href', () => {
        renderSection()
        const emailLink = screen.getByRole('link', { name: /email me directly/i })
        expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
    })

    it('renders CV download links for both languages', () => {
        renderSection()
        const links = screen.getAllByRole('link')
        const hrefs = links.map(l => l.getAttribute('href'))
        expect(hrefs.some(h => h?.includes('en.pdf'))).toBe(true)
        expect(hrefs.some(h => h?.includes('de.pdf'))).toBe(true)
    })

    it('renders privacy notice text', () => {
        renderSection()
        expect(screen.getByText(/secure email API/i)).toBeInTheDocument()
        expect(screen.getByText(/not stored/i)).toBeInTheDocument()
    })
})
