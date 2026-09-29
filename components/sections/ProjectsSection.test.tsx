import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectsSection } from './ProjectsSection'
import { projectsHeading, projects } from '@/lib/data/projects'
import { SECTION_IDS } from '@/lib/constants'

function renderSection() {
    return render(<ProjectsSection projects={projects} heading={projectsHeading} />)
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
        render(<ProjectsSection projects={[]} heading={projectsHeading} />)
        expect(screen.getByText(/no projects yet/i)).toBeInTheDocument()
    })
})
