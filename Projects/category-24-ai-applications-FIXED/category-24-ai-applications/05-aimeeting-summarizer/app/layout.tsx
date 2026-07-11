import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIMeeting Summarizer',
  description: 'Meeting transcript summary and action items.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
