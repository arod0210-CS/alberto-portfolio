import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alberto Rodriguez | Software Developer & Operations Leader",
  description: "Computer Science student and warehouse operations leader building software for real-world operational problems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
