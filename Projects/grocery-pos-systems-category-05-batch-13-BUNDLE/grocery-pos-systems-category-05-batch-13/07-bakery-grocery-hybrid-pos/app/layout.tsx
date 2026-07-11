import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Bakery Grocery Hybrid POS | Grocery POS Template',
  description: 'قالب يجمع بيع البقالة والخبز والمخبوزات اليومية.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
