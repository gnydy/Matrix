import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CashFlow Command',
  description: 'Cash inflow/outflow and runway tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
