import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SchoolAdmin ERP | ERP Systems',
  description: 'SchoolAdmin ERP template for ERP Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
