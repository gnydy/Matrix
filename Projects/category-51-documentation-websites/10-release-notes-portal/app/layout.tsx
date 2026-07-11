import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Release Notes Portal | Documentation Websites',
  description: 'Release Notes Portal template for Documentation Websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
