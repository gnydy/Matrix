import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIEducation Tutor',
  description: 'Adaptive tutor and quiz generator UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
