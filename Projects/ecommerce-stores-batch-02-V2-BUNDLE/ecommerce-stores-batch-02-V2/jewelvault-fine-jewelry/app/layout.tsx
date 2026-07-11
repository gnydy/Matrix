import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JewelVault Fine Jewelry | Ecommerce Template',
  description: 'Fine jewelry storefront with private vault UX, appointment CTA, certification panels, and collection storytelling.',
  keywords: ['ecommerce template', 'Jewelry', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'JewelVault Fine Jewelry',
    description: 'Fine jewelry storefront with private vault UX, appointment CTA, certification panels, and collection storytelling.',
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
