import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SupportDriven Roadmap | Roadmap & Feature Request Platforms',
  description: 'SupportDriven Roadmap template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
