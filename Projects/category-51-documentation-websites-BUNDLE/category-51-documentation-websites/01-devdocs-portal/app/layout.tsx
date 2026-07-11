import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevDocs Portal | Documentation Websites',
  description: 'DevDocs Portal template for Documentation Websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
