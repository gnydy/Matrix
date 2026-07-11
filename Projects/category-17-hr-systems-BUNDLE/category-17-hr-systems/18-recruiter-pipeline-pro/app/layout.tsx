import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruiter Pipeline Pro',
  description: 'Recruitment CRM with candidate stages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
