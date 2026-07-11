import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Delivery Grocery POS | Grocery POS Fullstack Template',
  description: 'طلبات هاتف/واتساب، تجهيز، توصيل، ومتابعة كابتن',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
