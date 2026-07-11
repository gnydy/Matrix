import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SchoolAdmin Desktop',
  description: 'School desktop management interface.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
