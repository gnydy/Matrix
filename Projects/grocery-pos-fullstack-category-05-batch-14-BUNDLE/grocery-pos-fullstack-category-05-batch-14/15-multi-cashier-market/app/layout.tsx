import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Multi Cashier Market | Grocery POS Fullstack Template',
  description: 'إدارة أكثر من نقطة بيع، طوابير، وصلاحيات',
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
