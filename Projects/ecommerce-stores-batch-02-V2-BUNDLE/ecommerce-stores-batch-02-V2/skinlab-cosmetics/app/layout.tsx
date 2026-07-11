import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkinLab Cosmetics | Ecommerce Template',
  description: 'Beauty store focused on skin routine builder, ingredient education, and product recommendations.',
  keywords: ['ecommerce template', 'Cosmetics', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'SkinLab Cosmetics',
    description: 'Beauty store focused on skin routine builder, ingredient education, and product recommendations.',
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
