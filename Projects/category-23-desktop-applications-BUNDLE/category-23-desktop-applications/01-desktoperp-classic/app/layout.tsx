import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DesktopERP Classic',
  description: 'Desktop ERP shell with module launcher.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
