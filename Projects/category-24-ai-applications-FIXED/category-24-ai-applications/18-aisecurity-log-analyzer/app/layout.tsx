import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AISecurity Log Analyzer',
  description: 'Security log explanation and prioritization.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
