import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HealthcareHL7 Mock | Integrations Platforms',
  description: 'HealthcareHL7 Mock template for Integrations Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
