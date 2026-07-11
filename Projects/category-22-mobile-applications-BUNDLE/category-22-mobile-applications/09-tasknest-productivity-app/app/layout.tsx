import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TaskNest Productivity App',
  description: 'Tasks, notes and focus sessions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
