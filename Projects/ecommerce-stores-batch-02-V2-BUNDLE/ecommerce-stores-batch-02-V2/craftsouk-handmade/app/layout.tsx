import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CraftSouk Handmade | Ecommerce Template',
  description: 'Handmade marketplace with artisan booths, story cards, batch availability, and custom order flow.',
  keywords: ['ecommerce template', 'Handmade marketplace', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'CraftSouk Handmade',
    description: 'Handmade marketplace with artisan booths, story cards, batch availability, and custom order flow.',
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
