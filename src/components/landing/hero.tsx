/* ============================================
   src/components/landing/hero.tsx
   HERO SECTION LANDING PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <section className="min-h-screen flex items-center bg-white pt-24 md:pt-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <div className="h-10 w-48 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-8 w-full max-w-xl bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-6 w-full max-w-lg bg-gray-200 rounded-lg animate-pulse" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-4">
              <div className="w-48 h-64 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center bg-white pt-24 md:pt-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Side - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Buat Undangan Digital Impianmu dengan{" "}
              <span className="text-rabiku-blue">Sentuhan</span>{" "}
              <span className="text-rabiku-pink">Elegan</span>
            </h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUpDelayed}
              className="mt-4 text-sm md:text-base text-rabiku-blue/80 max-w-2xl leading-relaxed md:mx-0 mx-auto"
            >
              Pilih dari puluhan tema eksklusif, tambahkan foto, RSVP dan
              nikmati revisi sepuasnya. Wujudkan pernikahan impian dengan cara
              yang lebih modern dan bermakna.
            </motion.p>
          </motion.div>

          {/* Right Side - Image (Hanya 1 di mobile, 3 di desktop) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpDelayed}
            className="flex-1 flex items-center justify-center"
          >
            {/* Main Image - Mobile: 1 gambar, Desktop: 3 gambar */}
            <div className="flex items-center justify-center gap-7">
              {/* Main Image */}
              <div className="relative w-72 md:w-80 h-88 md:h-96 rounded-2xl overflow-hidden shadow-lg shrink-0">
                <Image
                  src="/dummy-image/image-dummy-potrait.png"
                  alt="Wedding Theme"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Side Images - Hanya muncul di desktop */}
              <div className="hidden md:flex flex-col gap-7">
                <div className="relative w-56 md:w-64 h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/dummy-image/image-dummy-potrait.png"
                    alt="Wedding Theme"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-56 md:w-64 h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/dummy-image/image-dummy-potrait.png"
                    alt="Wedding Theme"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
