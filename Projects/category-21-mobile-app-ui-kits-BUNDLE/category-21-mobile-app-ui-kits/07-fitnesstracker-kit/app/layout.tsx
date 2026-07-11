import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FitnessTracker Kit',
  description: 'Workout, meal and progress mobile screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
