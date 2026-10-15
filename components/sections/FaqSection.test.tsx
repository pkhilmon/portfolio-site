import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaqSection } from "./FaqSection";
import { faqContent } from "@/lib/data/faq";
import { SECTION_IDS } from "@/lib/constants";

function renderSection() {
    return render(<FaqSection content={faqContent} />)
}

describe('FaqSection', () => {
    it('renders the h2 heading', () => {
        renderSection()
        expect(screen.getByRole('heading', { level: 2, name: 'FAQ' })).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        renderSection()
        expect(document.getElementById(SECTION_IDS.faq)).toBeInTheDocument()
    })

    // Expected questions are hard-coded so a reordered or renamed item fails the test
    it('renders exactly 6 closed <details> in the agreed order', () => {
        const { container } = renderSection()
        const details = Array.from(container.querySelectorAll('details'))
        expect(details).toHaveLength(6)
        details.forEach(d => expect(d).not.toHaveAttribute('open'))
        expect(details.map(d => d.querySelector('summary')?.textContent)).toEqual([
            'Who owns the code?',
            'What happens after launch?',
            'Why do you take a deposit?',
            'What if I want changes?',
            'How do we communicate?',
            'What stack do you use?',
        ])
    })

    it('has every answer in the DOM before any interaction', () => {
        const { container } = renderSection()
        faqContent.items.forEach(item => {
            // toHaveTextContent normalises the non-breaking space to a plain space
            expect(container).toHaveTextContent(item.answer.replace(/ /g, ' '))
        })
    })

    it('opens a question when its summary is clicked', async () => {
        renderSection()
        const summary = screen.getByText('Who owns the code?')
        const details = summary.closest('details')
        expect(details).not.toHaveAttribute('open')
        await userEvent.click(summary)
        expect(details).toHaveAttribute('open')
    })

    it('shows no prices, placeholders, Tenantry or Auth/RLS/SDK/Stripe wording', () => {
        const { container } = renderSection()
        const text = container.textContent ?? ''
        expect(text).not.toContain('€')
        expect(text).not.toContain('[ ]')
        expect(text).not.toMatch(/auth|rls|row level security|sdk|stripe|tenantry/i)
    })
})
