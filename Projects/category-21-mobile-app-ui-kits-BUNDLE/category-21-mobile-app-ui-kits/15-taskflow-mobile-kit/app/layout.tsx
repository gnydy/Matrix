import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TaskFlow Mobile Kit',
  description: 'Tasks, calendar and reminders screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
