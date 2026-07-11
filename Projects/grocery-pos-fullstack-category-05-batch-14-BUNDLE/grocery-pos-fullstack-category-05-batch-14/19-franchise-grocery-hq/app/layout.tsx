import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Franchise Grocery HQ | Grocery POS Fullstack Template',
  description: 'مركز تحكم للفروع، مبيعات، توريد، ومقارنة أداء',
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
