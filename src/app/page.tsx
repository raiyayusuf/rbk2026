/* ============================================
   src/app/page.tsx
   LANDING PAGE RABIKU.COM
   ============================================ */

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
// import Themes from "@/components/landing/themes";
// import About from "@/components/landing/about";
// import Testimonials from "@/components/landing/testimonials";
// import FAQ from "@/components/landing/faq";
// import Footer from "@/components/landing/footer";

/* ============================================
   HOME PAGE COMPONENT
   ============================================ */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Tema Section (nanti) */}
      {/* <Themes /> */}

      {/* Tentang Section (nanti) */}
      {/* <About /> */}

      {/* Testimonial Section (nanti) */}
      {/* <Testimonials /> */}

      {/* FAQ Section (nanti) */}
      {/* <FAQ /> */}

      {/* Footer (nanti) */}
      {/* <Footer /> */}
    </main>
  );
}