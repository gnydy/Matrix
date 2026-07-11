import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Retail Branch ERP',
  description: 'Branches, POS summaries, products, stock transfers and cashier performance',
  openGraph: {
    title: 'Retail Branch ERP',
    description: 'Branches, POS summaries, products, stock transfers and cashier performance',
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
