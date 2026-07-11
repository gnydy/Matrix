import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RetailHelp Center | Knowledge Base Platforms',
  description: 'RetailHelp Center template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
