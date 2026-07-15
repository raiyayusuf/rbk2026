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

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white pt-16 md:pt-20">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <div className="h-10 w-64 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-8 w-full max-w-2xl bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-6 w-full max-w-xl bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex gap-4">
              <div className="h-12 w-40 bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-12 w-40 bg-gray-200 rounded-xl animate-pulse" />
            </div>
            <div className="grid grid-cols-3 gap-8 w-full max-w-md">
              <div className="h-16 bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-16 bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-16 bg-gray-200 rounded-xl animate-pulse" />
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
          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Buat Undangan Digital Impianmu dengan{" "}
            <span className="text-rabiku-blue">Sentuhan Elegan</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="mt-4 text-sm md:text-base text-rabiku-blue/80 max-w-2xl leading-relaxed"
          >
            Pilih dari puluhan tema eksklusif, tambahkan foto, RSVP dan nikmati
            revisi sepuasnya. Wujudkan pernikahan impian dengan cara yang lebih
            modern dan bermakna.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg">
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
              <p className="text-xs text-rabiku-blue/60 font-medium">
                Website Terbuat
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rabiku-blue">5</p>
              <p className="text-xs text-rabiku-blue/60 font-medium">
                Tema Warna
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rabiku-blue">100%</p>
              <p className="text-xs text-rabiku-blue/60 font-medium">
                Kepuasan
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
