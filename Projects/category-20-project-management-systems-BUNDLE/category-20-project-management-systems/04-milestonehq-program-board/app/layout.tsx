import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MilestoneHQ Program Board',
  description: 'Milestones, owners and executive summary.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
