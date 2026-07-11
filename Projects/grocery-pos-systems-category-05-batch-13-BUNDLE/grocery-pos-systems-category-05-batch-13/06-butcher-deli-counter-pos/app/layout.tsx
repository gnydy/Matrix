import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Butcher & Deli Counter POS | Grocery POS Template',
  description: 'واجهة بيع للأقسام الطازجة: لحوم، أجبان، مقطعات، وخدمة انتظار.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
