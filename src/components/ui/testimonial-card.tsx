/* ============================================
   src/components/ui/testimonial-card.tsx
   TESTIMONIAL CARD - RABIKU.COM
   ============================================ */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  couple: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

export default function TestimonialCard({
  name,
  couple,
  date,
  rating,
  text,
  image,
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ============================================
     FORMAT COUPLE NAME - WANITA PINK, PRIA BLUE
     ============================================ */
  const formatCoupleName = (couple: string) => {
    const names = couple.split(" & ");
    if (names.length === 2) {
      return (
        <>
          <span className="text-rabiku-pink">{names[0]}</span>
          <span className="text-gray-900"> & </span>
          <span className="text-rabiku-blue">{names[1]}</span>
        </>
      );
    }
    return <span>{couple}</span>;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 h-full flex flex-col">
      {/* Image - Full Portrait */}
      <div className="relative aspect-3/4 bg-gray-100 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          loading="eager"
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Box putih mengambang */}
        <div 
          className={`absolute bottom-3 left-3 right-3 p-4 backdrop-blur-md rounded-xl shadow-md transition-all duration-300 max-h-[90%] overflow-hidden flex flex-col ${
            isMobile ? 'bg-white/60 cursor-pointer hover:bg-white/40' : 'bg-white/50 cursor-pointer hover:bg-white/85'
          }`}
          onClick={toggleExpand}
        >
          {/* Nama - Fixed */}
          <h3 className="text-sm font-semibold text-gray-900 shrink-0">
            dari {formatCoupleName(couple)}
          </h3>

          {/* Tanggal - Fixed */}
          <p className="text-xs text-gray-400 mt-0.5 shrink-0">{date}</p>

          {/* Bintang + Icon - Fixed */}
          <div className="flex items-center justify-between mt-1.5 shrink-0">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            {/* Toggle Icon - Muncul di semua device */}
            <button
              className="text-rabiku-blue hover:text-rabiku-blue-dark transition-colors p-1 shrink-0 pointer-events-none"
              aria-label={isExpanded ? "Sembunyikan testimonial" : "Tampilkan testimonial"}
            >
              {isExpanded ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </div>

          {/* Testimonial Text - Expandable, TANPA SCROLL BAR */}
          <div className="mt-2 flex-1 min-h-0">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden h-full"
                >
                  <div className="h-full overflow-y-auto max-h-30 md:max-h-40 scrollbar-hide">
                    <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100/70">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}