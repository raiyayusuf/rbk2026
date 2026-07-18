/* ============================================
   src/components/ui/modal-review.tsx
   MODAL ERROR REVIEW - RABIKU.COM
   ============================================ */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface ModalReviewProps {
  message: string;
  onClose: () => void;
}

export default function ModalReview({ message, onClose }: ModalReviewProps) {
  const formatMessage = (msg: string) => {
    const parts = msg.split(": ");
    if (parts.length === 2) {
      const fieldList = parts[1].split(", ");
      return (
        <>
          {parts[0]}:<br />
          {fieldList.map((field, idx) => (
            <span key={idx}>
              • {field}
              <br />
            </span>
          ))}
        </>
      );
    }
    return msg;
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Perhatian</h3>
          </div>
          <div className="text-gray-600 mb-6">{formatMessage(message)}</div>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-rabiku-blue text-white rounded-xl hover:bg-rabiku-blue-dark transition-colors"
          >
            Mengerti
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
