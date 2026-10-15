import { processContent } from "@/lib/data/process";
import { ProcessSection } from "./ProcessSection";
import { render, screen } from "@testing-library/react";
import { SECTION_IDS } from "@/lib/constants";

function renderSection() {
    return render(<ProcessSection content={processContent} />)
}

describe('ProcessSection', () => {
    it('renders the h2 heading', () => {
        renderSection()
        expect(screen.getByRole('heading', { level: 2, name: 'How it works' })).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        renderSection()
        expect(document.getElementById(SECTION_IDS.process)).toBeInTheDocument()
    })

    // Expected titles are hard-coded so a reordered or renamed step fails the test
    it('renders an ordered list of exactly 4 steps in the agreed order', () => {
        renderSection()
        const list = screen.getByRole('list')
        expect(list.tagName).toBe('OL')
        const steps = Array.from(list.querySelectorAll(':scope > li'))
        expect(steps.map(step => step.querySelector('strong')?.textContent)).toEqual([
            '20-minute call',
            'Written scope and quote within 48 hours',
            'Weekly builds on a staging URL',
            'Launch and handover',
        ])
    })

    it('states the deposit / final payment split', () => {
        const { container } = renderSection()
        // toHaveTextContent normalises the non-breaking space to a plain space
        expect(container).toHaveTextContent(/40 % deposit/)
        expect(container).toHaveTextContent(/60 % at launch/)
    })

    it('shows no prices, placeholders, Tenantry or Auth/RLS/SDK/Stripe wording', () => {
        const { container } = renderSection()
        const text = container.textContent ?? ''
        expect(text).not.toContain('€')
        expect(text).not.toContain('[ ]')
        expect(text).not.toMatch(/auth|rls|row level security|sdk|stripe|tenantry/i)
    })
})
