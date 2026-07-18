/* ============================================
   src/app/review/thank-you/page.tsx
   THANK YOU PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Home, Heart, Sparkles } from "lucide-react";

export default function ThankYouPage() {
  const router = useRouter();
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");

  useEffect(() => {
    const reviewData = localStorage.getItem("reviewData");
    if (reviewData) {
      try {
        const data = JSON.parse(reviewData);
        setBrideName(data.brideName || "");
        setGroomName(data.groomName || "");
        localStorage.removeItem("reviewData");
      } catch (e) {
        console.error("Error parsing review data:", e);
      }
    }
  }, []);

  const hasBothNames = brideName && groomName;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Terima kasih banyak,{" "}
            {hasBothNames ? (
              <>
                <span className="text-rabiku-pink">{brideName}</span>
                <span className="text-gray-900"> &amp; </span>
                <span className="text-rabiku-blue">{groomName}</span>
              </>
            ) : (
              <span className="text-rabiku-pink">
                {brideName || "Pasangan Bahagia"}
              </span>
            )}
            !
          </h1>

          <p className="text-gray-500 leading-relaxed mb-4">
            Senang sekali mendengar pengalaman Anda berdua bersama Rabiku.
            <br />
            Review Anda akan menjadi inspirasi bagi banyak pasangan yang ingin
            membuat website pernikahan digital.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4 font-medium">
            <span className="inline-flex items-center gap-2">
              <Heart className="w-5 h-5 text-rabiku-pink fill-rabiku-pink inline" />
              Selamat atas pernikahan kalian!
              <Heart className="w-5 h-5 text-rabiku-pink fill-rabiku-pink inline" />
            </span>
            <br />
            Semoga perjalanan cinta kalian selalu dipenuhi kebahagiaan,
            <br />
            keberkahan, dan kasih sayang yang abadi.
            <br />
            <span className="inline-flex items-center gap-2">
              {/* <Sparkles className="w-5 h-5 text-rabiku-blue inline" /> */}
              Bahagia selalu untuk kalian berdua!
              {/* <Sparkles className="w-5 h-5 text-rabiku-blue inline" /> */}
            </span>
          </p>

          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-rabiku-blue text-white font-semibold rounded-xl hover:bg-rabiku-blue-dark transition-colors duration-300"
          >
            {/* <Home className="w-5 h-5" /> */}
            Kembali ke Beranda
          </button>
        </motion.div>
      </div>
    </div>
  );
}
