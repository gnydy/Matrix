import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FieldSales CRM | CRM Systems',
  description: 'FieldSales CRM template for CRM Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
