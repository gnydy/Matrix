import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CNC Cell Monitor | Manufacturing Systems',
  description: 'CNC Cell Monitor template for Manufacturing Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
