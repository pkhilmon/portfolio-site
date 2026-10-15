import { render, screen, within } from '@testing-library/react'
import { ServicesSection } from './ServicesSection'
import { servicesContent } from '@/lib/data/services'
import { SECTION_IDS } from '@/lib/constants'

function renderSection() {
    return render(<ServicesSection content={servicesContent} />)
}

// Cards are the direct <li> children of the section's top-level list
function getCards() {
    const section = document.getElementById(SECTION_IDS.services)!
    return Array.from(section.querySelectorAll<HTMLElement>(':scope > ul > li'))
}

describe('ServicesSection', () => {
    it('renders the h2 heading', () => {
        renderSection()
        expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        renderSection()
        expect(document.getElementById(SECTION_IDS.services)).toBeInTheDocument()
    })

    // Expected titles are hard-coded so a reordered or renamed service fails the test
    it('renders exactly 3 cards in the agreed order', () => {
        renderSection()
        const cards = getCards()
        expect(cards).toHaveLength(3)
        expect(cards.map(card => within(card).getByRole('heading', { level: 3 }).textContent)).toEqual([
            'MVP Build',
            'Landing Page + Waitlist + Analytics',
            'Agency Overflow',
        ])
    })

    it('each card shows audience, inclusions, exclusions and timeline', () => {
        renderSection()
        getCards().forEach(card => {
            expect(card).toHaveTextContent('For:')
            expect(within(card).getAllByRole('list')[0].querySelectorAll('li').length).toBeGreaterThan(0)
            expect(card).toHaveTextContent('Not included:')
            expect(card).toHaveTextContent('Timeline:')
        })
    })

    it('writes the exclusions out as a sentence in muted text', () => {
        renderSection()
        const exclusions = within(getCards()[1]).getByText(/^Not included:/)
        expect(exclusions).toHaveTextContent('Not included: copywriting, brand design and ad campaigns.')
        expect(exclusions).toHaveClass('text-muted-foreground')
    })

    it('each card has exactly one link: the quote link to #contact', () => {
        renderSection()
        getCards().forEach(card => {
            const links = within(card).getAllByRole('link')
            expect(links).toHaveLength(1)
            expect(links[0]).toHaveAccessibleName('Get a quote')
            expect(links[0]).toHaveAttribute('href', `#${SECTION_IDS.contact}`)
            // Same name on every card, so the description tells them apart
            expect(links[0]).toHaveAccessibleDescription(within(card).getByRole('heading', { level: 3 }).textContent!)
        })
    })

    it('mentions the paid test task on the Agency Overflow card', () => {
        renderSection()
        expect(getCards()[2]).toHaveTextContent(/paid test task/i)
    })

    it('shows no prices, placeholders or Auth/RLS/SDK/Stripe wording', () => {
        const { container } = renderSection()
        const text = container.textContent ?? ''
        expect(text).not.toContain('€')
        expect(text).not.toMatch(/\d[\d.,]*\s*(eur|euro)\b/i)
        expect(text).not.toContain('[ ]')
        expect(text).not.toMatch(/auth|rls|row level security|sdk|stripe/i)
    })

    it('has no price field in the data', () => {
        servicesContent.items.forEach(item => {
            expect(item).not.toHaveProperty('price')
        })
    })
})
