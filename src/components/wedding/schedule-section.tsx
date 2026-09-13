/* ============================================
   src/components/wedding/schedule-section.tsx
   SECTION 6: RANGKAIAN ACARA
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface ScheduleSectionProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
}

export default function ScheduleSection({ data, theme }: ScheduleSectionProps) {
  const { colors, assets } = theme;

  const formattedDate = new Date(data.weddingDate).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg1}
        alt="Schedule Background"
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
            RANGKAIAN ACARA
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            Momen Bahagia
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
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
        </motion.div>

        <div className="w-full space-y-4">
          {data.eventSchedule.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border-t-4"
              style={{ borderTopColor: colors.border }}
            >
              <h3
                className="text-2xl md:text-3xl text-center mb-6"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  color: colors.pink,
                }}
              >
                {event.title}
              </h3>

              <div className="space-y-4 mb-6">
                {/* Tanggal */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: colors.bg1,
                      borderColor: colors.bg2,
                    }}
                  >
                    <Calendar size={18} style={{ color: colors.pink }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] tracking-[0.2em] font-bold mb-0.5"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.gold,
                      }}
                    >
                      TANGGAL
                    </p>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.brown,
                      }}
                    >
                      {formattedDate}
                    </p>
                  </div>
                </div>

                {/* Waktu */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: colors.bg1,
                      borderColor: colors.bg2,
                    }}
                  >
                    <Clock size={18} style={{ color: colors.pink }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] tracking-[0.2em] font-bold mb-0.5"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.gold,
                      }}
                    >
                      WAKTU
                    </p>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.brown,
                      }}
                    >
                      {event.time}
                    </p>
                  </div>
                </div>

                {/* Lokasi */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: colors.bg1,
                      borderColor: colors.bg2,
                    }}
                  >
                    <MapPin size={18} style={{ color: colors.pink }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[9px] tracking-[0.2em] font-bold mb-0.5"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.gold,
                      }}
                    >
                      LOKASI
                    </p>
                    <p
                      className="text-xs font-semibold uppercase"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.brown,
                      }}
                    >
                      {data.venueName}
                    </p>
                    <p
                      className="text-[10px] mt-0.5 opacity-70"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.brown,
                      }}
                    >
                      {data.venueAddress}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(data.venueName + " " + data.venueAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full border-2 text-[10px] tracking-[0.25em] font-bold transition-all flex items-center justify-center gap-2 hover:text-white"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  borderColor: colors.brown,
                  color: colors.brown,
                }}
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
