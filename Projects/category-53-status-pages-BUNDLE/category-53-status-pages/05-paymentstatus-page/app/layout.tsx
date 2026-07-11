import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PaymentStatus Page | Status Pages',
  description: 'PaymentStatus Page template for Status Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
