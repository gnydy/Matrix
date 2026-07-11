import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ContractorPeople Portal',
  description: 'Freelancer and contractor HR workspace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
