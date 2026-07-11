import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SchoolKnowledge Portal | Knowledge Base Platforms',
  description: 'SchoolKnowledge Portal template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
