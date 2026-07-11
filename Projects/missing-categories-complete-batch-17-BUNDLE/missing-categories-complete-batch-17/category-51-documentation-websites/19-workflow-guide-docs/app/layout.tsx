import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workflow Guide Docs | Documentation Websites',
  description: 'Workflow Guide Docs template for Documentation Websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
