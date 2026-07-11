import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ITSelfService KB | Knowledge Base Platforms',
  description: 'ITSelfService KB template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
