import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CallCenter Desktop',
  description: 'Agent calls, scripts and tickets UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
