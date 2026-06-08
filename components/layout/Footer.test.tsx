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
    SOCIAL_LINKS.forEach(({ label }) => {
      const link = screen.getByRole('link', { name: new RegExp(label, 'i') })
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
    SOCIAL_LINKS.forEach(({ label }) => {
      const link = screen.getByRole('link', { name: new RegExp(label, 'i') })
      expect(link.textContent).toContain('↗')
    })
  })

  it('renders Impressum and Datenschutz footer links', () => {
    render(<Footer />)
    const impressum = screen.getByRole('link', { name: /impressum/i })
    const datenschutz = screen.getByRole('link', { name: /datenschutz/i })
    expect(impressum).toHaveAttribute('href', '/impressum')
    expect(datenschutz).toHaveAttribute('href', '/datenschutzerklaerung')
  })

  it('legal footer links are internal (no target blank)', () => {
    render(<Footer />)
    const impressum = screen.getByRole('link', { name: /impressum/i })
    const datenschutz = screen.getByRole('link', { name: /datenschutz/i })
    expect(impressum).not.toHaveAttribute('target', '_blank')
    expect(datenschutz).not.toHaveAttribute('target', '_blank')
  })

  it('renders a QR code button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /show qr code/i })).toBeInTheDocument()
  })
})
