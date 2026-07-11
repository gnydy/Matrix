import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MedicalStaff HR Board',
  description: 'Hospital staff scheduling and credential UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
