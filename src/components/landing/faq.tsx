/* ============================================
   src/components/landing/faq.tsx
   FAQ SECTION - RABIKU.COM
   ============================================ */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { faqs } from "@/constants/faq";
import FAQItem from "@/components/ui/faq-item";

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ============================================
   FAQ SECTION
   ============================================ */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const phoneNumber = "6282227180340";
  const message = "Halo kak, saya mau tanya tentang website pernikahan Rabiku";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Title & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-rabiku-blue leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-gray-500">
              Temukan jawaban atas pertanyaan yang paling sering ditanyakan
              tentang layanan{" "}
              <span className="text-rabiku-pink font-semibold">Rabi</span>
              <span className="text-rabiku-blue font-semibold">ku</span>
            </p>

            {/* CTA - Hubungi Kami (di bawah judul) */}
            <p className="mt-4 text-md text-gray-500 font-semibold">
              Masih memiliki pertanyaan lain?{" "}
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold transition-opacity duration-200 hover:opacity-70"
              >
                <span className="text-rabiku-pink">Hubungi</span>{" "}
                <span className="text-rabiku-blue">Kami</span>
              </Link>
            </p>
          </motion.div>

          {/* Right Side - FAQ List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50/80 rounded-2xl p-4 sm:p-6 border border-gray-100">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
