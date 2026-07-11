import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinWallet Mobile Kit',
  description: 'Wallet mobile screens and transaction cards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
