/* ============================================
   src/components/wedding/gifts-section.tsx
   SECTION 8: TANDA KASIH (KADO)
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, Copy } from "lucide-react";
import { WeddingData } from "@/types/wedding";

interface GiftsSectionProps {
  data: WeddingData;
}

export default function GiftsSection({ data }: GiftsSectionProps) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil dicopy!");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/themes/angelicgrace/Angelicgrace-3.png"
        alt="Gifts Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-6"
        >
          <Gift size={32} className="text-[#D4AF7A] mb-2" />
          <p
            className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            TANDA KASIH
          </p>
          <p
            className="text-xs text-[#5C3A3F]/70 mt-2 text-center"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
          </p>
        </motion.div>

        <div className="w-full space-y-3">
          {data.bankAccounts.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-5"
            >
              <p
                className="text-xs tracking-[0.2em] text-[#D4AF7A] font-medium mb-1"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {bank.bankName.toUpperCase()}
              </p>
              <p
                className="text-lg font-bold text-[#5C3A3F] mb-1"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {bank.accountNumber}
              </p>
              <p
                className="text-xs text-[#5C3A3F]/70 mb-3"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                a.n. {bank.accountHolder}
              </p>
              <button
                onClick={() => handleCopy(bank.accountNumber)}
                className="w-full py-2 rounded-full bg-[#D4838F] hover:bg-[#C27380] text-white text-[10px] tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <Copy size={12} />
                COPY NOMOR
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
