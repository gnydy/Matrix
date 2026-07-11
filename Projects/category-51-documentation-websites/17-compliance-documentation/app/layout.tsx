import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Compliance Documentation | Documentation Websites',
  description: 'Compliance Documentation template for Documentation Websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
