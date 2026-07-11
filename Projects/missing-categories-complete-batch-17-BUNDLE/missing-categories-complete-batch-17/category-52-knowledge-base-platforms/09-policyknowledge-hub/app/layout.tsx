import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PolicyKnowledge Hub | Knowledge Base Platforms',
  description: 'PolicyKnowledge Hub template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
