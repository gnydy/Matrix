import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExecutivePlant Cockpit | Manufacturing Systems',
  description: 'ExecutivePlant Cockpit template for Manufacturing Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
