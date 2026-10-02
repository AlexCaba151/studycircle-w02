import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyCircle",
  description: "Create and discover study groups for university courses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
