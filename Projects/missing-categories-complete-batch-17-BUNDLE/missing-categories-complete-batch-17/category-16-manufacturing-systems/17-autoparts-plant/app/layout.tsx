import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoParts Plant | Manufacturing Systems',
  description: 'AutoParts Plant template for Manufacturing Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
