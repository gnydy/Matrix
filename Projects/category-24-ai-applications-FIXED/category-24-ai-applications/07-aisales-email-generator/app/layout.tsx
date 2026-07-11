import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AISales Email Generator',
  description: 'Sales email generation and sequence UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
