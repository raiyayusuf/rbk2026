/* ============================================
   src/app/layout.tsx
   ROOT LAYOUT - RABIKU.COM
   ============================================ */

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/providers/session-provider";

/* ============================================
   FONT CONFIGURATION
   ============================================ */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

/* ============================================
   METADATA CONFIGURATION
   ============================================ */
export const metadata: Metadata = {
  metadataBase: new URL("https://rabiku.com"),
  title: "Rabiku.com - Website Pernikahan Digital",
  description:
    "Buat website pernikahan impianmu dengan mudah. Tersedia 5 tema warna, galeri foto, musik, dan RSVP.",
  keywords: "website pernikahan, undangan digital, wedding website, rabiku",
  openGraph: {
    title: "Rabiku.com - Website Pernikahan Digital",
    description: "Buat website pernikahan impianmu dengan mudah.",
    url: "https://rabiku.com",
    siteName: "Rabiku.com",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Rabiku.com Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabiku.com - Website Pernikahan Digital",
    description: "Buat website pernikahan impianmu dengan mudah.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

/* ============================================
   ROOT LAYOUT COMPONENT
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}