import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'InternalWiki Pro | Knowledge Base Platforms',
  description: 'InternalWiki Pro template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
