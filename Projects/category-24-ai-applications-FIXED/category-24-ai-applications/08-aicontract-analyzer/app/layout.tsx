import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIContract Analyzer',
  description: 'Contract clauses and risk extraction mock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
