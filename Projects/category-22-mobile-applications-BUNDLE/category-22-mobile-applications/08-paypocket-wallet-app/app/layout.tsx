import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PayPocket Wallet App',
  description: 'Wallet, transfers and spending insights.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
