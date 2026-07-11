import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Loyalty Grocery Checkout | Grocery POS Fullstack Template',
  description: 'حساب نقاط، كوبونات، خصومات، وعملاء دائمين',
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
