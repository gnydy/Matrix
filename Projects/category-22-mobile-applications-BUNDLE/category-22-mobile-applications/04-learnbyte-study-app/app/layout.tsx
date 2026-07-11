import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LearnByte Study App',
  description: 'Learning app with lessons and quizzes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
