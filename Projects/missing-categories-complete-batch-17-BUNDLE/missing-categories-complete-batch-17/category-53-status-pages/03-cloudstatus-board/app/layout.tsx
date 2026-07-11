import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CloudStatus Board | Status Pages',
  description: 'CloudStatus Board template for Status Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
