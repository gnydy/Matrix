import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Night Shift Convenience | Grocery POS Fullstack Template',
  description: 'وردية ليلية، إغلاق صندوق، منتجات سريعة الحركة',
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
