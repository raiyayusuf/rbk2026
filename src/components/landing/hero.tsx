/* ============================================
   src/components/landing/hero.tsx
   HERO SECTION LANDING PAGE
   ============================================ */

"use client";

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
  return (
    <section className="section-padding pt-32 md:pt-40 bg-linear-to-b from-white to-rabiku-blue/5">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-rabiku-blue/10 text-rabiku-blue rounded-full text-sm"
          >
            🎯 #1 Website Pernikahan Digital
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Buat Website Pernikahan{" "}
            <span className="text-rabiku-blue">Impianmu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
          >
            Undangan digital modern dengan 5 tema warna, galeri foto, musik,
            dan RSVP. Mudah diedit kapan saja!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg">
              Lihat Tema ✨
            </Button>
            <Button variant="outline" size="lg">
              Hubungi Kami 💬
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
              <p className="text-sm text-gray-500">Website Terbuat</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rabiku-blue">5</p>
              <p className="text-sm text-gray-500">Tema Warna</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rabiku-blue">100%</p>
              <p className="text-sm text-gray-500">Kepuasan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}