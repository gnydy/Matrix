import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ResearchLab Projects',
  description: 'Research tasks, experiments and outputs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
