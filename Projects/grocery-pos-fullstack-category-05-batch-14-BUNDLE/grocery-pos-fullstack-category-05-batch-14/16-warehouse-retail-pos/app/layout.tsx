import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Warehouse Retail POS | Grocery POS Fullstack Template',
  description: 'واجهة مخزن يبيع للمستهلك والجملة في نفس الوقت',
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
