import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EduLearn Mobile Kit',
  description: 'Course app screens and lesson player.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
