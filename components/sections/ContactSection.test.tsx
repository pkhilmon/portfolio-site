import { render, screen } from "@testing-library/react"
import { ContactSection } from "./ContactSection"
import { SECTION_IDS } from "@/lib/constants"
import { contactContent } from "@/lib/data/contact"

const TEST_CALENDLY_URL = 'https://calendly.com/test/20min'

// CALENDLY_URL is read from env at import time and isn't set in jest.setup.ts.
// The getter reads mockCalendlyUrl at render time, so a test can switch it;
// the "mock" prefix lets the hoisted jest.mock factory reference the variable.
let mockCalendlyUrl = TEST_CALENDLY_URL
jest.mock('@/lib/constants', () => ({
    ...jest.requireActual('@/lib/constants'),
    get CALENDLY_URL() { return mockCalendlyUrl },
}))

jest.mock('./ContactForm', () => ({
    ContactForm: () => <div data-testid="contact-form-mock">ContactForm</div>,
}))

afterEach(() => {
    mockCalendlyUrl = TEST_CALENDLY_URL
})

function renderSection() {
    return render(<ContactSection content={contactContent} />)
}

describe('ContactSection', () => {
    it('renders section with correct id', () => {
        renderSection()
        expect(document.getElementById(SECTION_IDS.contact)).toBeInTheDocument()
    })

    // Expected copy is hard-coded so an accidental change to the approved text fails the test
    it('renders the final-CTA headline, body and availability line', () => {
        renderSection()
        expect(screen.getByRole('heading', { level: 2, name: 'Have a project in mind?' })).toBeInTheDocument()
        expect(screen.getByText('Book a 20-minute call or email a short description. No obligation.')).toBeInTheDocument()
        expect(screen.getByText('20–30 h/week · Response within 24 h')).toBeInTheDocument()
    })

    it('renders Book a Call linking to Calendly in a new tab', () => {
        renderSection()
        const link = screen.getByRole('link', { name: 'Book a Call' })
        expect(link).toHaveAttribute('href', TEST_CALENDLY_URL)
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders the Email button with a mailto href', () => {
        renderSection()
        expect(screen.getByRole('link', { name: 'Email me' })).toHaveAttribute('href', 'mailto:test@example.com')
    })

    it('renders the ContactForm and the privacy notice', () => {
        const { container } = renderSection()
        expect(screen.getByTestId('contact-form-mock')).toBeInTheDocument()
        expect(screen.getByText(
            'Contact form messages are delivered to my inbox via a secure email API and are not stored in any database on this site.'
        )).toBeInTheDocument()
        expect(container.textContent).not.toMatch(/retained/i)
    })

    it('has no CV download or PDF link', () => {
        const { container } = renderSection()
        const hrefs = screen.getAllByRole('link').map(l => l.getAttribute('href') ?? '')
        expect(hrefs.some(h => h.endsWith('.pdf'))).toBe(false)
        expect(container.textContent).not.toMatch(/\bCV\b/)
    })

    it('shows no prices, placeholders, Tenantry or Auth/RLS/SDK/Stripe wording', () => {
        const { container } = renderSection()
        const text = container.textContent ?? ''
        expect(text).not.toContain('€')
        expect(text).not.toContain('[ ]')
        expect(text).not.toMatch(/auth|rls|row level security|sdk|stripe|tenantry/i)
    })

    it('hides Book a Call but keeps Email when CALENDLY_URL is empty', () => {
        mockCalendlyUrl = ''
        renderSection()
        expect(screen.queryByRole('link', { name: 'Book a Call' })).not.toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Email me' })).toBeInTheDocument()
    })
})
