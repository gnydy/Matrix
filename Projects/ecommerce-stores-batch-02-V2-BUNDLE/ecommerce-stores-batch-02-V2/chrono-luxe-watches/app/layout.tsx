import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chrono Luxe Watches | Ecommerce Template',
  description: 'Luxury editorial watch boutique with magazine-grade hero, private consultation CTA, collector drop cards.',
  keywords: ['ecommerce template', 'Luxury watches', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'Chrono Luxe Watches',
    description: 'Luxury editorial watch boutique with magazine-grade hero, private consultation CTA, collector drop cards.',
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
