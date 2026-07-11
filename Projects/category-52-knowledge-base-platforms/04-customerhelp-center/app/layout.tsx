import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CustomerHelp Center | Knowledge Base Platforms',
  description: 'CustomerHelp Center template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
