import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';

const paths = [
  '/',
  '/about',
  '/services',
  '/services/erp',
  '/services/web-mobile',
  '/services/custom',
  '/packages',
  '/request',
  '/contact',
  '/calculator',
  '/faq',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
