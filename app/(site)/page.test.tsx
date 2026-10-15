import { render } from '@testing-library/react'
import Home from '@/app/(site)/page'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { heroContent } from '@/lib/data/hero'
import { servicesContent } from '@/lib/data/services'
import { aboutContent } from '@/lib/data/about'
import { projects, projectsDisclaimer, projectsHeading } from '@/lib/data/projects'
import { contactHeading, PRIVACY_NOTICE } from '@/lib/data/contact'

jest.mock('@/components/sections/HeroSection', () => ({ HeroSection: jest.fn(() => null) }))
jest.mock('@/components/sections/ServicesSection', () => ({ ServicesSection: jest.fn(() => null) }))
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
    expect(propsOf(ServicesSection)).toEqual({ content: servicesContent })
    expect(propsOf(AboutSection)).toEqual({ content: aboutContent })
    expect(propsOf(ProjectsSection)).toEqual({ projects, heading: projectsHeading, disclaimer: projectsDisclaimer })
    expect(propsOf(ContactSection)).toEqual({ heading: contactHeading, privacyNotice: PRIVACY_NOTICE })
  })

  // Sections are mocked, so render order is read from the mocks instead of the DOM
  it('renders Hero, Services, Work, About in that order', () => {
    render(<Home />)
    const order = (component: unknown) => (component as jest.Mock).mock.invocationCallOrder[0]
    expect(order(HeroSection)).toBeLessThan(order(ServicesSection))
    expect(order(ServicesSection)).toBeLessThan(order(ProjectsSection))
    expect(order(ProjectsSection)).toBeLessThan(order(AboutSection))
  })
})
