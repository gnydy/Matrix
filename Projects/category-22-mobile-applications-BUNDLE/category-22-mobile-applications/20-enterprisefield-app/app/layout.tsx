import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EnterpriseField App',
  description: 'Field reports, tasks and offline sync mock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
