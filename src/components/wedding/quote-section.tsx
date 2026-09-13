/* ============================================
   src/components/wedding/quote-section.tsx
   SECTION 2: KUTIPAN / MAKNA
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";

interface QuoteSectionProps {
  data: WeddingData;
}

export default function QuoteSection({ data }: QuoteSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-1.png"
        alt="Quote Background"
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      {/* Konten */}
      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p
            className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            KUTIPAN
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Cutipan Hati Kami
          </h2>

          {/* Ornamen */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
          </div>
        </motion.div>

        {/* Card Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border-t-4 border-[#F5A876]"
        >
          {/* Icon Quote */}
          <div className="flex justify-center mb-5 text-[#D4838F]">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          {/* Quote */}
          <p
            className="text-[13px] md:text-sm text-[#5C3A3F]/80 leading-relaxed italic max-w-xs mx-auto"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            &ldquo;{data.quote}&rdquo;
          </p>

          {/* Ornamen Bawah */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-10 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-10 h-px bg-[#D4AF7A]/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
