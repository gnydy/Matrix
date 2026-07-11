import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finance Command ERP',
  description: 'CFO command center with ledger, cashflow, tax, approvals and executive risk signals',
  openGraph: {
    title: 'Finance Command ERP',
    description: 'CFO command center with ledger, cashflow, tax, approvals and executive risk signals',
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
