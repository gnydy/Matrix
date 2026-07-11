import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Enterprise Retail Chain OS | Grocery POS Fullstack Template',
  description: 'Enterprise POS Mock لسلسلة بقالة متعددة المدن',
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
