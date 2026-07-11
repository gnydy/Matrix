import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SandboxLaunch Portal | Demo Centers & Live Sandbox',
  description: 'SandboxLaunch Portal template for Demo Centers & Live Sandbox.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
