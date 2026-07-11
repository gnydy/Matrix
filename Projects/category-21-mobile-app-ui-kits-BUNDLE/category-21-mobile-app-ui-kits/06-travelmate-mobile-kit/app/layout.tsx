import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TravelMate Mobile Kit',
  description: 'Trip booking and itinerary mobile flow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
