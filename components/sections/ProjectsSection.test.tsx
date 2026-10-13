import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectsSection } from './ProjectsSection'
import { projectsHeading, projectsDisclaimer, projects } from '@/lib/data/projects'
import { SECTION_IDS } from '@/lib/constants'

function renderSection() {
    return render(<ProjectsSection projects={projects} heading={projectsHeading} disclaimer={projectsDisclaimer} />)
}

describe('ProjectsSection', () => {
    it('renders the h2 heading', () => {
        renderSection()
        expect(screen.getByRole('heading', { level: 2, name: projectsHeading })).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        renderSection()
        expect(document.getElementById(SECTION_IDS.projects)).toBeInTheDocument()
    })

    it('renders at most 3 project cards by default', () => {
        renderSection()
        expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    })

    it('renders DLRG first with a case study link', () => {
        renderSection()
        expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent('DLRG 24h-Schwimmen')
        expect(screen.getByRole('link', { name: 'Case study - DLRG 24h-Schwimmen' }))
            .toHaveAttribute('href', '/work/dlrg-24h-schwimmen')
    })

    it('shows "Show all" button when there are more than 3 projects', () => {
        renderSection()
        expect(screen.getByRole('button', { name: /show all projects/i })).toBeInTheDocument()
    })

    it('expands all projects when "Show all" is clicked', async () => {
        const user = userEvent.setup()
        renderSection()
        await user.click(screen.getByRole('button', { name: /show all projects/i }))
        expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(projects.length)
    })

    it('collapses back to 3 when "Show less" is clicked', async () => {
        const user = userEvent.setup()
        renderSection()
        await user.click(screen.getByRole('button', { name: /show all projects/i }))
        await user.click(screen.getByRole('button', { name: /show less/i }))
        expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    })

    it('external links have correct security attributes', () => {
        renderSection()
        const links = screen.queryAllByRole('link').filter(l => !l.getAttribute('href')?.startsWith('/'))
        expect(links.length).toBeGreaterThan(0)
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank')
            expect(link).toHaveAttribute('rel', 'noopener noreferrer')
        })
    })

    it('renders "No projects yet." when the list is empty', () => {
        render(<ProjectsSection projects={[]} heading={projectsHeading} disclaimer={projectsDisclaimer} />)
        expect(screen.getByText(/no projects yet/i)).toBeInTheDocument()
    })

    // Expected pairs are hard-coded so a wrong label in the data fails the test
    it('shows all cards in proof order with the right label', async () => {
        const user = userEvent.setup()
        renderSection()
        await user.click(screen.getByRole('button', { name: /show all projects/i }))
        const cards = screen.getAllByRole('heading', { level: 3 }).map(h3 => [
            h3.textContent,
            within(h3.parentElement!).getByText(/^(Client|Own) project$/).textContent,
        ])
        expect(cards).toEqual([
            ['DLRG 24h-Schwimmen', 'Client project'],
            ['Photographer portfolio', 'Client project'],
            ['Portfolio Landing Page', 'Own project'],
            ['From Figma to Website', 'Own project'],
        ])
    })

    it('shows PostgreSQL on Supabase without implying Auth, RLS, the SDK or Stripe', async () => {
        const user = userEvent.setup()
        const { container } = renderSection()
        await user.click(screen.getByRole('button', { name: /show all projects/i }))
        expect(screen.getByText('PostgreSQL on Supabase')).toBeInTheDocument()
        expect(container.textContent).not.toMatch(/\b(auth\w*|rls|row level security|sdk|stripe)\b/i)
    })

    it('renders the disclaimer once, after the cards', async () => {
        const user = userEvent.setup()
        renderSection()
        await user.click(screen.getByRole('button', { name: /show all projects/i }))
        const disclaimers = screen.getAllByText(projectsDisclaimer)
        expect(disclaimers).toHaveLength(1)
        const lastCard = screen.getAllByRole('heading', { level: 3 }).at(-1)!
        expect(lastCard.compareDocumentPosition(disclaimers[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    })
})
