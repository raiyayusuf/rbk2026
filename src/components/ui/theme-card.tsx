/* ============================================
   src/components/ui/theme-card.tsx
   THEME CARD - RABIKU.COM
   ============================================ */

"use client";

import Image from "next/image";
import { Eye, ShoppingCart, Share2 } from "lucide-react";
import Button from "./button";

interface ThemeCardProps {
  title: string;
  price: string;
  image: string;
  tema: string;
  warna: string;
  onView?: () => void;
  onOrder?: () => void;
  onShare?: () => void;
}

export default function ThemeCard({
  title,
  price,
  image,
  tema,
  warna,
  onView,
  onOrder,
  onShare,
}: ThemeCardProps) {
  const getTemaLabel = (tema: string) => {
    const map: Record<string, string> = {
      islamic: "Islamic",
      modern: "Modern",
      minimalis: "Minimalis",
      mewah: "Mewah",
      rustic: "Rustic",
    };
    return map[tema] || tema;
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-7/8 bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge Tema */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-black/40 backdrop-blur-sm text-xs font-medium text-white rounded-full">
          {getTemaLabel(tema)}
        </span>
        {/* Badge Warna */}
        <span className="absolute top-3 right-3 px-3 py-1 bg-black/40 backdrop-blur-sm text-xs font-medium text-white rounded-full">
          {warna}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title + Share Icon (Mobile) */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm sm:text-lg font-bold text-gray-900 truncate flex-1">
            {title}
          </h3>
          {/* Share Icon - Muncul di mobile aja */}
          <button
            onClick={onShare}
            className="sm:hidden shrink-0 mt-1 text-gray-400 hover:text-rabiku-pink transition-colors"
            aria-label="Share"
          >
            <Share2 size={18} />
          </button>
        </div>

        <p className="text-base font-semibold text-rabiku-pink">{price}</p>

        {/* Actions - Desktop: 3 button, Mobile: 2 button */}
        <div className="flex items-center gap-1.5 sm:gap-2 pt-2 border-t border-gray-100">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-[10px] sm:text-xs gap-1 px-1.5 sm:px-3 py-1 sm:py-2 h-auto min-h-0"
            onClick={onView}
          >
            <Eye size={12} className="sm:size-4" />
            <span>Detail</span>
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="flex-1 text-[10px] sm:text-xs gap-1 px-1.5 sm:px-3 py-1 sm:py-2 h-auto min-h-0"
            onClick={onOrder}
          >
            <ShoppingCart size={12} className="sm:size-4" />
            <span>Pesan</span>
          </Button>
          {/* Share Button - Muncul di desktop aja */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex px-1.5 sm:px-3 py-1 sm:py-2 h-auto min-h-0"
            onClick={onShare}
          >
            <Share2 size={12} className="sm:size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
