import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TimelinePro Delivery',
  description: 'Gantt-like project timeline UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
