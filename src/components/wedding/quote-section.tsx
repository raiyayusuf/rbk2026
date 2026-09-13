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
      <Image
        src="/themes/angelicgrace/Angelicgrace-1.png"
        alt="Quote Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center"
        >
          <p
            className="text-[10px] tracking-[0.3em] text-[#D4AF7A] font-medium mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {data.quoteSource}
          </p>

          <div className="flex justify-center mb-4 text-[#D4838F]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          <p
            className="text-sm md:text-base text-[#5C3A3F] leading-relaxed italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            &ldquo;{data.quote}&rdquo;
          </p>

          <div className="flex justify-center mt-6 text-[#D4AF7A]">
            <div className="w-16 h-px bg-[#D4AF7A]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
