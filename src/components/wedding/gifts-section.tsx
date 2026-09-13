/* ============================================
   src/components/wedding/gifts-section.tsx
   SECTION 8: TANDA KASIH (KADO)
   ============================================ */

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, Check, CreditCard, MapPin } from "lucide-react";
import { WeddingData } from "@/types/wedding";

interface GiftsSectionProps {
  data: WeddingData;
}

export default function GiftsSection({ data }: GiftsSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const bank = data.bankAccounts[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(key);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-3.png"
        alt="Gifts Background"
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      {/* Konten */}
      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p
            className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            TANDA KASIH
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Bingkisan Kasih
          </h2>

          {/* Ornamen */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-4">
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
          </div>

          <p
            className="text-[11px] text-[#5C3A3F]/70 italic max-w-xs mx-auto leading-relaxed"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih, dapat
            mengirimkannya melalui rekening atau alamat di bawah ini:
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="w-full space-y-4">
          {/* Bank Account Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 text-center border-t-4 border-[#F5A876]"
          >
            {/* Icon Bulat */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#FDF0F2] flex items-center justify-center border-2 border-[#F5D5D9]">
                <CreditCard size={24} className="text-[#F5A876]" />
              </div>
            </div>

            {/* Nama Bank */}
            <h3
              className="text-xl font-bold text-[#D4838F] mb-2 tracking-wider"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {bank.bankName}
            </h3>

            {/* Nomor Rekening */}
            <p
              className="text-2xl md:text-3xl font-bold text-[#D4838F] mb-2 tracking-wider"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {bank.accountNumber}
            </p>

            {/* Nama Pemilik */}
            <p
              className="text-[10px] tracking-[0.2em] text-[#5C3A3F]/60 font-medium uppercase mb-5"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              A.N. {bank.accountHolder}
            </p>

            {/* Button Salin Rekening */}
            <button
              onClick={() => handleCopy(bank.accountNumber, "bank")}
              className="w-full py-3 rounded-full border-2 border-[#D4838F] text-[#D4838F] hover:bg-[#D4838F] hover:text-white text-[10px] tracking-[0.25em] font-bold transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {copiedIndex === "bank" ? (
                <>
                  <Check size={12} />
                  TERSALIN!
                </>
              ) : (
                <>
                  <Copy size={12} />
                  SALIN REKENING
                </>
              )}
            </button>
          </motion.div>

          {/* Kirim Kado Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 text-center border-t-4 border-[#F5A876]"
          >
            {/* Icon Bulat */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#FDF0F2] flex items-center justify-center border-2 border-[#F5D5D9]">
                <MapPin size={24} className="text-[#F5A876]" />
              </div>
            </div>

            {/* Judul */}
            <h3
              className="text-xl font-bold text-[#D4838F] mb-3 tracking-wider"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              KIRIM KADO
            </h3>

            {/* Info Alamat */}
            <div className="mb-5 space-y-1">
              <p
                className="text-xs text-[#5C3A3F] font-semibold"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Penerima: Kediaman Mempelai Wanita
              </p>
              <p
                className="text-[11px] text-[#5C3A3F]/70 italic leading-relaxed"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {data.venueAddress}
              </p>
            </div>

            {/* Button Salin Alamat */}
            <button
              onClick={() => handleCopy(`${data.venueAddress}`, "address")}
              className="w-full py-3 rounded-full bg-linear-to-r from-[#F5B5B5] to-[#F5A876] hover:from-[#E89BA5] hover:to-[#E89B76] text-white text-[10px] tracking-[0.25em] font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {copiedIndex === "address" ? (
                <>
                  <Check size={12} />
                  TERSALIN!
                </>
              ) : (
                <>
                  <Copy size={12} />
                  SALIN ALAMAT
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
