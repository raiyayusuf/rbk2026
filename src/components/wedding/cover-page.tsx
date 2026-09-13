/* ============================================
   src/components/wedding/cover-page.tsx
   COVER PAGE - SAMPUL UNDANGAN
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface CoverPageProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
  onOpen: () => void;
}

export default function CoverPage({ data, theme, onOpen }: CoverPageProps) {
  const { groomName, brideName, coverImage } = data;
  const { colors, assets } = theme;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={assets.cover}
        alt="Cover Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Konten */}
      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        {/* Label Atas */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] tracking-[0.4em] font-medium mb-6"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: colors.gold,
          }}
        >
          PERNIKAHAN SUCI
        </motion.p>

        {/* Nama Pengantin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1
            className="text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            {groomName} &
          </h1>
          <h1
            className="text-5xl md:text-6xl leading-tight mt-1"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            {brideName}
          </h1>
        </motion.div>

        {/* Foto Pengantin - Frame Arch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mb-8"
        >
          <div
            className="w-40 h-56 md:w-48 md:h-64 rounded-t-full overflow-hidden border-4 shadow-xl"
            style={{ borderColor: colors.gold }}
          >
            <Image
              src={coverImage}
              alt={`${groomName} & ${brideName}`}
              width={200}
              height={280}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Box Putih */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-5 text-center"
        >
          <p
            className="text-[9px] tracking-[0.3em] font-medium mb-2"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.gold,
            }}
          >
            KEPADA YTH.
          </p>
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-4"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.brown,
            }}
          >
            BAPAK/IBU/SAUDARA/I
          </p>

          {/* Button */}
          <button
            onClick={onOpen}
            className="w-full py-3 rounded-full text-white text-[10px] tracking-[0.3em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              backgroundColor: colors.pink,
            }}
          >
            <MailOpen size={14} />
            BUKA UNDANGAN
          </button>
        </motion.div>
      </div>
    </div>
  );
}
