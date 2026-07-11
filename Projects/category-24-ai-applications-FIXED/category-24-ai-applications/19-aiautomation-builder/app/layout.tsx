import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIAutomation Builder',
  description: 'Prompt-to-workflow automation builder.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
