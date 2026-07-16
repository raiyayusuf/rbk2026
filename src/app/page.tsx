/* ============================================
   src/app/page.tsx
   LANDING PAGE RABIKU.COM
   ============================================ */

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Themes from "@/components/landing/themes";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Themes />
      <WhatsAppButton />
    </main>
  );
}