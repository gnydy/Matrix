import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Delivery Grocery Dispatch POS | Grocery POS Template',
  description: 'كاشير بقالة مرتبط بتجهيز الطلبات والتوصيل المحلي.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
