import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CommunityVoting Roadmap | Roadmap & Feature Request Platforms',
  description: 'CommunityVoting Roadmap template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
