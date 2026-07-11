import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgentMesh MultiBot Hub',
  description: 'Multi-bot orchestration and analytics center.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
