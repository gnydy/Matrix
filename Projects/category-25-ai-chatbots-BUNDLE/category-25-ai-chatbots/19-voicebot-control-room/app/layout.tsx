import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VoiceBot Control Room',
  description: 'Voice/chat channel management bot console.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
