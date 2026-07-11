import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RestaurantKDS Desktop',
  description: 'Kitchen display and order control desktop.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
