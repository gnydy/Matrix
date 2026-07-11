import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BankingBot Service Desk',
  description: 'Banking service chatbot mock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
