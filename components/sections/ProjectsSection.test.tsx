import { render, screen } from "@testing-library/react"
import { ProjectsSection } from "./ProjectsSection"
import { projectsHeading, projects } from "@/lib/data/projects"
import { SECTION_IDS } from "@/lib/constants"

describe('ProjectsSection', () => {
    it('renders a h2 heading', () => {
        render(<ProjectsSection />)
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('renders the projects heading text', () => {
        render(<ProjectsSection />)
        expect(screen.getByRole('heading', { level: 2, name: projectsHeading })).toBeInTheDocument()
    })

    it('renders an h3 title for each project', () => {
        render(<ProjectsSection />)
        const h3s = screen.getAllByRole('heading', { level: 3 })
        expect(h3s.length).toBe(projects.length)
    })

    it('renders the first project title', () => {
        render(<ProjectsSection />)
        expect(screen.getByRole('heading', { level: 3, name: projects[0].title })).toBeInTheDocument()
    })

    it('section has the correct id for scroll-spy', () => {
        render(<ProjectsSection />)
        const section = document.getElementById(SECTION_IDS.projects)
        expect(section).toBeInTheDocument()
    })

    it('external links have correct security attributes', () => {
        render(<ProjectsSection />)
        const links = screen.getAllByRole('link')
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank')
            expect(link).toHaveAttribute('rel', 'noopener noreferrer')
        })
    })

    it('renders a GitHub repo link for each project with a repoUrl', () => {
        render(<ProjectsSection />)
        const githublinks = screen.getAllByRole('link', { name: /github/i })
        expect(githublinks.length).toBe(projects.filter(p => p.repoUrl).length)
    })
})
