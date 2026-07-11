import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BalanceSheet Executive',
  description: 'Executive balance sheet and cash flow board.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
