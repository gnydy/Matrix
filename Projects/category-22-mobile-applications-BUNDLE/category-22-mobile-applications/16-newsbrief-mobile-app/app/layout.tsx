import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NewsBrief Mobile App',
  description: 'News feed, topics and saved reads.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
