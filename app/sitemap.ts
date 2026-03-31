import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/env';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-03-31'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
