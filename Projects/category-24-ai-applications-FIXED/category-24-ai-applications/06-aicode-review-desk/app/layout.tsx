import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AICode Review Desk',
  description: 'Code review findings and risk notes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
