import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RideLink Driver App',
  description: 'Ride and driver trip interface.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
