import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FactoryControl Desktop',
  description: 'Factory machine and work order console.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
