import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `${site.name} | Logistics & Delivery System Template`,
  description: site.positioning,
  keywords: ['logistics dashboard', 'delivery system', 'fleet management', 'shipment tracking', 'Next.js template'],
  openGraph: {
    title: site.name,
    description: site.positioning,
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
