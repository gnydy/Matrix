import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIFinance Forecast',
  description: 'Forecast, scenario and variance mock UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
