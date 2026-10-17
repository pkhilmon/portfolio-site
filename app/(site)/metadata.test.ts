import { metadata as impressum } from '@/app/(site)/impressum/page'
import { metadata as datenschutz } from '@/app/(site)/datenschutzerklaerung/page'
import { metadata as dlrg } from '@/app/(site)/work/dlrg-24h-schwimmen/page'
import { metadata as root } from '@/app/(site)/layout'
import { HEADER_TITLE, SITE_DESCRIPTION, SITE_TITLE } from '@/lib/constants'
jest.mock('next/og', () => ({ ImageResponse: jest.fn() }))

import * as rootOgImage from '@/app/(site)/opengraph-image'
import * as impressumOgImage from '@/app/(site)/impressum/opengraph-image'
import * as datenschutzOgImage from '@/app/(site)/datenschutzerklaerung/opengraph-image'

describe.each([
  ['Impressum', '/impressum', impressum],
  ['Datenschutzerklärung', '/datenschutzerklaerung', datenschutz],
])('%s metadata', (label, path, metadata) => {
  const title = `${label} — ${HEADER_TITLE}`

  it('advertises its own OG and Twitter title and URL', () => {
    expect(metadata.openGraph).toMatchObject({ title, url: path, siteName: HEADER_TITLE })
    expect(metadata.twitter).toMatchObject({ title, card: 'summary_large_image' })
  })

  it('leaves images to the opengraph-image file convention', () => {
    expect(metadata.openGraph).not.toHaveProperty('images')
    expect(metadata.twitter).not.toHaveProperty('images')
  })
})

describe('work page metadata', () => {
  it('keeps its own og.jpg instead of the generated site image', () => {
    const og = '/images/work/dlrg-24h-schwimmen/og.jpg'
    expect(dlrg.openGraph?.images).toEqual([expect.objectContaining({ url: og })])
    expect(dlrg.twitter?.images).toEqual([og])
  })
})

describe('legal page opengraph-image re-exports', () => {
  it.each([
    ['impressum', impressumOgImage],
    ['datenschutzerklaerung', datenschutzOgImage],
  ])('%s re-exports the root OG image', (_, mod) => {
    expect(mod.default).toBe(rootOgImage.default)
    expect(mod.size).toBe(rootOgImage.size)
    expect(mod.alt).toBe(rootOgImage.alt)
  })
})

describe('root metadata', () => {
  it('uses the approved title and description', () => {
    expect(root.title).toBe('Pavlo Khilmon – Full-stack Next.js Developer')
    expect(root.description).toBe('Full-stack Next.js developer based in Germany, working remotely. Web apps and MVPs for founders and agencies at a fixed price from a written scope.')
  })

  it('uses the site title as the OG image alt text', () => {
    expect(rootOgImage.alt).toBe(SITE_TITLE)
  })

  it('keeps the title within 60 characters, name first', () => {
    expect(SITE_TITLE.length).toBeLessThanOrEqual(60)
    expect(SITE_TITLE.startsWith(HEADER_TITLE)).toBe(true)
  })

  it('keeps the description within 155 characters', () => {
    expect(SITE_DESCRIPTION.length).toBeLessThanOrEqual(155)
  })

  it('gives OG and Twitter the same title and description', () => {
    expect(root.openGraph).toMatchObject({ title: SITE_TITLE, description: SITE_DESCRIPTION, siteName: HEADER_TITLE })
    expect(root.twitter).toMatchObject({ title: SITE_TITLE, description: SITE_DESCRIPTION })
  })

  it('contains no prices, placeholders or out-of-scope claims', () => {
    expect(`${SITE_TITLE} ${SITE_DESCRIPTION}`).not.toMatch(/€|\[ \]|auth|rls|row level security|sdk|stripe|tenantry/i)
  })
})
