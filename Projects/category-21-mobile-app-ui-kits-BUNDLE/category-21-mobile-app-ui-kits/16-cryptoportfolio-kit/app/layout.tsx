import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CryptoPortfolio Kit',
  description: 'Portfolio, watchlist and trade mock UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
