import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
const cosmic = localFont({
  src: "./fonts/cosmic.ttf",
  variable: '--font-cosmic',
})

export const metadata: Metadata = {
  title: "Cosmos✨  ",
  description: "Cosmos is a low-fi coding project planner for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cosmic.variable}`}>{children}</body>
    </html>
  );
}
