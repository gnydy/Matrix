import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Bakery Grocery Counter | Grocery POS Fullstack Template',
  description: 'طلبات مخبوزات مع منتجات بقالة ومتابعة دفعات',
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
