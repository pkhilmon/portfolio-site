import { render, screen, within } from '@testing-library/react'
import DatenschutzerklaerungPage from '@/app/(site)/datenschutzerklaerung/page'

// The approved legal copy is hard-coded here, so any change to it fails a test
describe('Datenschutzerklärung page', () => {
    function sectionOf(h3Name: string) {
        const heading = screen.getByRole('heading', { level: 3, name: h3Name })
        return heading.closest('section') as HTMLElement
    }

    it('renders section 4 with the contact-form and Calendly subsections', () => {
        render(<DatenschutzerklaerungPage />)
        expect(screen.getByRole('heading', { level: 2, name: '4. Datenerfassung auf dieser Website' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Kontaktformular' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Terminbuchung über Calendly' })).toBeInTheDocument()
    })

    it('names Resend, the data sent and that nothing is stored in a database', () => {
        render(<DatenschutzerklaerungPage />)
        const text = sectionOf('Kontaktformular').textContent ?? ''
        expect(text).toContain('Resend')
        expect(text).toContain('Name, E-Mail-Adresse und Nachricht')
        expect(text).toContain('Art. 6 Abs. 1 lit. b DSGVO')
        expect(text).toContain('In einer Datenbank auf dieser Website werden Ihre Angaben nicht gespeichert.')
    })

    it('names Calendly LLC and says no data reaches Calendly before the click', () => {
        render(<DatenschutzerklaerungPage />)
        const text = sectionOf('Terminbuchung über Calendly').textContent ?? ''
        expect(text).toContain('Calendly LLC')
        expect(text).toContain('Beim Besuch dieser Website werden keine Daten an Calendly übertragen')
    })

    it.each([
        ['Datenschutzerklärung von Resend', 'https://resend.com/legal/privacy-policy'],
        ['Datenschutzerklärung von Calendly', 'https://calendly.com/legal/privacy-notice'],
    ])('links "%s" to the provider policy in a new tab', (name, href) => {
        render(<DatenschutzerklaerungPage />)
        const link = within(sectionOf('Kontaktformular')).getByRole('link', { name })
        expect(link).toHaveAttribute('href', href)
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('shows no prices', () => {
        const { container } = render(<DatenschutzerklaerungPage />)
        expect(container.textContent).not.toContain('€')
    })
})
