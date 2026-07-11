import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClinicBot Triage Mock',
  description: 'Healthcare triage mock chatbot interface.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
