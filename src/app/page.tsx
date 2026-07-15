/* ============================================
   src/app/page.tsx
   LANDING PAGE RABIKU.COM
   ============================================ */

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Themes from "@/components/landing/themes";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Themes />
    </main>
  );
}
