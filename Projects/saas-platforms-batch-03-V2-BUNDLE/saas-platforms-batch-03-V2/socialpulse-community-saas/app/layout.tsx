import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SocialPulse Community SaaS | SaaS Platform Template",
  description: "Community software that balances conversation, membership, and moderation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
