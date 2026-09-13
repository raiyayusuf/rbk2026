/* ============================================
   src/components/wedding/rsvp-section.tsx
   SECTION 9: BUKU TAMU (RSVP)
   ============================================ */

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function RSVPSection() {
  const [form, setForm] = useState({
    name: "",
    attendance: "hadir",
    totalGuests: 1,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/themes/angelicgrace/Angelicgrace-1.png"
        alt="RSVP Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full max-w-107.5 px-6 py-12 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] text-[#D4AF7A] font-medium mb-6"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          BUKU TAMU
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 space-y-4"
        >
          <div>
            <label
              className="block text-[10px] tracking-[0.2em] text-[#D4AF7A] font-medium mb-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              NAMA
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#D4AF7A]/30 bg-white/70 focus:border-[#D4838F] focus:outline-none text-sm text-[#5C3A3F]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              placeholder="Nama Anda"
            />
          </div>

          <div>
            <label
              className="block text-[10px] tracking-[0.2em] text-[#D4AF7A] font-medium mb-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              KEHADIRAN
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["hadir", "tidak hadir"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setForm({ ...form, attendance: opt })}
                  className={`py-2 rounded-xl text-xs font-medium transition-all ${
                    form.attendance === opt
                      ? "bg-[#D4838F] text-white"
                      : "bg-white/70 text-[#5C3A3F] border border-[#D4AF7A]/30"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {opt.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              className="block text-[10px] tracking-[0.2em] text-[#D4AF7A] font-medium mb-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              JUMLAH TAMU
            </label>
            <input
              type="number"
              min="1"
              value={form.totalGuests}
              onChange={(e) =>
                setForm({ ...form, totalGuests: parseInt(e.target.value) })
              }
              className="w-full px-4 py-3 rounded-xl border border-[#D4AF7A]/30 bg-white/70 focus:border-[#D4838F] focus:outline-none text-sm text-[#5C3A3F]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            />
          </div>

          <div>
            <label
              className="block text-[10px] tracking-[0.2em] text-[#D4AF7A] font-medium mb-2"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              PESAN
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-[#D4AF7A]/30 bg-white/70 focus:border-[#D4838F] focus:outline-none text-sm text-[#5C3A3F] resize-none"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              placeholder="Ucapan & doa..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#D4838F] hover:bg-[#C27380] text-white text-[10px] tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            <Send size={12} />
            {submitted ? "TERKIRIM!" : "KIRIM UCAPAN"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
