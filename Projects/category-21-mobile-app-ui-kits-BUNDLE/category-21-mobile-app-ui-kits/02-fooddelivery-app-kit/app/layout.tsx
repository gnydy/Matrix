import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FoodDelivery App Kit',
  description: 'Restaurant, cart, tracking and driver screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
