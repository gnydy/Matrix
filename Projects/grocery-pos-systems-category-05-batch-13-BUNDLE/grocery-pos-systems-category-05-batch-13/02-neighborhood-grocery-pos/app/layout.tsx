import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Neighborhood Grocery POS | Grocery POS Template',
  description: 'نظام كاشير مرتب لمحل بقالة متوسط فيه منتجات كثيرة وحركة بيع يومية.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
