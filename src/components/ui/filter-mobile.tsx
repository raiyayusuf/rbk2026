/* ============================================
   src/components/ui/filter-mobile.tsx
   FILTER MOBILE - RABIKU.COM
   ============================================ */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";

interface FilterMobileProps {
  temaOptions: { label: string; value: string }[];
  warnaOptions: { label: string; value: string }[];
  activeTema: string;
  activeWarna: string;
  onTemaChange: (value: string) => void;
  onWarnaChange: (value: string) => void;
  onApply: () => void;
  onCancel: () => void;
  getTemaCount?: (value: string) => number;
}

export default function FilterMobile({
  temaOptions,
  warnaOptions,
  activeTema,
  activeWarna,
  onTemaChange,
  onWarnaChange,
  onApply,
  onCancel,
  getTemaCount,
}: FilterMobileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempTema, setTempTema] = useState(activeTema);
  const [tempWarna, setTempWarna] = useState(activeWarna);

  useEffect(() => {
    if (isOpen) {
      setTempTema(activeTema);
      setTempWarna(activeWarna);
    }
  }, [isOpen, activeTema, activeWarna]);

  const handleApply = () => {
    onTemaChange(tempTema);
    onWarnaChange(tempWarna);
    onApply();
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempTema(activeTema);
    setTempWarna(activeWarna);
    onCancel();
    setIsOpen(false);
  };

  const selectedTemaLabel =
    temaOptions.find((t) => t.value === tempTema)?.label || "Semua Tema";
  const selectedWarnaLabel =
    warnaOptions.find((w) => w.value === tempWarna)?.label || "Semua Warna";

  return (
    <>
      {/* Filter Trigger - 1 Box dengan 3 kolom seimbang */}
      <div className="relative w-full md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-rabiku-blue/50 transition-colors"
        >
          <span className="flex-1 text-center truncate">
            {selectedTemaLabel}
          </span>
          <span className="text-gray-300 mx-1">|</span>
          <span className="flex-1 text-center truncate">
            {selectedWarnaLabel}
          </span>
          <div className="shrink-0 ml-2">
            <ChevronDown
              size={18}
              className={cn(
                "transition-transform duration-300",
                isOpen && "rotate-180",
              )}
            />
          </div>
        </button>

        {/* Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 z-50 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                {/* Tema Section */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Tema
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {temaOptions.map((option) => {
                      const isActive = tempTema === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() => setTempTema(option.value)}
                          className={cn(
                            "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                            isActive
                              ? "bg-rabiku-blue text-white shadow-md"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                          )}
                        >
                          {option.label}
                          {getTemaCount && (
                            <span
                              className={cn(
                                "ml-1.5 px-2 py-0.5 text-xs rounded-xl",
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-gray-200 text-gray-500",
                              )}
                            >
                              {getTemaCount(option.value)}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Warna Section */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Warna
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {warnaOptions.map((option) => {
                      const isActive = tempWarna === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() => setTempWarna(option.value)}
                          className={cn(
                            "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                            isActive
                              ? "bg-rabiku-blue text-white shadow-md"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                          )}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2 border-t border-gray-100">
                  <button
                    onClick={handleCancel}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleApply}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-rabiku-blue hover:bg-rabiku-blue-dark rounded-xl transition-colors"
                  >
                    Terapkan
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay Blur */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm -top-16"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
