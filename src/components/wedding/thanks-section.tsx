/* ============================================
   src/components/wedding/thanks-section.tsx
   SECTION 10: TERIMA KASIH PENUTUP
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";

interface ThanksSectionProps {
  data: WeddingData;
}

export default function ThanksSection({ data }: ThanksSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Foto Full */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-2.png"
        alt="Thanks Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />

      {/* Box Transparan */}
      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 text-center"
        >
          {/* Icon Lingkaran Dekorasi */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-full border-2 border-[#D4838F]/40 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#D4838F]/60 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-linear-to-br from-[#D4838F] to-[#E89BA5]" />
                </div>
              </div>
              {/* Ornamen Bunga di Icon */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[#D4AF7A]">
                <svg
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="currentColor"
                >
                  <path d="M10 0 L12 5 L10 10 L8 5 Z" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Judul Terima Kasih */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl text-[#D4838F] mb-4"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Terima Kasih
          </motion.h2>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11px] md:text-xs text-[#5C3A3F]/80 leading-relaxed mb-6 max-w-xs mx-auto italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </motion.p>

          {/* Ornamen Garis */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-8 h-px bg-[#D4AF7A]/50" />
          </motion.div>

          {/* Label KAMI YANG BERBAHAGIA */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[9px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-3"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            KAMI YANG BERBAHAGIA
          </motion.p>

          {/* Nama Pasangan */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl md:text-4xl text-[#D4838F] mb-8"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {data.groomName} & {data.brideName}
          </motion.h3>
        </motion.div>
      </div>

      {/* Bottom - Watermark Rabiku */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-2">
        <p
          className="text-[8px] tracking-[0.2em] text-white font-medium"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          UNDANGAN DIGITAL INI DIBUAT OLEH
        </p>
        <Image
          src="/logo/logo-rabiku-text-white.png"
          alt="Rabiku.com"
          width={100}
          height={28}
          className="h-6 w-auto"
        />
        <p
          className="text-[10px] text-white mt-1"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          &copy; 2026 Hak Cipta Dilindungi.
        </p>
      </div>
    </section>
  );
}
