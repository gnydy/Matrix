import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RetailFinance POS Books',
  description: 'Retail daily sales and reconciliation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
