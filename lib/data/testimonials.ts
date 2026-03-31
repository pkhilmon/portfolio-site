export interface TestimonialItem {
  id: string
  text: string
  author: string
  role: string
  source: string
  rating: number
}

export const testimonialsHeading = 'Testimonials' as const

export const testimonials: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    text: 'Placeholder testimonial text. Pavlo delivered high quality work on time and communicated clearly throughout the project.',
    author: 'Client Name',
    role: 'Project Owner',
    source: 'Upwork',
    rating: 5,
  },
]
