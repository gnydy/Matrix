import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RecruitBot Screening',
  description: 'Candidate screening and interview bot.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
