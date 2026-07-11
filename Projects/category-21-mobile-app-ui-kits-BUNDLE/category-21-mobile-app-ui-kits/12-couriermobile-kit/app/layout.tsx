import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CourierMobile Kit',
  description: 'Order tracking and delivery screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
