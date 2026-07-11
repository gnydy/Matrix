import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SecurityStatus Center | Status Pages',
  description: 'SecurityStatus Center template for Status Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
