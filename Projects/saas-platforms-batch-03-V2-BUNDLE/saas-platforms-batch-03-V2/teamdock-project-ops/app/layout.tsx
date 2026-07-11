import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeamDock Project Ops | SaaS Platform Template",
  description: "Project delivery without scattered boards, lost files, or invisible blockers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
