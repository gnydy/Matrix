import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Neighborhood Market POS | Grocery POS Fullstack Template',
  description: 'واجهة عملية لبقالة متوسطة مع مبيعات ومخزون',
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
