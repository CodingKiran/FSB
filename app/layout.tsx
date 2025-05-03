import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Freelance Success System",
  description: "An Educational Email Course for Freelance Writers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sansClass =
    typeof geistSans.variable === "string" ? geistSans.variable : "";
  const monoClass =
    typeof geistMono.variable === "string" ? geistMono.variable : "";

  return (
    <html lang="en">
      <body className={`${sansClass} ${monoClass} antialiased`}>
        {children}
      </body>
    </html>
  );
}
