import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoHub Parts | Ecommerce Template',
  description: 'Auto parts store with vehicle fitment selector, compatibility alerts, garage account, and stock status.',
  keywords: ['ecommerce template', 'Auto parts', 'Next.js', 'Tailwind CSS', 'MatrixAll'],
  openGraph: {
    title: 'AutoHub Parts',
    description: 'Auto parts store with vehicle fitment selector, compatibility alerts, garage account, and stock status.',
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
