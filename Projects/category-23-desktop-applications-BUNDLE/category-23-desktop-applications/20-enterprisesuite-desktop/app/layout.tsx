import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EnterpriseSuite Desktop',
  description: 'All-in-one enterprise desktop workspace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
