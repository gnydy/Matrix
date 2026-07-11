import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Pocket Baqala Terminal | Grocery POS Fullstack Template',
  description: 'محل بقالة صغير بمنتجات يومية وكاشير سريع',
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
