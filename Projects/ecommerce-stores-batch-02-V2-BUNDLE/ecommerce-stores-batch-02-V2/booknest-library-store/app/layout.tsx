import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BookNest Library Store | Ecommerce Template',
  description: 'Bookstore with reading desk layout, categories, quote highlights, reading lists, and membership shelves.',
  keywords: ['ecommerce template', 'Books', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'BookNest Library Store',
    description: 'Bookstore with reading desk layout, categories, quote highlights, reading lists, and membership shelves.',
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
