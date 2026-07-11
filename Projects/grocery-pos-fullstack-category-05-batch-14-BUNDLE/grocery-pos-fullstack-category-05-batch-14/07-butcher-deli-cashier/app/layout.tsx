import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Butcher Deli Cashier | Grocery POS Fullstack Template',
  description: 'أوزان، قطاعات، تحضير طلبات، وطباعة إيصال',
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
