import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gourmet Market Groceries | Ecommerce Template',
  description: 'Fresh groceries store with delivery slots, recipe commerce, basket estimator, and seasonal shelves.',
  keywords: ['ecommerce template', 'Grocery', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'Gourmet Market Groceries',
    description: 'Fresh groceries store with delivery slots, recipe commerce, basket estimator, and seasonal shelves.',
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
