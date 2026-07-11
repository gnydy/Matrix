import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRMDesk Sales Console',
  description: 'Sales desktop with pipeline and accounts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
