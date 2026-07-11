import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `${site.name} | SaaS Platform Template`,
  description: site.description,
  keywords: [site.industry, 'SaaS template', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Dashboard UI'],
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
