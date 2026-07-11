import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TravelCompanion App',
  description: 'Trips, booking and itinerary assistant.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
