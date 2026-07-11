import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LegalKnowledge Vault | Knowledge Base Platforms',
  description: 'LegalKnowledge Vault template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
