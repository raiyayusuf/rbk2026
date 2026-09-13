/* ============================================
   src/components/wedding/countdown-section.tsx
   SECTION 5: PENGINGAT WAKTU (COUNTDOWN)
   ============================================ */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { WeddingData } from "@/types/wedding";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface CountdownSectionProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
}

export default function CountdownSection({
  data,
  theme,
}: CountdownSectionProps) {
  const { colors, assets } = theme;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(data.weddingDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [data.weddingDate]);

  const dateObj = new Date(data.weddingDate);
  const dayName = dateObj.toLocaleDateString("id-ID", { weekday: "long" });
  const dayNumber = dateObj.toLocaleDateString("id-ID", { day: "numeric" });
  const monthYear = dateObj.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  const timeBlocks = [
    { label: "HARI", value: timeLeft.days },
    { label: "JAM", value: timeLeft.hours },
    { label: "MENIT", value: timeLeft.minutes },
    { label: "DETIK", value: timeLeft.seconds },
  ];

  const handleSaveDate = () => {
    const startDate = new Date(data.weddingDate)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const endDate = new Date(
      new Date(data.weddingDate).getTime() + 2 * 60 * 60 * 1000,
    )
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Pernikahan ${data.groomName} & ${data.brideName}`,
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      `Pernikahan ${data.groomName} & ${data.brideName} di ${data.venueName}`,
    )}&location=${encodeURIComponent(`${data.venueName}, ${data.venueAddress}`)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg3}
        alt="Countdown Background"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 text-center border-t-4"
          style={{ borderTopColor: colors.border }}
        >
          <p
            className="text-[10px] tracking-[0.4em] font-medium mb-3"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.gold,
            }}
          >
            MENUJU HARI BAHAGIA
          </p>

          <h2
            className="text-3xl md:text-4xl leading-tight mb-1"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            {dayName}, {dayNumber}
          </h2>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-4"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            {monthYear}
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
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
            className="text-[14px] italic leading-relaxed mb-6 max-w-xs mx-auto opacity-70"
            style={{
              fontFamily: "Playfair Display, serif",
              color: colors.brown,
            }}
          >
            "Setiap detik yang berlalu membawa kami semakin dekat dengan janji
            suci. Doa dan restu dari Bapak/Ibu/Saudara/i adalah kebahagiaan
            terbesar bagi kami."
          </p>

          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="rounded-2xl py-3 md:py-4 text-center relative border-2"
                style={{ backgroundColor: colors.bg1, borderColor: colors.bg2 }}
              >
                <div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.border }}
                />

                <p
                  className="text-2xl md:text-3xl font-bold leading-none"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: colors.brown,
                  }}
                >
                  {String(block.value).padStart(2, "0")}
                </p>

                <p
                  className="text-[8px] md:text-[9px] tracking-[0.15em] font-bold mt-1.5 opacity-60"
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    color: colors.brown,
                  }}
                >
                  {block.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={handleSaveDate}
            className="w-full py-3.5 rounded-full text-white text-[10px] tracking-[0.25em] font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              background: `linear-gradient(to right, ${colors.pink}, ${colors.border})`,
            }}
          >
            <CalendarCheck size={14} />
            SIMPAN TANGGAL
          </button>
        </motion.div>
      </div>
    </section>
  );
}
