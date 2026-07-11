import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TalentGate Recruitment OS',
  description: 'Applicant tracking and hiring board.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
