import { render } from '@testing-library/react'
import Home from '@/app/(site)/page'

jest.mock('@/components/sections/HeroSection', () => ({ HeroSection: () => null }))
jest.mock('@/components/sections/AboutSection', () => ({ AboutSection: () => null }))
jest.mock('@/components/sections/ProjectsSection', () => ({ ProjectsSection: () => null }))
jest.mock('@/components/sections/ContactSection', () => ({ ContactSection: () => null }))

describe('Home', () => {
  it('renders exactly one JSON-LD script', () => {
    const { container } = render(<Home />)
    expect(container.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(1)
  })
})
