/* ============================================
   src/components/wedding/rsvp-section.tsx
   SECTION 9: BUKU TAMU (RSVP)
   ============================================ */

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, Check } from "lucide-react";

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

export default function RSVPSection() {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    message: "",
  });
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
      {/* Background */}
      <Image
        src="/themes/angelicgrace/Angelicgrace-1.png"
        alt="RSVP Background"
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-white/30" />

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
            KONFIRMASI KEHADIRAN
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Buku Tamu &
          </h2>
          <h2
            className="text-4xl md:text-5xl text-[#D4838F] leading-tight"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            RSVP
          </h2>

          {/* Ornamen Garis */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-4">
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A]" />
            <div className="w-12 h-px bg-[#D4AF7A]/50" />
          </div>

          <p
            className="text-[11px] text-[#5C3A3F]/70 italic max-w-xs mx-auto leading-relaxed"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan anugerah
            terindah bagi kami."
          </p>
        </motion.div>

        {/* Form Box */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 space-y-5"
        >
          {/* Nama Lengkap */}
          <div>
            <label
              className="block text-[10px] tracking-[0.2em] text-[#D4AF7A] font-bold mb-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              NAMA LENGKAP
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Masukkan nama Anda..."
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#F5D5D9] bg-[#FDF8F8] focus:border-[#D4838F] focus:outline-none text-sm text-[#5C3A3F] placeholder:text-[#5C3A3F]/40"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            />
          </div>

          {/* Konfirmasi Kehadiran - CUSTOM DROPDOWN */}
          <div>
            <label
              className="block text-[10px] tracking-[0.2em] text-[#D4AF7A] font-bold mb-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              KONFIRMASI KEHADIRAN
            </label>
            <div className="relative">
              {/* Trigger */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full px-4 py-3.5 rounded-xl border-2 bg-[#FDF8F8] focus:outline-none text-sm text-left transition-all flex items-center justify-between ${
                  isDropdownOpen
                    ? "border-[#D4838F]"
                    : "border-[#F5D5D9] hover:border-[#D4838F]/50"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <span
                  className={
                    selectedLabel ? "text-[#5C3A3F]" : "text-[#5C3A3F]/40"
                  }
                >
                  {selectedLabel || "Apakah Anda akan hadir?"}
                </span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} className="text-[#D4838F]" />
                </motion.div>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#F5D5D9] overflow-hidden z-20"
                  >
                    {attendanceOptions.map((option, index) => {
                      const isSelected = form.attendance === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSelect(option.value)}
                          className={`w-full px-4 py-3.5 text-sm text-left transition-colors flex items-center justify-between gap-2 ${
                            index !== attendanceOptions.length - 1
                              ? "border-b border-[#F5D5D9]/50"
                              : ""
                          } ${
                            isSelected
                              ? "bg-[#FDF0F2] text-[#D4838F] font-semibold"
                              : "text-[#5C3A3F] hover:bg-[#FDF8F8]"
                          }`}
                          style={{
                            fontFamily: "Plus Jakarta Sans, sans-serif",
                          }}
                        >
                          <span>{option.label}</span>
                          {isSelected && (
                            <Check size={16} className="text-[#D4838F]" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Pesan & Doa */}
          <div>
            <label
              className="block text-[10px] tracking-[0.2em] text-[#D4AF7A] font-bold mb-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              PESAN & DOA
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              placeholder="Tuliskan doa untuk kedua mempelai..."
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#F5D5D9] bg-[#FDF8F8] focus:border-[#D4838F] focus:outline-none text-sm text-[#5C3A3F] placeholder:text-[#5C3A3F]/40 resize-none"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            />
          </div>

          {/* Button Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-linear-to-r from-[#F5B5B5] to-[#F5A876] hover:from-[#E89BA5] hover:to-[#E89B76] text-white text-[11px] tracking-[0.25em] font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            <Send size={14} />
            {submitted ? "TERKIRIM!" : "KIRIM UCAPAN"}
          </button>
        </motion.form>

        {/* Section PESAN MASUK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mt-8"
        >
          <h3
            className="text-center text-sm tracking-[0.3em] text-[#D4AF7A] font-bold mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
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
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#FDF0F2] border-2 border-[#D4AF7A]/40 flex items-center justify-center shrink-0">
                    <span
                      className="text-sm font-bold text-[#D4838F]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {msg.name.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className="text-xs font-bold text-[#D4838F] truncate"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
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
                      className="text-[10px] text-[#5C3A3F]/50 mb-1.5"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {msg.date}
                    </p>
                    <p
                      className="text-xs text-[#5C3A3F]/80 italic leading-relaxed"
                      style={{ fontFamily: "Playfair Display, serif" }}
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
