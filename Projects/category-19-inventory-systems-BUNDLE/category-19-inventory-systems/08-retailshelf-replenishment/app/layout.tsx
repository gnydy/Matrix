import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RetailShelf Replenishment',
  description: 'Retail shelf refill and branch transfer UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
