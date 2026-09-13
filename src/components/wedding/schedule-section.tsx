/* ============================================
   src/components/wedding/schedule-section.tsx
   SECTION 6: RANGKAIAN ACARA
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { WeddingData } from "@/types/wedding";

interface ScheduleSectionProps {
  data: WeddingData;
}

export default function ScheduleSection({ data }: ScheduleSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/themes/angelicgrace/Angelicgrace-1.png"
        alt="Schedule Background"
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
          RANGKAIAN ACARA
        </motion.p>

        <div className="w-full space-y-4">
          {data.eventSchedule.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-[#D4AF7A]" />
                <p
                  className="text-[10px] tracking-[0.2em] text-[#D4AF7A] font-medium"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {event.time}
                </p>
              </div>

              <h3
                className="text-xl text-[#D4838F] mb-1"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {event.title}
              </h3>

              <p
                className="text-xs text-[#5C3A3F]/70 mb-3"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {event.description}
              </p>

              <div className="flex items-start gap-2 pt-3 border-t border-[#D4AF7A]/20">
                <MapPin size={14} className="text-[#D4AF7A] mt-0.5 shrink-0" />
                <div>
                  <p
                    className="text-xs font-semibold text-[#5C3A3F]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {data.venueName}
                  </p>
                  <p
                    className="text-[10px] text-[#5C3A3F]/70"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {data.venueAddress}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
