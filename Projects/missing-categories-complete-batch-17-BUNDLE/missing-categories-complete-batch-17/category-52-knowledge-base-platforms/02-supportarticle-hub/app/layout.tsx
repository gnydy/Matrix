import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SupportArticle Hub | Knowledge Base Platforms',
  description: 'SupportArticle Hub template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
