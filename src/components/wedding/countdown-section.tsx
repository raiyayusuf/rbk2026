/* ============================================
   src/components/wedding/countdown-section.tsx
   SECTION 5: PENGINGAT WAKTU (COUNTDOWN)
   ============================================ */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

  const formattedDate = new Date(data.weddingDate).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/themes/angelicgrace/Angelicgrace-3.png"
        alt="Countdown Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-2"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          MENUJU HARI BAHAGIA
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-[#5C3A3F] font-semibold mb-6 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {formattedDate}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-4 gap-3 w-full max-w-md"
        >
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 text-center"
            >
              <p
                className="text-2xl md:text-3xl font-bold text-[#D4838F]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {block.value}
              </p>
              <p
                className="text-[9px] tracking-[0.2em] text-[#D4AF7A] font-medium mt-1"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {block.label.toUpperCase()}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
