import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "../styles/ionic-style";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // Extra attributes from the server: class,mode
    <html lang="zh" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
