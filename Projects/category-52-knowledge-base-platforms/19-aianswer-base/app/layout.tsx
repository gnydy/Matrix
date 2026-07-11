import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AIAnswer Base | Knowledge Base Platforms',
  description: 'AIAnswer Base template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
