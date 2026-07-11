import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ChatSocial Mobile Kit',
  description: 'Messages, groups and social feed UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
