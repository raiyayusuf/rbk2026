/* ============================================
   src/components/wedding/gallery-section.tsx
   SECTION 7: LEMBAR KENANGAN (GALERI)
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WeddingData } from "@/types/wedding";

interface GallerySectionProps {
  data: WeddingData;
}

export default function GallerySection({ data }: GallerySectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-2.png"
        alt="Gallery Background"
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
            KISAH KAMI
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Lembar Kenangan
          </h2>

          {/* Ornamen */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-4">
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
          </div>

          <p
            className="text-[11px] text-[#5C3A3F]/70 italic max-w-xs mx-auto leading-relaxed"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Setiap foto menyimpan ribuan cerita yang tak terungkap kata. Inilah
            sedikit jejak kisah cinta kami.
          </p>
        </motion.div>

        {/* Gallery Layout */}
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

          {/* Frame 2 & 3 - Kotak (2 Kolom) */}
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
