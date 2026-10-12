import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StudyCircle",
    template: "%s | StudyCircle",
  },
  description:
    "Create and discover study groups for university courses.",
  openGraph: {
    title: "StudyCircle",
    description:
      "Create and discover study groups for university courses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}