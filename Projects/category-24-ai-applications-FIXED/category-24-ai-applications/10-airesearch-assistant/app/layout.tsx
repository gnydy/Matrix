import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIResearch Assistant',
  description: 'Research notes, sources and synthesis workspace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
