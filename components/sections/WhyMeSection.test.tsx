import { render, screen, within } from '@testing-library/react'
import { WhyMeSection } from './WhyMeSection'
import { whyMeContent } from '@/lib/data/process'
import { SECTION_IDS } from '@/lib/constants'

function renderSection() {
    return render(<WhyMeSection content={whyMeContent} />)
}

// Cards are the direct <li> children of the section's top-level list
function getCards() {
    const section = document.getElementById(SECTION_IDS.whyMe)!
    return Array.from(section.querySelectorAll<HTMLElement>(':scope > ul > li'))
}

describe('WhyMeSection', () => {
    it('renders the h2 heading', () => {
        renderSection()
        expect(screen.getByRole('heading', { level: 2, name: 'Why me' })).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        renderSection()
        expect(document.getElementById(SECTION_IDS.whyMe)).toBeInTheDocument()
    })

    // Expected titles are hard-coded so a reordered or renamed point fails the test
    it('renders exactly 4 points in the agreed order', () => {
        renderSection()
        const cards = getCards()
        expect(cards).toHaveLength(4)
        expect(cards.map(card => within(card).getByRole('heading', { level: 3 }).textContent)).toEqual([
            'The whole stack, one person',
            'Fixed prices from written scopes',
            'Response within 48 hours',
            'Proof you can click',
        ])
    })

    it('only "Proof you can click" has links: the two case studies', () => {
        renderSection()
        const cards = getCards()
        cards.slice(0, 3).forEach(card => {
            expect(within(card).queryAllByRole('link')).toHaveLength(0)
        })
        const links = within(cards[3]).getAllByRole('link')
        expect(links.map(link => [link.textContent, link.getAttribute('href')])).toEqual([
            ['DLRG 24h-Schwimmen', '/work/dlrg-24h-schwimmen'],
            ['Vladlena Fotografie', '/work/vladlena-fotografie'],
        ])
    })

    it('writes the proof links out as a sentence', () => {
        renderSection()
        expect(getCards()[3]).toHaveTextContent(
            'Two live client projects with case studies: DLRG 24h-Schwimmen and Vladlena Fotografie.'
        )
    })

    it('proof links have a 44px tap target', () => {
        renderSection()
        within(getCards()[3]).getAllByRole('link').forEach(link => {
            expect(link).toHaveClass('min-h-11')
        })
    })

    it('shows no prices, placeholders, Tenantry or Auth/RLS/SDK/Stripe wording', () => {
        const { container } = renderSection()
        const text = container.textContent ?? ''
        expect(text).not.toContain('€')
        expect(text).not.toContain('[ ]')
        expect(text).not.toMatch(/auth|rls|row level security|sdk|stripe|tenantry/i)
    })
})
