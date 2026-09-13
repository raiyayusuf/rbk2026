/* ============================================
   src/components/wedding/bride-section.tsx
   SECTION 3: PASANGAN MEMPELAI WANITA
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";
import { WeddingThemeConfig } from "@/constants/wedding-themes";
import { InstagramIcon } from "@/components/ui/icons";

interface BrideSectionProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
}

export default function BrideSection({ data, theme }: BrideSectionProps) {
  const { colors, assets } = theme;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg2}
        alt="Bride Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] font-medium mb-6"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: colors.gold,
          }}
        >
          MEMPELAI WANITA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-6"
        >
          <div
            className="w-56 h-80 md:w-64 md:h-90 rounded-t-full rounded-b-2xl overflow-hidden border-4 shadow-2xl"
            style={{ borderColor: colors.gold }}
          >
            <Image
              src={data.coverImage}
              alt={data.brideName}
              width={256}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl mb-3 text-center"
          style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
        >
          {data.brideFullName}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-2 mb-3"
        >
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs mb-1 text-center opacity-80"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: colors.brown,
          }}
        >
          Putri dari
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm font-semibold mb-6 text-center max-w-xs"
          style={{ fontFamily: "Playfair Display, serif", color: colors.brown }}
        >
          {data.brideParents}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          href={`https://instagram.com/${data.brideInstagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[10px] tracking-[0.2em] font-medium transition-all shadow-md hover:shadow-lg"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            background: `linear-gradient(to right, ${colors.pink}, ${colors.border})`,
          }}
        >
          <InstagramIcon size={12} />
          INSTAGRAM : @{data.brideInstagram.toUpperCase()}
        </motion.a>
      </div>
    </section>
  );
}
