import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Inventory First POS | Grocery POS Fullstack Template',
  description: 'تنبيهات نقص، صلاحية، حركة مخزون وربط الفاتورة',
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
