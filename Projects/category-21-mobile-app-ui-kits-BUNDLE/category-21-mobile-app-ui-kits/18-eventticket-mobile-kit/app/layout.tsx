import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EventTicket Mobile Kit',
  description: 'Events, ticket wallet and check-in screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
