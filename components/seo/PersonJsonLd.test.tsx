import { render } from '@testing-library/react'
import { PersonJsonLd, serializeJsonLd } from '@/components/seo/PersonJsonLd'
import { HEADER_TITLE, JOB_TITLE, SITE_DESCRIPTION, SOCIAL_LINKS } from '@/lib/constants'
import { servicesContent } from '@/lib/data/services'
import { SITE_URL } from '@/lib/env'

function getScript(container: HTMLElement) {
  const scripts = container.querySelectorAll('script[type="application/ld+json"]')
  expect(scripts).toHaveLength(1)
  return scripts[0]
}

function getNode(container: HTMLElement, type: string) {
  const data = JSON.parse(getScript(container).textContent ?? '')
  expect(data['@context']).toBe('https://schema.org')
  return data['@graph'].find((n: { '@type': string }) => n['@type'] === type)
}

describe('PersonJsonLd', () => {
  it('renders a single JSON-LD script with the Person identity', () => {
    const { container } = render(<PersonJsonLd />)
    const person = getNode(container, 'Person')

    expect(person['@id']).toBe(`${SITE_URL}#person`)
    expect(person.name).toBe(HEADER_TITLE)
    expect(person.jobTitle).toBe(JOB_TITLE)
    expect(person.jobTitle).toBe('Full-stack Next.js Developer')
    expect(person.url).toBe(SITE_URL)
    expect(person.sameAs).toEqual(SOCIAL_LINKS.map(({ href }) => href))
  })

  it('lists exactly the services from servicesContent, without prices', () => {
    const { container } = render(<PersonJsonLd />)
    const service = getNode(container, 'ProfessionalService')

    expect(service.name).toBe(HEADER_TITLE)
    expect(service.url).toBe(SITE_URL)
    expect(service.description).toBe(SITE_DESCRIPTION)
    expect(service.provider).toEqual({ '@id': `${SITE_URL}#person` })
    expect(service.hasOfferCatalog).toMatchObject({ '@type': 'OfferCatalog', name: servicesContent.heading })
    expect(service.hasOfferCatalog.itemListElement).toEqual(
      servicesContent.items.map(({ title, audience }) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: title, description: audience },
      })),
    )
    expect(service.hasOfferCatalog.itemListElement).toHaveLength(3)
    service.hasOfferCatalog.itemListElement.forEach((offer: object) => {
      expect(offer).not.toHaveProperty('price')
      expect(offer).not.toHaveProperty('priceSpecification')
    })
  })

  it('contains no prices, placeholders or out-of-scope claims', () => {
    const { container } = render(<PersonJsonLd />)
    const json = getScript(container).textContent ?? ''
    expect(json).not.toMatch(/€|\[ \]|auth|rls|row level security|sdk|stripe|tenantry/i)
  })

  it('escapes < so the payload cannot close the script tag', () => {
    const payload = { name: '</script><script>alert(1)</script>' }
    const serialized = serializeJsonLd(payload)

    expect(serialized).not.toContain('<')
    expect(serialized).toContain('\\u003c/script>')
    expect(JSON.parse(serialized)).toEqual(payload)
  })
})
