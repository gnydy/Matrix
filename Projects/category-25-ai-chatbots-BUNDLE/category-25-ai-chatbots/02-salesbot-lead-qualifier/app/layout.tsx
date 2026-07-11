import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SalesBot Lead Qualifier',
  description: 'Sales lead qualification chat console.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
