import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FitHabit Coach App',
  description: 'Fitness habits and training dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
