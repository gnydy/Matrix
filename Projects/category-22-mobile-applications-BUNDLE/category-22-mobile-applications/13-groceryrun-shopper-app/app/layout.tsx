import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GroceryRun Shopper App',
  description: 'Grocery shopping and delivery tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
