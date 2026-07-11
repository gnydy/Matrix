import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SoftwareSprint Manager',
  description: 'Sprints, backlog and release planning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
