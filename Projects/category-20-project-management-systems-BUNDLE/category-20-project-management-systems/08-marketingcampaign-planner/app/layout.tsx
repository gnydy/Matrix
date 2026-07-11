import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MarketingCampaign Planner',
  description: 'Campaign tasks, channels and deliverables.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
