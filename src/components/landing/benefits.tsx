/* ============================================
   src/components/landing/benefits.tsx
   BENEFITS SECTION - RABIKU.COM
   ============================================ */

"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Images,
  MessageSquareHeart,
  Music,
  CalendarClock,
  UsersRound,
  WalletMinimal,
  MapPinHouse,
  Smartphone,
  PencilSparkles,
} from "lucide-react";

/* ============================================
   BENEFITS DATA 
   ============================================ */
const benefits = [
  {
    icon: Palette,
    title: "Tema Eksklusif",
    description:
      "Pilih dari 5 tema warna elegan yang bisa disesuaikan dengan gaya pernikahanmu.",
  },
  {
    icon: Images,
    title: "Gallery Foto",
    description:
      "Share momen indahmu dengan pasangan melalui slideshow yang keren dan elegan.",
  },
  {
    icon: MessageSquareHeart,
    title: "Story Cinta",
    description:
      "Ceritakan perjalanan cinta kalian dengan timeline interaktif yang romantis dan berkesan.",
  },
  {
    icon: Music,
    title: "Musik Pengiring",
    description:
      "Tambahkan lagu favoritmu untuk menemani tamu saat membuka undangan digital.",
  },
  {
    icon: CalendarClock,
    title: "Hitungan Mundur",
    description:
      "Jangan sampai terlewatkan momen indahmu, hitung mundur tanggal acara pernikahanmu.",
  },
  {
    icon: UsersRound,
    title: "Bagikan dengan Nama Tamu",
    description:
      "Buat link undangan dengan nama tamu agar lebih eksklusif dan personal.",
  },
  {
    icon: WalletMinimal,
    title: "Amplop Digital",
    description:
      "Tamu undangan bisa mengirim amplop secara digital dengan mudah dan praktis.",
  },
  {
    icon: MapPinHouse,
    title: "Navigasi Lokasi",
    description:
      "All in one navigasi lengkap, agar para tamu tidak tersesat saat ke tempatmu.",
  },
  {
    icon: Smartphone,
    title: "Responsive Mobile",
    description:
      "Tampilan website yang indah di semua perangkat, dari HP hingga desktop.",
  },
  {
    icon: PencilSparkles,
    title: "Mudah Diedit",
    description:
      "Kustomisasi konten dengan mudah kapan saja, tanpa perlu keahlian coding.",
  },
];

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemCard = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ============================================
   BENEFITS SECTION
   ============================================ */
export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-rabiku-pink/10" id="benefits">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Saatnya Rayakan Cinta dengan{" "}
            <span className="text-rabiku-pink">Rabi</span>
            <span className="text-rabiku-blue">ku</span>
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Setiap detail undangan dirancang untuk momen bahagiamu
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemCard}
                className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex items-start gap-4 sm:flex-col sm:items-center sm:text-center"
              >
                {/* Icon - Kiri di mobile, atas di desktop */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rabiku-pink/10 text-rabiku-pink group-hover:bg-rabiku-pink group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon size={28} className="md:size-10" />
                </div>

                {/* Content */}
                <div className="flex-1 sm:text-center">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
