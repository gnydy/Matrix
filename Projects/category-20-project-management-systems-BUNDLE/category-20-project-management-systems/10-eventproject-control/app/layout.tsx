import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EventProject Control',
  description: 'Event planning timeline and suppliers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
