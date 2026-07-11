import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EducationAdmissions CRM | CRM Systems',
  description: 'EducationAdmissions CRM template for CRM Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
