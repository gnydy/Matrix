import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moda Atelier Fashion | Ecommerce Template',
  description: 'Runway-style fashion store with lookbook strips, size assistant, editorial outfit bundles.',
  keywords: ['ecommerce template', 'Fashion', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'Moda Atelier Fashion',
    description: 'Runway-style fashion store with lookbook strips, size assistant, editorial outfit bundles.',
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
