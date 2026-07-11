import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIProduct Description',
  description: 'Commerce product copy generator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
