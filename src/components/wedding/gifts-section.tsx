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
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface GiftsSectionProps {
  data: WeddingData;
  theme: WeddingThemeConfig;
}

export default function GiftsSection({ data, theme }: GiftsSectionProps) {
  const { colors, assets } = theme;
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const bank = data.bankAccounts[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(key);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg3}
        alt="Gifts Background"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/20" />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p
            className="text-[10px] tracking-[0.4em] font-medium mb-2"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.gold,
            }}
          >
            TANDA KASIH
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            Bingkisan Kasih
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3 mb-4">
            <div
              className="w-12 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.gold }}
            />
            <div
              className="w-12 h-px"
              style={{ backgroundColor: `${colors.gold}80` }}
            />
          </div>

          <p
            className="text-[11px] italic max-w-xs mx-auto leading-relaxed opacity-70"
            style={{
              fontFamily: "Playfair Display, serif",
              color: colors.brown,
            }}
          >
            Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih, dapat
            mengirimkannya melalui rekening atau alamat di bawah ini:
          </p>
        </motion.div>

        <div className="w-full space-y-4">
          {/* Bank Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 text-center border-t-4"
            style={{ borderTopColor: colors.border }}
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center border-2"
                style={{ backgroundColor: colors.bg1, borderColor: colors.bg2 }}
              >
                <CreditCard size={24} style={{ color: colors.border }} />
              </div>
            </div>

            <h3
              className="text-xl font-bold mb-2 tracking-wider"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: colors.pink,
              }}
            >
              {bank.bankName}
            </h3>

            <p
              className="text-2xl md:text-3xl font-bold mb-2 tracking-wider"
              style={{
                fontFamily: "Playfair Display, serif",
                color: colors.pink,
              }}
            >
              {bank.accountNumber}
            </p>

            <p
              className="text-[10px] tracking-[0.2em] font-medium uppercase mb-5 opacity-60"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: colors.brown,
              }}
            >
              A.N. {bank.accountHolder}
            </p>

            <button
              onClick={() => handleCopy(bank.accountNumber, "bank")}
              className="w-full py-3 rounded-full border-2 text-[10px] tracking-[0.25em] font-bold transition-all flex items-center justify-center gap-2"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                borderColor: colors.pink,
                color: colors.pink,
              }}
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
            className="relative w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 text-center border-t-4"
            style={{ borderTopColor: colors.border }}
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center border-2"
                style={{ backgroundColor: colors.bg1, borderColor: colors.bg2 }}
              >
                <MapPin size={24} style={{ color: colors.border }} />
              </div>
            </div>

            <h3
              className="text-xl font-bold mb-3 tracking-wider"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: colors.pink,
              }}
            >
              KIRIM KADO
            </h3>

            <div className="mb-5 space-y-1">
              <p
                className="text-xs font-semibold"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: colors.brown,
                }}
              >
                Penerima: Kediaman Mempelai Wanita
              </p>
              <p
                className="text-[11px] italic leading-relaxed opacity-70"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: colors.brown,
                }}
              >
                {data.venueAddress}
              </p>
            </div>

            <button
              onClick={() => handleCopy(`${data.venueAddress}`, "address")}
              className="w-full py-3 rounded-full text-white text-[10px] tracking-[0.25em] font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                background: `linear-gradient(to right, ${colors.pink}, ${colors.border})`,
              }}
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
