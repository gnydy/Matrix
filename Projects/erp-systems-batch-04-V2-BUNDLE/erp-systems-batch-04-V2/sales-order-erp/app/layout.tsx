import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sales Order ERP',
  description: 'Sales orders, quotations, invoices, client accounts and margin visibility',
  openGraph: {
    title: 'Sales Order ERP',
    description: 'Sales orders, quotations, invoices, client accounts and margin visibility',
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
