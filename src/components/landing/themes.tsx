/* ============================================
   src/components/landing/themes.tsx
   THEMES SECTION LANDING PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themes, temaFilters, warnaOptions } from "@/constants/themes";
import ThemeCard from "@/components/ui/theme-card";
import Dropdown from "@/components/ui/dropdown";
import FilterMobile from "@/components/ui/filter-mobile";

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ============================================
   THEMES SECTION
   ============================================ */
export default function Themes() {
  const [activeTema, setActiveTema] = useState("all");
  const [activeWarna, setActiveWarna] = useState("all");

  const filteredThemes = themes.filter((theme) => {
    const matchTema = activeTema === "all" || theme.tema === activeTema;
    const matchWarna = activeWarna === "all" || theme.warna === activeWarna;
    return matchTema && matchWarna;
  });

  const getTemaCount = (temaValue: string) => {
    if (temaValue === "all") return themes.length;
    return themes.filter((t) => t.tema === temaValue).length;
  };

  return (
    <section className="section-padding bg-white" id="themes">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Temukan Desain yang Menceritakan{" "}
            <span className="text-rabiku-blue">Kisah</span>{" "}
            <span className="text-rabiku-pink">Cintamu</span>
          </h2>
          <p className="mt-4 text-md text-gray-500 max-w-2xl mx-auto">
            Setiap pasangan punya cerita unik. Pilih tema yang paling mewakili
            perjalanan cinta kalian.
          </p>
        </motion.div>

        {/* Filter Container - Desktop (STICKY) */}
        <div className="hidden md:block sticky top-22 z-30 -mx-4 px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-50/90 rounded-2xl border border-gray-100">
            {temaFilters.map((filter) => {
              const isActive = activeTema === filter.value;
              return (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveTema(filter.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-white text-rabiku-blue shadow-md ring-2 ring-rabiku-blue/20"
                        : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                    }
                  `}
                >
                  {filter.label}
                  <span
                    className={`
                      ml-1.5 px-2 py-0.5 text-xs rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "bg-rabiku-blue/10 text-rabiku-blue"
                          : "bg-gray-200 text-gray-400"
                      }
                    `}
                  >
                    {getTemaCount(filter.value)}
                  </span>
                </motion.button>
              );
            })}

            <Dropdown
              label="Semua Warna"
              options={warnaOptions}
              value={activeWarna}
              onChange={setActiveWarna}
            />
          </div>
        </div>

        {/* Spacer biar konten ga ketutupan filter */}
        <div className="hidden md:block h-4" />

        {/* Filter - Mobile (Sticky) */}
        <div className="md:hidden sticky top-16 z-30 pt-2 pb-3 -mx-4 px-4">
          <FilterMobile
            temaOptions={temaFilters}
            warnaOptions={warnaOptions}
            activeTema={activeTema}
            activeWarna={activeWarna}
            onTemaChange={setActiveTema}
            onWarnaChange={setActiveWarna}
            onApply={() => {}}
            onCancel={() => {}}
            getTemaCount={getTemaCount}
          />
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTema}-${activeWarna}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <ThemeCard
                  title={theme.title}
                  price={theme.price}
                  image={theme.image}
                  tema={theme.tema}
                  warna={theme.warna}
                  onView={() => console.log(`View ${theme.title}`)}
                  onOrder={() => console.log(`Order ${theme.title}`)}
                  onShare={() => console.log(`Share ${theme.title}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredThemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada tema untuk filter ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
