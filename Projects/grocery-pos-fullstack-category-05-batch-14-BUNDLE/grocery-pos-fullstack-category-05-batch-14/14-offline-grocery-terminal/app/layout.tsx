import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Offline Grocery Terminal | Grocery POS Fullstack Template',
  description: 'واجهة توضح عمل POS عند انقطاع الشبكة ومزامنة لاحقة',
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
