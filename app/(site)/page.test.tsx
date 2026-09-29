import { render } from '@testing-library/react'
import Home from '@/app/(site)/page'
import * as queries from '@/sanity/lib/queries'

jest.mock('@/sanity/lib/queries', () => ({
  getHero: jest.fn(),
  getAbout: jest.fn(),
  getProjectsSettings: jest.fn(),
  getProjects: jest.fn(),
  getContact: jest.fn(),
}))

jest.mock('@/components/sections/HeroSection', () => ({ HeroSection: () => null }))
jest.mock('@/components/sections/AboutSection', () => ({ AboutSection: () => null }))
jest.mock('@/components/sections/ProjectsSection', () => ({ ProjectsSection: () => null }))
jest.mock('@/components/sections/ContactSection', () => ({ ContactSection: () => null }))

const mocked = jest.mocked(queries)

function countJsonLd(container: HTMLElement) {
  return container.querySelectorAll('script[type="application/ld+json"]').length
}

describe('Home', () => {
  it('renders exactly one JSON-LD script when all queries resolve', async () => {
    mocked.getHero.mockResolvedValue({} as never)
    mocked.getAbout.mockResolvedValue({} as never)
    mocked.getProjectsSettings.mockResolvedValue({ heading: 'Projects' } as never)
    mocked.getProjects.mockResolvedValue([] as never)
    mocked.getContact.mockResolvedValue({} as never)

    const { container } = render(await Home())
    expect(countJsonLd(container)).toBe(1)
  })

  it('renders exactly one JSON-LD script when all queries reject', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    mocked.getHero.mockRejectedValue(new Error('fail'))
    mocked.getAbout.mockRejectedValue(new Error('fail'))
    mocked.getProjectsSettings.mockRejectedValue(new Error('fail'))
    mocked.getProjects.mockRejectedValue(new Error('fail'))
    mocked.getContact.mockRejectedValue(new Error('fail'))

    const { container } = render(await Home())
    expect(countJsonLd(container)).toBe(1)
  })
})
