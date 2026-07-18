/* ============================================
   src/app/review/layout.tsx
   REVIEW PAGE - METADATA & LAYOUT
   ============================================ */

import type { Metadata } from "next";
import Navbar from "@/components/landing/navbar";

export const metadata: Metadata = {
  title: "Kirim Review - Rabiku.com",
  description:
    "Bagikan pengalaman Anda menggunakan Rabiku. Ceritakan kesan Anda tentang website pernikahan digital kami.",
  keywords: [
    "review rabiku",
    "testimoni rabiku",
    "ulasan website pernikahan",
    "pengalaman rabiku",
    "review undangan digital",
  ],
  openGraph: {
    title: "Kirim Review - Rabiku.com",
    description: "Bagikan pengalaman Anda menggunakan Rabiku.",
    url: "https://rabiku.com/review",
    type: "website",
  },
  alternates: {
    canonical: "https://rabiku.com/review",
  },
};

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
