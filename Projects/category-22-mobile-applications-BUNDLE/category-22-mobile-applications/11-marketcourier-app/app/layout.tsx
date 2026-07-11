import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MarketCourier App',
  description: 'Courier dispatch and proof of delivery.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
