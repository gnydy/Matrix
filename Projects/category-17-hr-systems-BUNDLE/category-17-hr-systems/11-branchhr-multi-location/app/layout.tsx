import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BranchHR Multi Location',
  description: 'HR operations for branches and stores.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
