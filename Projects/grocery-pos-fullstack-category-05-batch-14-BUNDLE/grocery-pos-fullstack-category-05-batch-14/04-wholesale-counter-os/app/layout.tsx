import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Wholesale Counter OS | Grocery POS Fullstack Template',
  description: 'بيع كميات كبيرة وتسعير جملة وحدود ائتمان',
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
