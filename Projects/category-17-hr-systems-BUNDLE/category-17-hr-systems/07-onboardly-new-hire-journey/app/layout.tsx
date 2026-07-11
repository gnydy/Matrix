import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onboardly New Hire Journey',
  description: 'Onboarding checklist and document tracker.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
