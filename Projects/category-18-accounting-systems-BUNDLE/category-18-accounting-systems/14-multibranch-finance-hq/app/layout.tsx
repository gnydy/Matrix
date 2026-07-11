import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MultiBranch Finance HQ',
  description: 'Branch cashbooks and consolidated reports.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
