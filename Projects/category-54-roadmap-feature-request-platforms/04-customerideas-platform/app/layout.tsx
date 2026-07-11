import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CustomerIdeas Platform | Roadmap & Feature Request Platforms',
  description: 'CustomerIdeas Platform template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
