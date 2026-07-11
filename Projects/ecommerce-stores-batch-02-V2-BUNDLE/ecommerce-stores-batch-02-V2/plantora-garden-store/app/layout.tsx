import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Plantora Garden Store | Ecommerce Template',
  description: 'Plant store with care-level filters, light conditions, watering guide, and plant subscription.',
  keywords: ['ecommerce template', 'Garden store', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'Plantora Garden Store',
    description: 'Plant store with care-level filters, light conditions, watering guide, and plant subscription.',
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
