import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LogisticsDispatcher Desktop',
  description: 'Dispatcher desktop with routes and drivers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
