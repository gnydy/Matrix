import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArtGrid Gallery Shop | Ecommerce Template',
  description: 'Gallery commerce with wall-style browsing, artist stories, certificate UI, and private viewing CTA.',
  keywords: ['ecommerce template', 'Art gallery', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'ArtGrid Gallery Shop',
    description: 'Gallery commerce with wall-style browsing, artist stories, certificate UI, and private viewing CTA.',
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
