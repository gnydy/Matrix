import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HRBot Employee Assistant',
  description: 'HR policy and leave assistant chat UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
