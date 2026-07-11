import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GiftLane Curated Gifts | Ecommerce Template',
  description: 'Gift store with occasion wizard, budget filters, recipient profiles, and gift wrapping checkout.',
  keywords: ['ecommerce template', 'Gifts', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'GiftLane Curated Gifts',
    description: 'Gift store with occasion wizard, budget filters, recipient profiles, and gift wrapping checkout.',
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
