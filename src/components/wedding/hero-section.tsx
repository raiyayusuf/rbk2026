/* ============================================
   src/components/wedding/hero-section.tsx
   HERO SECTION - SETELAH BUKA UNDANGAN
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface HeroSectionProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
}

export default function HeroSection({ data, theme }: HeroSectionProps) {
  const {
    groomName,
    brideName,
    weddingDate,
    venueName,
    venueAddress,
    coverImage,
  } = data;
  const { colors, assets } = theme;

  const dateObj = new Date(weddingDate);
  const dayName = dateObj.toLocaleDateString("id-ID", { weekday: "long" });
  const dayNumber = dateObj.toLocaleDateString("id-ID", { day: "numeric" });
  const monthYear = dateObj.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg2}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-6"
        >
          <div
            className="w-56 h-80 md:w-64 md:h-90 rounded-t-full rounded-b-3xl overflow-hidden border-4 shadow-2xl"
            style={{ borderColor: colors.gold }}
          >
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 text-center border-t-4"
          style={{ borderTopColor: colors.border }}
        >
          <p
            className="text-[9px] tracking-[0.4em] font-medium mb-3"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.gold,
            }}
          >
            PERAYAAN PERNIKAHAN
          </p>

          <h1
            className="text-4xl md:text-5xl leading-tight mb-1"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            {groomName} &
          </h1>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            {brideName}
          </h1>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-10 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.gold }}
            />
            <div
              className="w-10 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
          </div>

          <p
            className="text-[11px] tracking-[0.3em] font-semibold mb-2"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.brown,
            }}
          >
            {dayName.toUpperCase()}, {dayNumber} {monthYear.toUpperCase()}
          </p>

          <p
            className="text-xs font-bold uppercase mb-0.5"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.brown,
            }}
          >
            {venueName}
          </p>
          <p
            className="text-[10px] opacity-70"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.brown,
            }}
          >
            {venueAddress}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-2 mt-6"
          style={{ color: colors.gold }}
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
