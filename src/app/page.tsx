/* ============================================
   src/app/page.tsx
   LANDING PAGE RABIKU.COM
   ============================================ */

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Themes from "@/components/landing/themes";
import Benefits from "@/components/landing/benefits";
import Testimonials from "@/components/landing/testimonials";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Section Themes */}
      <section id="themes" className="scroll-mt-20 md:scroll-mt-24">
        <Themes />
      </section>

      {/* Section Benefits (Tentang) */}
      <section id="benefits" className="scroll-mt-20 md:scroll-mt-24">
        <Benefits />
      </section>

      {/* Section Testimonials */}
      <section id="testimonials" className="scroll-mt-20 md:scroll-mt-24">
        <Testimonials />
      </section>

      {/* Section FAQ */}
      <section id="faq" className="scroll-mt-20 md:scroll-mt-24">
        <FAQ />
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
