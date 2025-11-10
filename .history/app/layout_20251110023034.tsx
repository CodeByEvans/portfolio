import type React from "react";
import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistMono = Gelasio({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description:
    "Portfolio profesional de desarrollador Full-Stack especializado en React, TypeScript y Next.js",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
