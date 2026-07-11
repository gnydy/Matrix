import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EventPass Ticket App',
  description: 'Event discovery and ticket wallet.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
