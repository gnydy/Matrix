import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TinyPlanet Kids | Ecommerce Template',
  description: 'Kids ecommerce with parent-safe UX, age filters, educational bundles, and gift-ready collections.',
  keywords: ['ecommerce template', 'Kids store', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'TinyPlanet Kids',
    description: 'Kids ecommerce with parent-safe UX, age filters, educational bundles, and gift-ready collections.',
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
