import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Data Model Docs | Documentation Websites',
  description: 'Data Model Docs template for Documentation Websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
