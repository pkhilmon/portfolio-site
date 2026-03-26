import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { SOCIAL_LINKS } from '@/lib/constants'

describe('Footer', () => {
  it('renders all social links', () => {
    render(<Footer />)
    SOCIAL_LINKS.forEach(({ label }) => {
      expect(screen.getByRole('link', { name: new RegExp(label, 'i') })).toBeInTheDocument()
    })
  })

  it('social links open in new tab with noopener', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('each link href matches SOCIAL_LINKS values', () => {
    render(<Footer />)
    SOCIAL_LINKS.forEach(({ href, label }) => {
      const link = screen.getByRole('link', { name: new RegExp(label, 'i') })
      expect(link).toHaveAttribute('href', href)
    })
  })

  it('renders ↗ suffix on each social link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link.textContent).toContain('↗')
    })
  })
})
