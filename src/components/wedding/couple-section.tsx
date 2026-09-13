/* ============================================
   src/components/wedding/couple-section.tsx
   SECTION 3 & 4: PASANGAN MEMPELAI
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";

interface CoupleSectionProps {
  data: WeddingData;
}

export default function CoupleSection({ data }: CoupleSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/themes/angelicgrace/Angelicgrace-2.png"
        alt="Couple Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center gap-8">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          MEMPELAI
        </motion.p>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF7A] mb-4">
            <Image
              src={data.coverImage}
              alt={data.brideName}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <h3
            className="text-3xl text-[#D4838F] mb-2"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {data.brideName}
          </h3>
          <p
            className="text-xs text-[#5C3A3F] font-semibold mb-1"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {data.brideFullName}
          </p>
          <p
            className="text-[11px] text-[#5C3A3F]/70"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {data.brideParents}
          </p>
        </motion.div>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl text-[#D4AF7A]"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          &
        </motion.div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF7A] mb-4">
            <Image
              src={data.coverImage}
              alt={data.groomName}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <h3
            className="text-3xl text-[#D4838F] mb-2"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {data.groomName}
          </h3>
          <p
            className="text-xs text-[#5C3A3F] font-semibold mb-1"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {data.groomFullName}
          </p>
          <p
            className="text-[11px] text-[#5C3A3F]/70"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {data.groomParents}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
