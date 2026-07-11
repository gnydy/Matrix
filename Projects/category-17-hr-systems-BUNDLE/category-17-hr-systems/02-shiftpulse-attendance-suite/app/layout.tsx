import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ShiftPulse Attendance Suite',
  description: 'Attendance and shift control for retail teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
