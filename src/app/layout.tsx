import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music producer",
  description: "Created by Yohan Mayorga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
