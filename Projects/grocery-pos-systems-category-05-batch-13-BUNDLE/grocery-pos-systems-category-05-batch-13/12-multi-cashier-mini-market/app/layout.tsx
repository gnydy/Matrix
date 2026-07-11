import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Multi Cashier Mini Market | Grocery POS Template',
  description: 'نظام واجهة لميني ماركت فيه أكثر من كاشير ومراجعة ورديات.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
