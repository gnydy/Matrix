import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Pharma Grocery Corner POS | Grocery POS Template',
  description: 'واجهة Frontend فقط لمحل يبيع أساسيات بقالة ومنتجات عناية غير وصفية.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
