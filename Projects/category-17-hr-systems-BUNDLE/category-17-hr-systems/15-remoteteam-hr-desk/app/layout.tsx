import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RemoteTeam HR Desk',
  description: 'Remote team timezones, check-ins, and policy hub.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
