import { render } from '@testing-library/react'
import { PersonJsonLd, serializeJsonLd } from '@/components/seo/PersonJsonLd'
import { HEADER_TITLE, JOB_TITLE, SOCIAL_LINKS } from '@/lib/constants'
import { SITE_URL } from '@/lib/env'

function getScript(container: HTMLElement) {
  const scripts = container.querySelectorAll('script[type="application/ld+json"]')
  expect(scripts).toHaveLength(1)
  return scripts[0]
}

describe('PersonJsonLd', () => {
  it('renders a single JSON-LD Person script with the site identity', () => {
    const { container } = render(<PersonJsonLd />)
    const data = JSON.parse(getScript(container).textContent ?? '')

    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('Person')
    expect(data.name).toBe(HEADER_TITLE)
    expect(data.jobTitle).toBe(JOB_TITLE)
    expect(data.url).toBe(SITE_URL)
    expect(data.sameAs).toEqual(SOCIAL_LINKS.map(({ href }) => href))
  })

  it('escapes < so the payload cannot close the script tag', () => {
    const payload = { name: '</script><script>alert(1)</script>' }
    const serialized = serializeJsonLd(payload)

    expect(serialized).not.toContain('<')
    expect(serialized).toContain('\\u003c/script>')
    expect(JSON.parse(serialized)).toEqual(payload)
  })
})
