import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Product Manual Docs | Documentation Websites',
  description: 'Product Manual Docs template for Documentation Websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
