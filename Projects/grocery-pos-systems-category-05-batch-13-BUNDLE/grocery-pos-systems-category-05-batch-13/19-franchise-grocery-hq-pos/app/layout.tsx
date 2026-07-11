import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Franchise Grocery HQ POS | Grocery POS Template',
  description: 'قالب لمقر إدارة سلسلة بقالة Franchise مع مقارنة الفروع.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
