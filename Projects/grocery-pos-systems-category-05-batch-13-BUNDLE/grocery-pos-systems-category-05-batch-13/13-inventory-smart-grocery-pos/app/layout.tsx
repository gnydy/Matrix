import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Inventory Smart Grocery POS | Grocery POS Template',
  description: 'كاشير يركز على المخزون والتنبيهات والتوريد قبل البيع فقط.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
