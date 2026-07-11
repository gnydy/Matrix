import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Supermarket Branch POS | Grocery POS Fullstack Template',
  description: 'Front + Backoffice لفرع واحد: كاشير ومخزون وتقارير',
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
