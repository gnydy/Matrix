import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ShopLite Mobile Kit',
  description: 'Storefront, product, cart and checkout screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
