import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oud House Perfumes | Ecommerce Template',
  description: 'Sensory perfume shop with note pyramids, mood filters, gifting flow, and premium storytelling.',
  keywords: ['ecommerce template', 'Perfumes', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'Oud House Perfumes',
    description: 'Sensory perfume shop with note pyramids, mood filters, gifting flow, and premium storytelling.',
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
