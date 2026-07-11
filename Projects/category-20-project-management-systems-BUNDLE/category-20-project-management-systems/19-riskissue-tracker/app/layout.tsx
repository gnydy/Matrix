import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RiskIssue Tracker',
  description: 'Risks, blockers and issue escalation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
