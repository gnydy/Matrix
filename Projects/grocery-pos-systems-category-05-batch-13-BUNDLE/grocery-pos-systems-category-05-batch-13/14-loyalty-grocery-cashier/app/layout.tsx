import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Loyalty Grocery Cashier | Grocery POS Template',
  description: 'قالب كاشير مع نقاط عملاء، عروض، وكوبونات.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
