import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClinicPatient App Kit',
  description: 'Patient portal and doctor booking screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
