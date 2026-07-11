import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InvoiceLedger Pro',
  description: 'Invoice issuing and receivable control.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
