import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PeopleOps Enterprise HQ',
  description: 'All-in-one enterprise PeopleOps cockpit.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
