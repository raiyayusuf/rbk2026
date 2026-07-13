/* ============================================
   src/app/layout.tsx
   ROOT LAYOUT - RABIKU.ID
   ============================================ */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rabiku.id - Website Pernikahan Digital",
  description: "Buat website pernikahan impianmu dengan mudah. Tersedia 5 tema warna, galeri foto, musik, dan RSVP.",
  keywords: "website pernikahan, undangan digital, wedding website, rabiku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}