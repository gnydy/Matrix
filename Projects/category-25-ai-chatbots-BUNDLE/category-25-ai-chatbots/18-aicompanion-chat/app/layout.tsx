import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AICompanion Chat',
  description: 'Personal assistant and productivity chat UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
