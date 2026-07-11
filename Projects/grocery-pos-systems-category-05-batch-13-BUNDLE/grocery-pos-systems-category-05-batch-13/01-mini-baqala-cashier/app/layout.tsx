import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Mini Baqala Cashier | Grocery POS Template',
  description: 'خفيف وسريع للبقالة الصغيرة التي تحتاج بيع يومي بدون تعقيد.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
