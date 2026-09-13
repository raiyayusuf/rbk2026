/* ============================================
   src/components/wedding/schedule-section.tsx
   SECTION 6: RANGKAIAN ACARA
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { WeddingData } from "@/types/wedding";

interface ScheduleSectionProps {
  data: WeddingData;
}

export default function ScheduleSection({ data }: ScheduleSectionProps) {
  const formattedDate = new Date(data.weddingDate).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-1.png"
        alt="Schedule Background"
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
            RANGKAIAN ACARA
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Momen Bahagia
          </h2>

          {/* Ornamen */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="w-full space-y-4">
          {data.eventSchedule.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border-t-4 border-[#F5A876]"
            >
              {/* Judul Acara */}
              <h3
                className="text-2xl md:text-3xl text-center text-[#D4838F] mb-6"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                }}
              >
                {event.title}
              </h3>

              {/* Info List */}
              <div className="space-y-4 mb-6">
                {/* Tanggal */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF0F2] border border-[#F5D5D9] flex items-center justify-center shrink-0">
                    <Calendar size={18} className="text-[#D4838F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] tracking-[0.2em] text-[#D4AF7A] font-bold mb-0.5"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      TANGGAL
                    </p>
                    <p
                      className="text-xs font-semibold text-[#5C3A3F]"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {formattedDate}
                    </p>
                  </div>
                </div>

                {/* Waktu */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF0F2] border border-[#F5D5D9] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#D4838F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] tracking-[0.2em] text-[#D4AF7A] font-bold mb-0.5"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      WAKTU
                    </p>
                    <p
                      className="text-xs font-semibold text-[#5C3A3F]"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {event.time}
                    </p>
                  </div>
                </div>

                {/* Lokasi */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF0F2] border border-[#F5D5D9] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#D4838F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] tracking-[0.2em] text-[#D4AF7A] font-bold mb-0.5"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      LOKASI
                    </p>
                    <p
                      className="text-xs font-semibold text-[#5C3A3F] uppercase"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {data.venueName}
                    </p>
                    <p
                      className="text-[10px] text-[#5C3A3F]/70 mt-0.5"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {data.venueAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Button Peta Lokasi */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(data.venueName + " " + data.venueAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full border-2 border-[#5C3A3F] text-[#5C3A3F] hover:bg-[#5C3A3F] hover:text-white text-[10px] tracking-[0.25em] font-bold transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <MapPin size={12} />
                PETA LOKASI
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
