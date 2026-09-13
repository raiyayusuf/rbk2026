/* ============================================
   src/app/[slug]/page.tsx
   WEDDING PUBLIC PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useState } from "react";
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
import { dummyWedding } from "@/types/wedding";

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const data = dummyWedding;

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
            <CoverPage data={data} onOpen={() => setIsOpen(true)} />
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
            <HeroSection data={data} />
            <QuoteSection data={data} />
            <BrideSection data={data} />
            <GroomSection data={data} />
            <CountdownSection data={data} />
            <ScheduleSection data={data} />
            <GallerySection data={data} />
            <GiftsSection data={data} />
            <RSVPSection />
            <ThanksSection data={data} />
          </WeddingFrame>
        </motion.div>
      )}
    </>
  );
}
