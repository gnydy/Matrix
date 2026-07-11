import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Warehouse Retail Grocery POS | Grocery POS Template',
  description: 'نظام واجهة يربط البيع بالمخزن الخلفي والاستلام والتسليم.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
