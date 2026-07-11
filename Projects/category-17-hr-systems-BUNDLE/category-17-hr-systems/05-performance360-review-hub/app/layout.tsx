import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance360 Review Hub',
  description: 'Performance review system with goals and ratings.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
