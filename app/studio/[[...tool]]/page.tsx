/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 *
 * This route is a Client Component (rather than the more common Server Component):
 * `sanity.config.ts` has no 'use client' of its own and pulls in Sanity internals that
 * use `useSWR`. Importing it from a Server Component route resolves `swr` under its
 * `react-server` export condition (no default export), breaking the build under both
 * Turbopack and webpack. `metadata`/`viewport` are exported from the (Server Component)
 * layout instead, since a Client Component can't export them.
 */
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
