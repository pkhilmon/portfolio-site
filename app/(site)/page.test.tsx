import { render } from '@testing-library/react'
import Home from '@/app/(site)/page'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { heroContent } from '@/lib/data/hero'
import { aboutContent } from '@/lib/data/about'
import { projects, projectsHeading } from '@/lib/data/projects'
import { contactHeading, PRIVACY_NOTICE } from '@/lib/data/contact'

jest.mock('@/components/sections/HeroSection', () => ({ HeroSection: jest.fn(() => null) }))
jest.mock('@/components/sections/AboutSection', () => ({ AboutSection: jest.fn(() => null) }))
jest.mock('@/components/sections/ProjectsSection', () => ({ ProjectsSection: jest.fn(() => null) }))
jest.mock('@/components/sections/ContactSection', () => ({ ContactSection: jest.fn(() => null) }))

// First argument of the first render call = the props the section received
const propsOf = (component: unknown) => (component as jest.Mock).mock.calls[0][0]

describe('Home', () => {
  it('renders exactly one JSON-LD script', () => {
    const { container } = render(<Home />)
    expect(container.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(1)
  })

  it('passes the lib/data content to every section', () => {
    render(<Home />)
    expect(propsOf(HeroSection)).toEqual({ content: heroContent })
    expect(propsOf(AboutSection)).toEqual({ content: aboutContent })
    expect(propsOf(ProjectsSection)).toEqual({ projects, heading: projectsHeading })
    expect(propsOf(ContactSection)).toEqual({ heading: contactHeading, privacyNotice: PRIVACY_NOTICE })
  })
})
