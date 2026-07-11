import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PeopleCore HR Command',
  description: 'Enterprise HR dashboard for medium companies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
