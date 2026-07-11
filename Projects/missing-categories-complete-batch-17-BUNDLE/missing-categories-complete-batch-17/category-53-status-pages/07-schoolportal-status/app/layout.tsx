import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SchoolPortal Status | Status Pages',
  description: 'SchoolPortal Status template for Status Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
