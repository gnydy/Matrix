import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SmartHome Mobile Kit',
  description: 'Devices, rooms and automation screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
