import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DesignApproval Workflow',
  description: 'Design comments and approval gates.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
