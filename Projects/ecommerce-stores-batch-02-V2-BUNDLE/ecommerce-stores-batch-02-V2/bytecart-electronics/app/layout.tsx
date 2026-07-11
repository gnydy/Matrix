import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ByteCart Electronics | Ecommerce Template',
  description: 'Specification-first electronics store with comparison panels, tech filters, warranty cards.',
  keywords: ['ecommerce template', 'Electronics', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'ByteCart Electronics',
    description: 'Specification-first electronics store with comparison panels, tech filters, warranty cards.',
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
