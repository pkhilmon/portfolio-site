import { render, screen, within } from '@testing-library/react'
import DatenschutzerklaerungPage from '@/app/(site)/datenschutzerklaerung/page'

// The approved legal copy is hard-coded here, so any change to it fails a test
describe('Datenschutzerklärung page', () => {
    // Both h3s share section 4, so collect only the siblings up to the next heading
    function subsection(h3Name: string) {
        const heading = screen.getByRole('heading', { level: 3, name: h3Name })
        const container = document.createElement('div')
        let el = heading.nextElementSibling
        while (el && !/^H[1-3]$/.test(el.tagName)) {
            container.appendChild(el.cloneNode(true))
            el = el.nextElementSibling
        }
        return container
    }

    it('renders section 4 with the contact-form and Calendly subsections', () => {
        render(<DatenschutzerklaerungPage />)
        expect(screen.getByRole('heading', { level: 2, name: '4. Datenerfassung auf dieser Website' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Kontaktformular' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3, name: 'Terminbuchung über Calendly' })).toBeInTheDocument()
    })

    it('names Resend, the data sent, the EU region and that nothing is stored in a database', () => {
        render(<DatenschutzerklaerungPage />)
        const text = subsection('Kontaktformular').textContent ?? ''
        expect(text).toContain('Plus Five Five, Inc.')
        expect(text).toContain('Name, E-Mail-Adresse und Nachricht')
        expect(text).toContain('Art. 6 Abs. 1 lit. b DSGVO')
        expect(text).toContain('Server in der EU (Irland)')
        expect(text).toContain('Vertrag über Auftragsverarbeitung (Art. 28 DSGVO)')
        expect(text).toContain('bis zu 30 Tage')
        expect(text).toContain('In einer Datenbank auf dieser Website werden Ihre Angaben nicht gespeichert.')
        expect(text).not.toContain('Calendly')
    })

    it('names Calendly LLC and says no data reaches Calendly before the click', () => {
        render(<DatenschutzerklaerungPage />)
        const text = subsection('Terminbuchung über Calendly').textContent ?? ''
        expect(text).toContain('Calendly LLC')
        expect(text).toContain('Beim Besuch dieser Website werden keine Daten an Calendly übertragen')
        expect(text).toContain('EU-US Data Privacy Framework')
        expect(text).not.toContain('Resend')
    })

    it.each([
        ['Kontaktformular', 'Datenschutzerklärung von Resend', 'https://resend.com/legal/privacy-policy'],
        ['Terminbuchung über Calendly', 'Datenschutzerklärung von Calendly', 'https://calendly.com/legal/privacy-notice'],
    ])('links the provider policy under "%s" in a new tab', (h3Name, name, href) => {
        render(<DatenschutzerklaerungPage />)
        const link = within(subsection(h3Name)).getByRole('link', { name })
        expect(link).toHaveAttribute('href', href)
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('shows no prices', () => {
        const { container } = render(<DatenschutzerklaerungPage />)
        expect(container.textContent).not.toContain('€')
    })
})
