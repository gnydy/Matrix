import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProductFAQ Knowledge | Knowledge Base Platforms',
  description: 'ProductFAQ Knowledge template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
