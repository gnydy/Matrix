import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HealthCoach Mobile Kit',
  description: 'Wellness, appointments and progress screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
