/* ============================================
   src/components/wedding/gallery-section.tsx
   SECTION 7: LEMBAR KENANGAN (GALERI)
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface GallerySectionProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
}

export default function GallerySection({ data, theme }: GallerySectionProps) {
  const { colors, assets } = theme;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg2}
        alt="Gallery Background"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p
            className="text-[10px] tracking-[0.4em] font-medium mb-2"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.gold,
            }}
          >
            KISAH KAMI
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            Lembar Kenangan
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3 mb-4">
            <div
              className="w-12 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.gold }}
            />
            <div
              className="w-12 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
          </div>

          <p
            className="text-[11px] italic max-w-xs mx-auto leading-relaxed opacity-70"
            style={{
              fontFamily: "Playfair Display, serif",
              color: colors.brown,
            }}
          >
            Setiap foto menyimpan ribuan cerita yang tak terungkap kata. Inilah
            sedikit jejak kisah cinta kami.
          </p>
        </motion.div>

        <div className="w-full space-y-4">
          {/* Frame 1 - Landscape */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative bg-white rounded-2xl p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={data.galleryImages[0]}
                  alt="Gallery 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 430px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Frame 2 & 3 - Kotak */}
          <div className="grid grid-cols-2 gap-4">
            {data.galleryImages.slice(1, 3).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`Gallery ${index + 2}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
