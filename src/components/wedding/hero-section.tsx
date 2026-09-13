/* ============================================
   src/components/wedding/hero-section.tsx
   HERO SECTION - SETELAH BUKA UNDANGAN
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WeddingData } from "@/types/wedding";

interface HeroSectionProps {
  data: WeddingData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const {
    groomName,
    brideName,
    weddingDate,
    venueName,
    venueAddress,
    coverImage,
  } = data;

  // Format tanggal
  const formattedDate = new Date(weddingDate).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative w-full min-h-screen bg-[#FDF0F2] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Ornamen Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-0 w-40 h-40 bg-[#F5D5D9] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-40 h-40 bg-[#F5D5D9] rounded-full blur-3xl" />
      </div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
        {/* Foto Full */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-3/4 rounded-2xl overflow-hidden shadow-xl mb-8 border-4 border-white"
        >
          <Image
            src={coverImage}
            alt={`${groomName} & ${brideName}`}
            width={400}
            height={533}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        {/* Nama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-4"
        >
          <h1
            className="text-4xl text-[#D4838F] leading-tight"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {groomName} & {brideName}
          </h1>
        </motion.div>

        {/* Tanggal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[11px] tracking-[0.3em] text-[#5C3A3F] font-medium mb-2 text-center"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          {formattedDate.toUpperCase()}
        </motion.p>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-8"
        >
          <p
            className="text-sm font-semibold text-[#5C3A3F]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {venueName}
          </p>
          <p
            className="text-xs text-[#5C3A3F]/70 mt-1"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {venueAddress}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-2 text-[#D4AF7A]"
        >
          <span
            className="text-[9px] tracking-[0.3em] font-medium"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            GULIR KE BAWAH
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
