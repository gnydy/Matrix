import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProductChangelog Portal | Roadmap & Feature Request Platforms',
  description: 'ProductChangelog Portal template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
