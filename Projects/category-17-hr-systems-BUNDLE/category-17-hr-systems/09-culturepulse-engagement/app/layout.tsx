import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CulturePulse Engagement',
  description: 'Engagement surveys and sentiment cards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
