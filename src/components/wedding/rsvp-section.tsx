/* ============================================
   src/components/wedding/rsvp-section.tsx
   SECTION 9: BUKU TAMU (RSVP)
   ============================================ */

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, Check } from "lucide-react";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface RSVPEntry {
  id: number;
  name: string;
  date: string;
  message: string;
  attendance: "hadir" | "tidak hadir";
}

const dummyMessages: RSVPEntry[] = [
  {
    id: 1,
    name: "Rina",
    date: "20 Jul 2026, 08:15",
    message: "Selamat menempuh hidup baru! Semoga sakinah mawaddah warahmah.",
    attendance: "hadir",
  },
  {
    id: 2,
    name: "Budi",
    date: "20 Jul 2026, 09:00",
    message:
      "Barakallahu lakuma. Semoga menjadi keluarga yang bahagia dunia akhirat.",
    attendance: "hadir",
  },
];

const attendanceOptions = [
  { value: "hadir", label: "Ya, Saya Akan Hadir" },
  { value: "tidak hadir", label: "Maaf, Tidak Bisa Hadir" },
];

interface RSVPSectionProps {
  theme: WeddingThemeConfig;
}

export default function RSVPSection({ theme }: RSVPSectionProps) {
  const { colors, assets } = theme;

  const [form, setForm] = useState({ name: "", attendance: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedLabel = attendanceOptions.find(
    (opt) => opt.value === form.attendance,
  )?.label;

  const handleSelect = (value: string) => {
    setForm({ ...form, attendance: value });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", attendance: "", message: "" });
    }, 3000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={assets.bg1}
        alt="RSVP Background"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-white/30" />

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
            KONFIRMASI KEHADIRAN
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            Buku Tamu &
          </h2>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Great Vibes, cursive", color: colors.pink }}
          >
            RSVP
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
            "Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan anugerah
            terindah bagi kami."
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 space-y-5"
        >
          <div>
            <label
              className="block text-[10px] tracking-[0.2em] font-bold mb-2"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: colors.gold,
              }}
            >
              NAMA LENGKAP
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Masukkan nama Anda..."
              className="w-full px-4 py-3.5 rounded-xl border-2 focus:outline-none text-sm"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                borderColor: colors.bg2,
                backgroundColor: colors.bg1,
                color: colors.brown,
              }}
            />
          </div>

          <div>
            <label
              className="block text-[10px] tracking-[0.2em] font-bold mb-2"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: colors.gold,
              }}
            >
              KONFIRMASI KEHADIRAN
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3.5 rounded-xl border-2 focus:outline-none text-sm text-left transition-all flex items-center justify-between"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  borderColor: isDropdownOpen ? colors.pink : colors.bg2,
                  backgroundColor: colors.bg1,
                }}
              >
                <span
                  style={{
                    color: selectedLabel ? colors.brown : `${colors.brown}60`,
                  }}
                >
                  {selectedLabel || "Apakah Anda akan hadir?"}
                </span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} style={{ color: colors.pink }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-20 border"
                    style={{ borderColor: colors.bg2 }}
                  >
                    {attendanceOptions.map((option, index) => {
                      const isSelected = form.attendance === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSelect(option.value)}
                          className="w-full px-4 py-3.5 text-sm text-left transition-colors flex items-center justify-between gap-2 border-b"
                          style={{
                            fontFamily: "Plus Jakarta Sans, sans-serif",
                            borderColor:
                              index !== attendanceOptions.length - 1
                                ? `${colors.bg2}80`
                                : "transparent",
                            backgroundColor: isSelected ? colors.bg1 : "white",
                            color: isSelected ? colors.pink : colors.brown,
                            fontWeight: isSelected ? 600 : 400,
                          }}
                        >
                          <span>{option.label}</span>
                          {isSelected && (
                            <Check size={16} style={{ color: colors.pink }} />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div>
            <label
              className="block text-[10px] tracking-[0.2em] font-bold mb-2"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: colors.gold,
              }}
            >
              PESAN & DOA
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              placeholder="Tuliskan doa untuk kedua mempelai..."
              className="w-full px-4 py-3.5 rounded-xl border-2 focus:outline-none text-sm resize-none"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                borderColor: colors.bg2,
                backgroundColor: colors.bg1,
                color: colors.brown,
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white text-[11px] tracking-[0.25em] font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              background: `linear-gradient(to right, ${colors.pink}, ${colors.border})`,
            }}
          >
            <Send size={14} />
            {submitted ? "TERKIRIM!" : "KIRIM UCAPAN"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mt-8"
        >
          <h3
            className="text-center text-sm tracking-[0.3em] font-bold mb-4"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: colors.gold,
            }}
          >
            PESAN MASUK
          </h3>

          <div className="space-y-3">
            {dummyMessages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-4 border border-white/60"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2"
                    style={{
                      backgroundColor: colors.bg1,
                      borderColor: `${colors.gold}60`,
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        color: colors.pink,
                      }}
                    >
                      {msg.name.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className="text-xs font-bold truncate"
                        style={{
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          color: colors.pink,
                        }}
                      >
                        {msg.name}
                      </h4>
                      <span
                        className={`text-[8px] px-2 py-0.5 rounded-full font-bold tracking-wider shrink-0 ${
                          msg.attendance === "hadir"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {msg.attendance.toUpperCase()}
                      </span>
                    </div>
                    <p
                      className="text-[10px] mb-1.5 opacity-50"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: colors.brown,
                      }}
                    >
                      {msg.date}
                    </p>
                    <p
                      className="text-xs italic leading-relaxed opacity-80"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        color: colors.brown,
                      }}
                    >
                      "{msg.message}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
