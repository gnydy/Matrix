import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MealDash Delivery App',
  description: 'Food order and tracking application.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
