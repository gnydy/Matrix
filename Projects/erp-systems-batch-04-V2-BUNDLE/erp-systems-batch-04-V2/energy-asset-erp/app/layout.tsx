import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Energy Asset ERP',
  description: 'Assets, maintenance, field readings, incidents, procurement and safety controls',
  openGraph: {
    title: 'Energy Asset ERP',
    description: 'Assets, maintenance, field readings, incidents, procurement and safety controls',
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
