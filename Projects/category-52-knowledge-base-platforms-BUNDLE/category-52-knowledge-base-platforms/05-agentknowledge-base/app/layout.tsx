import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentKnowledge Base | Knowledge Base Platforms',
  description: 'AgentKnowledge Base template for Knowledge Base Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
