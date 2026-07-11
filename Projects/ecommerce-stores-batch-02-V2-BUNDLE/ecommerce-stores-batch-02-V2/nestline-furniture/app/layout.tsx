import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nestline Furniture | Ecommerce Template',
  description: 'Furniture store based on room planning, moodboards, room bundles, and project consultation.',
  keywords: ['ecommerce template', 'Furniture', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'Nestline Furniture',
    description: 'Furniture store based on room planning, moodboards, room bundles, and project consultation.',
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
