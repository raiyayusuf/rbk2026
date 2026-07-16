/* ============================================
   src/components/ui/whatsapp-button.tsx
   WHATSAPP FLOATING BUTTON - RABIKU.COM
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ============================================
   WHATSAPP FLOATING BUTTON
   ============================================ */
export default function WhatsAppButton() {
  const phoneNumber = "6282227180340"; // Ganti dengan nomor WhatsApp lo
  const message = "Halo kak, saya tertarik bikin website pernikahan. Bisa konsultasi dulu? Terima kasih!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      style={{ backgroundColor: "#53B982" }}
      aria-label="Hubungi via WhatsApp"
    >
      <Image
        src="/logo/whatsapp/logo-whatsapp2.png"
        alt="WhatsApp"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
    </motion.a>
  );
}