import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LegalCase Project Desk',
  description: 'Legal matter tasks and document stages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
