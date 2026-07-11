import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DigitalForge Products | Ecommerce Template',
  description: 'Digital product marketplace with license tiers, download vault, version cards, and creator panels.',
  keywords: ['ecommerce template', 'Digital products', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'DigitalForge Products',
    description: 'Digital product marketplace with license tiers, download vault, version cards, and creator panels.',
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
