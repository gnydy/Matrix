import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIResume Builder',
  description: 'Resume optimization and scoring interface.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
