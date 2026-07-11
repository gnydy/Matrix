import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SmallBiz Accounting Lite',
  description: 'Simple accounting system for micro-business.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
