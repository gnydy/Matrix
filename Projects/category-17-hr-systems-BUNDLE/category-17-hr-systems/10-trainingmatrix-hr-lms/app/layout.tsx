import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrainingMatrix HR LMS',
  description: 'Internal training and certification tracker.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
