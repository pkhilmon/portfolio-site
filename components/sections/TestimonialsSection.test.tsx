import { render, screen } from '@testing-library/react'
import { TestimonialsSection } from './TestimonialsSection'
import { testimonials, testimonialsHeading } from '@/lib/data/testimonials'
import { SECTION_IDS } from '@/lib/constants'

describe('TestimonialsSection', () => {
  it('renders an h2 heading', () => {
    render(<TestimonialsSection />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders the testimonials heading text', () => {
    render(<TestimonialsSection />)
    expect(screen.getByRole('heading', { level: 2, name: testimonialsHeading })).toBeInTheDocument()
  })

  it('renders correct number of blockquotes matching testimonials array length', () => {
    render(<TestimonialsSection />)
    const blockquotes = document.querySelectorAll('blockquote')
    expect(blockquotes.length).toBe(testimonials.length)
  })

  it('section has the correct id for scroll-spy', () => {
    render(<TestimonialsSection />)
    const section = document.getElementById(SECTION_IDS.testimonials)
    expect(section).toBeInTheDocument()
  })

  it('renders a blockquote element for each testimonial', () => {
    render(<TestimonialsSection />)
    const blockquotes = document.querySelectorAll('blockquote')
    expect(blockquotes.length).toBeGreaterThan(0)
  })

  it('renders a cite element for source attribution', () => {
    render(<TestimonialsSection />)
    const cites = document.querySelectorAll('cite')
    expect(cites.length).toBeGreaterThan(0)
  })
})
