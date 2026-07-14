/* ============================================
   src/components/landing/hero.tsx
   HERO SECTION LANDING PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInUpDelayed = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

/* ============================================
   HERO COMPONENT
   ============================================ */
export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render skeleton saat mounting untuk prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white pt-16 md:pt-20">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Badge Skeleton */}
            <div className="mb-4 h-8 w-48 bg-gray-200 rounded-full animate-pulse" />

            {/* Heading Skeleton */}
            <div className="h-16 w-full max-w-2xl bg-gray-200 rounded-lg animate-pulse" />

            {/* Subtitle Skeleton */}
            <div className="mt-4 h-6 w-full max-w-xl bg-gray-200 rounded-lg animate-pulse" />

            {/* CTA Buttons Skeleton */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse" />
            </div>

            {/* Stats Skeleton */}
            <div className="mt-12 grid grid-cols-3 gap-8 w-full max-w-md">
              <div className="h-16 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-16 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-16 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-16 md:pt-20">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-rabiku-blue/10 text-rabiku-blue rounded-full text-sm font-medium"
          >
            #1 Website Pernikahan Digital
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-rabiku-blue leading-tight"
          >
            Buat Website Pernikahan{" "}
            <span className="text-rabiku-blue-dark">Impianmu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="mt-4 text-lg md:text-xl text-rabiku-blue/80 max-w-2xl"
          >
            Undangan digital modern dengan 5 tema warna, galeri foto, musik,
            dan RSVP. Mudah diedit kapan saja!
          </motion.p>

          {/* CTA Buttons - PAKE SIZE YANG SAMA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="xl">
              Lihat Tema
            </Button>
            <Button variant="outline" size="xl">
              Hubungi Kami
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="mt-12 grid grid-cols-3 gap-8 w-full max-w-md"
          >
            <div>
              <p className="text-2xl font-bold text-rabiku-blue">50+</p>
              <p className="text-sm text-rabiku-blue/70 font-medium">
                Website Terbuat
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rabiku-blue">5</p>
              <p className="text-sm text-rabiku-blue/70 font-medium">
                Tema Warna
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rabiku-blue">100%</p>
              <p className="text-sm text-rabiku-blue/70 font-medium">
                Kepuasan
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}