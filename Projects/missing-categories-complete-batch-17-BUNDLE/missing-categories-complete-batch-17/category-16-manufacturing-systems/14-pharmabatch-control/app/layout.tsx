import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PharmaBatch Control | Manufacturing Systems',
  description: 'PharmaBatch Control template for Manufacturing Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
