/* ============================================
   src/components/wedding/groom-section.tsx
   SECTION 4: PASANGAN MEMPELAI PRIA
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";

interface GroomSectionProps {
  data: WeddingData;
}

export default function GroomSection({ data }: GroomSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/themes/angelicgrace/Angelicgrace-3.png"
        alt="Groom Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-6"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          MEMPELAI PRIA
        </motion.p>

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
              alt={data.groomName}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>

          <h3
            className="text-4xl text-[#D4838F] mb-2"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {data.groomName}
          </h3>

          <p
            className="text-xs text-[#5C3A3F] font-semibold mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {data.groomFullName}
          </p>

          <div className="w-12 h-px bg-[#D4AF7A] mx-auto mb-3" />

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
