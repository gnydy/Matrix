import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SportX Performance Store | Ecommerce Template',
  description: 'Performance sports store with athlete categories, training packs, and metric-led product cards.',
  keywords: ['ecommerce template', 'Sports gear', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'SportX Performance Store',
    description: 'Performance sports store with athlete categories, training packs, and metric-led product cards.',
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
