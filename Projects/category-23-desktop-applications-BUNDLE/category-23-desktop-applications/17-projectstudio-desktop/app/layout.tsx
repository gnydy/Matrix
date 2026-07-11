import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ProjectStudio Desktop',
  description: 'Project tasks and document workspace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
