import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LowStock Alert Board',
  description: 'Low stock monitoring for fast-moving items.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
