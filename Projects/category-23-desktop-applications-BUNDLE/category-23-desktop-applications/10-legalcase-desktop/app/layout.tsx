import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LegalCase Desktop',
  description: 'Legal case files and calendar desktop.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
