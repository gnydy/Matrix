import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Offline First Grocery POS | Grocery POS Template',
  description: 'واجهة كاشير مناسبة لفكرة العمل عند ضعف الإنترنت ثم المزامنة لاحقًا.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
