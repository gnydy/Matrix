import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Hypermarket Checkout Suite | Grocery POS Template',
  description: 'واجهة ضخمة لهايبر ماركت مع أقسام متعددة وصفوف دفع ومراقبة فروع.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
