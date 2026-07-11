import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIHR Screening Tool',
  description: 'Candidate fit and interview question generator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
