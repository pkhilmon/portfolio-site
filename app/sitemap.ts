import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/env';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/work/dlrg-24h-schwimmen`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/impressum`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/datenschutzerklaerung`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
