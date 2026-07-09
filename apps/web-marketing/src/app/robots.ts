import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';

const DISALLOWED_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'CCBot',
  'anthropic-ai',
  'ClaudeBot',
  'Bytespider',
  'PetalBot',
  'SemrushBot',
  'AhrefsBot',
  'MJ12bot',
  'DotBot',
  'DataForSeoBot',
];

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/request/success'],
      },
      ...DISALLOWED_BOTS.map((userAgent) => ({
        userAgent,
        disallow: '/' as const,
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, '').replace(/\/$/, ''),
  };
}
