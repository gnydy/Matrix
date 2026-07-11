import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Convenience Night Shift POS | Grocery POS Template',
  description: 'كاشير لمحل يعمل 24 ساعة مع ورديات ومراقبة مبيعات ليلية.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
