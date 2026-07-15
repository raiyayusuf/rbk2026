/* ============================================
   src/components/ui/filter-chip.tsx
   FILTER CHIP REUSABLE - RABIKU.COM
   ============================================ */

"use client";

import { cn } from "@/utils";

interface FilterChipProps {
  label: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
  className?: string;
}

export default function FilterChip({
  label,
  value,
  isActive,
  onClick,
  count,
  className,
}: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
        isActive
          ? "bg-rabiku-blue text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200",
        className,
      )}
    >
      {label}
      {count !== undefined && (
        <span
          className={cn(
            "ml-1.5 px-2 py-0.5 text-lg rounded-full",
            isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500",
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
