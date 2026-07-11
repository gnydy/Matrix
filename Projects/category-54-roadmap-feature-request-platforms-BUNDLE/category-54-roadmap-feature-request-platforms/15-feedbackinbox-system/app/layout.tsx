import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FeedbackInbox System | Roadmap & Feature Request Platforms',
  description: 'FeedbackInbox System template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
