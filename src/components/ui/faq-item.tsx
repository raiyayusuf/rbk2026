/* ============================================
   src/components/ui/faq-item.tsx
   FAQ ITEM - RABIKU.COM
   ============================================ */

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left transition-colors hover:text-rabiku-blue"
      >
        <span className="text-sm font-medium text-gray-800 pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-gray-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
