import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Superette Fast Checkout | Grocery POS Template',
  description: 'واجهة كاشير سريعة للطلبات الكثيفة والمنتجات المتكررة.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
