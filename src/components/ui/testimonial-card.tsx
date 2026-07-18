/* ============================================
   src/components/ui/testimonial-card.tsx
   TESTIMONIAL CARD - RABIKU.COM
   ============================================ */

"use client";

import Image from "next/image";
import { Star } from "lucide-react";

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

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 h-full flex flex-col">
      {/* Image - Full Portrait */}
      <div className="relative aspect-2/3 bg-gray-100 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Box putih mengambang */}
        <div className="absolute bottom-3 left-3 right-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md">
          {/* Name & Stars - Sejajar */}
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              dari {formatCoupleName(couple)}
            </h3>
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
          </div>

          {/* Date */}
          <p className="text-xs text-gray-400 mt-0.5">{date}</p>

          {/* Testimonial Text */}
          <p className="text-xs text-gray-600 leading-relaxed mt-1.5 line-clamp-4">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
