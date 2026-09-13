/* ============================================
   src/app/[slug]/page.tsx
   WEDDING PUBLIC PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import WeddingFrame from "@/components/wedding/wedding-frame";
import CoverPage from "@/components/wedding/cover-page";
import HeroSection from "@/components/wedding/hero-section";
import QuoteSection from "@/components/wedding/quote-section";
import BrideSection from "@/components/wedding/bride-section";
import GroomSection from "@/components/wedding/groom-section";
import CountdownSection from "@/components/wedding/countdown-section";
import ScheduleSection from "@/components/wedding/schedule-section";
import GallerySection from "@/components/wedding/gallery-section";
import GiftsSection from "@/components/wedding/gifts-section";
import RSVPSection from "@/components/wedding/rsvp-section";
import ThanksSection from "@/components/wedding/thanks-section";
import { dummyWedding, dummyWeddingAurora } from "@/types/wedding";
import { getThemeConfig } from "@/constants/wedding-themes";

const weddingDataMap: Record<string, typeof dummyWedding> = {
  "elvano-azelia": dummyWedding,
  "arka-kirana": dummyWeddingAurora,
};

export default function WeddingPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isOpen, setIsOpen] = useState(false);

  const data = weddingDataMap[slug] || dummyWedding;
  const theme = getThemeConfig(slug);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="cover"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <CoverPage
              data={data}
              theme={theme}
              onOpen={() => setIsOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WeddingFrame>
            <HeroSection data={data} theme={theme} />
            <QuoteSection data={data} theme={theme} />
            <BrideSection data={data} theme={theme} />
            <GroomSection data={data} theme={theme} />
            <CountdownSection data={data} theme={theme} />
            <ScheduleSection data={data} theme={theme} />
            <GallerySection data={data} theme={theme} />
            <GiftsSection data={data} theme={theme} />
            <RSVPSection theme={theme} />
            <ThanksSection data={data} theme={theme} />
          </WeddingFrame>
        </motion.div>
      )}
    </>
  );
}
