import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RestaurantBot Ordering',
  description: 'Food ordering chatbot and order summary.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
