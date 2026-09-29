import { metadata as impressum } from '@/app/(site)/impressum/page'
import { metadata as datenschutz } from '@/app/(site)/datenschutzerklaerung/page'
import { metadata as dlrg } from '@/app/(site)/work/dlrg-24h-schwimmen/page'
import { HEADER_TITLE } from '@/lib/constants'
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
  })
})
