import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Wholesale Grocery Counter | Grocery POS Template',
  description: 'قالب بيع جملة للبقالة مع وحدات كرتونة، عبوة، وقطعة.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
