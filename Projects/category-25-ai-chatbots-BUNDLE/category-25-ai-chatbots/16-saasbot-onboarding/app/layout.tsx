import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaSBot Onboarding',
  description: 'SaaS onboarding and help chatbot.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
