/* ============================================
   src/components/wedding/thanks-section.tsx
   SECTION 10: TERIMA KASIH PENUTUP
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface ThanksSectionProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
}

export default function ThanksSection({ data, theme }: ThanksSectionProps) {
  const { colors, assets } = theme;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg2}
        alt="Thanks Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: `${colors.pink}60` }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: `${colors.pink}90` }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: `linear-gradient(to bottom right, ${colors.pink}, ${colors.border})`,
                    }}
                  />
                </div>
              </div>
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                style={{ color: colors.gold }}
              >
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

          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            Terima Kasih
          </h2>

          <p
            className="text-[11px] md:text-xs leading-relaxed mb-6 max-w-xs mx-auto italic opacity-80"
            style={{
              fontFamily: "Playfair Display, serif",
              color: colors.brown,
            }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.gold }}
            />
            <div
              className="w-8 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
          </div>

          <p
            className="text-[9px] tracking-[0.4em] font-medium mb-3"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.gold,
            }}
          >
            KAMI YANG BERBAHAGIA
          </p>

          <h3
            className="text-3xl md:text-4xl mb-8"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            {data.groomName} & {data.brideName}
          </h3>
        </motion.div>
      </div>

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
