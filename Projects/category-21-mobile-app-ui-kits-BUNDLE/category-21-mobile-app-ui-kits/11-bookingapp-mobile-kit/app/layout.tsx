import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BookingApp Mobile Kit',
  description: 'Appointment booking mobile screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
