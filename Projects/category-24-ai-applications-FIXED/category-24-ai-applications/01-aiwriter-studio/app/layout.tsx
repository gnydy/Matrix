import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIWriter Studio',
  description: 'AI writing workspace with drafts and templates.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
