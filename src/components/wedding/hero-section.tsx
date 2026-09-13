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

  const dateObj = new Date(weddingDate);
  const dayName = dateObj.toLocaleDateString("id-ID", { weekday: "long" });
  const dayNumber = dateObj.toLocaleDateString("id-ID", { day: "numeric" });
  const monthYear = dateObj.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-2.png"
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      {/* Konten */}
      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        {/* Frame Foto - Arch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-6"
        >
          <div className="w-56 h-80 md:w-64 md:h-90 rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#D4AF7A] shadow-2xl">
            <Image
              src={coverImage}
              alt={`${groomName} & ${brideName}`}
              width={256}
              height={360}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Box Putih - Nama & Tanggal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 text-center border-t-4 border-[#F5A876]"
        >
          {/* Label */}
          <p
            className="text-[9px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-3"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            PERAYAAN PERNIKAHAN
          </p>

          {/* Nama Pengantin */}
          <h1
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight mb-1"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {groomName} &
          </h1>
          <h1
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight mb-4"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {brideName}
          </h1>

          {/* Ornamen */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-10 h-px bg-[#D4AF7A]/50" />
          </div>

          {/* Tanggal */}
          <p
            className="text-[11px] tracking-[0.3em] text-[#5C3A3F] font-semibold mb-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {dayName.toUpperCase()}, {dayNumber} {monthYear.toUpperCase()}
          </p>

          {/* Venue */}
          <p
            className="text-xs font-bold text-[#5C3A3F] uppercase mb-0.5"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {venueName}
          </p>
          <p
            className="text-[10px] text-[#5C3A3F]/70"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {venueAddress}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-2 mt-6 text-[#D4AF7A]"
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
