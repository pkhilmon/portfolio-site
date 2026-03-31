import { cn } from '@/lib/utils'
import { SECTION_IDS } from '@/lib/constants'
import { testimonials, testimonialsHeading, type TestimonialItem } from '@/lib/data/testimonials'

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  const filledStars = '★'.repeat(testimonial.rating)
  const emptyStars = '☆'.repeat(5 - testimonial.rating)
  return (
    <blockquote className={cn('border-l-4 border-primary pl-6 py-2')}>
      <p className={cn('italic text-foreground mb-4')}>
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <cite className={cn('not-italic text-sm text-muted-foreground flex flex-col gap-1')}>
        <span className={cn('font-semibold text-foreground')}>{testimonial.author}</span>
        <span>{testimonial.role} · {testimonial.source}</span>
        <span aria-label={`${testimonial.rating} out of 5 stars`}>
          {filledStars}{emptyStars}
        </span>
      </cite>
    </blockquote>
  )
}

export function TestimonialsSection() {
  return (
    <section id={SECTION_IDS.testimonials} className={cn('scroll-mt-nav py-12 md:py-20 px-6')}>
      <h2 className={cn('mb-6 text-3xl font-semibold')}>{testimonialsHeading}</h2>
      <div className={cn('flex flex-col gap-8')}>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}
