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

interface CountdownSectionProps {
  data: WeddingData;
}

export default function CountdownSection({ data }: CountdownSectionProps) {
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
      {/* Background */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-3.png"
        alt="Countdown Background"
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      {/* Konten */}
      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        {/* Card Utama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 text-center border-t-4 border-[#F5A876]"
        >
          {/* Label */}
          <p
            className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-3"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            MENUJU HARI BAHAGIA
          </p>

          {/* Tanggal */}
          <h2
            className="text-3xl md:text-4xl text-[#D4838F] leading-tight mb-1"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {dayName}, {dayNumber}
          </h2>
          <h2
            className="text-3xl md:text-4xl text-[#D4838F] leading-tight mb-4"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {monthYear}
          </h2>

          {/* Ornamen */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
          </div>

          {/* Quote */}
          <p
            className="text-[14px] text-[#5C3A3F]/70 italic leading-relaxed mb-6 max-w-xs mx-auto"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Setiap detik yang berlalu membawa kami semakin dekat dengan janji
            suci. Doa dan restu dari Bapak/Ibu/Saudara/i adalah kebahagiaan
            terbesar bagi kami."
          </p>

          {/* Countdown Grid */}
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="bg-[#FDF8F8] border-2 border-[#F5D5D9] rounded-2xl py-3 md:py-4 text-center relative"
              >
                {/* Pin dekorasi atas */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F5B5B5]" />

                {/* Value */}
                <p
                  className="text-2xl md:text-3xl font-bold text-[#5C3A3F] leading-none"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {String(block.value).padStart(2, "0")}
                </p>

                {/* Label */}
                <p
                  className="text-[8px] md:text-[9px] tracking-[0.15em] text-[#5C3A3F]/60 font-bold mt-1.5"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {block.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button Simpan Tanggal */}
          <button
            onClick={handleSaveDate}
            className="w-full py-3.5 rounded-full bg-linear-to-r from-[#F5B5B5] to-[#F5A876] hover:from-[#E89BA5] hover:to-[#E89B76] text-white text-[10px] tracking-[0.25em] font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            <CalendarCheck size={14} />
            SIMPAN TANGGAL
          </button>
        </motion.div>
      </div>
    </section>
  );
}
