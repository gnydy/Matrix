import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupportBot Helpdesk',
  description: 'Customer support chatbot with ticket handoff.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
