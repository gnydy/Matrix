import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Petora Pet Supplies | Ecommerce Template',
  description: 'Pet profile driven store with species filters, subscription boxes, care recommendations.',
  keywords: ['ecommerce template', 'Pet supplies', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'Petora Pet Supplies',
    description: 'Pet profile driven store with species filters, subscription boxes, care recommendations.',
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
