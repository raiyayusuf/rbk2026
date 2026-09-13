/* ============================================
   src/components/wedding/music-player.tsx
   FLOATING MUSIC PLAYER - RABIKU.COM
   ============================================ */

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";
import { WeddingThemeConfig } from "@/constants/wedding-themes";

interface MusicPlayerProps {
  theme: WeddingThemeConfig;
  autoPlay?: boolean;
}

export default function MusicPlayer({
  theme,
  autoPlay = false,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay when cover opened
  useEffect(() => {
    if (!audioRef.current || !theme.song) return;

    if (autoPlay) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser
          setIsPlaying(false);
        });
    }
  }, [autoPlay, theme.song]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!theme.song) return null;

  return (
    <>
      <audio ref={audioRef} src={theme.song.url} loop preload="auto" />

      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
        style={{
          backgroundColor: theme.colors.pink,
          color: "white",
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            duration: 3,
            repeat: isPlaying ? Infinity : 0,
            ease: "linear",
          }}
        >
          {isPlaying ? <Music size={20} /> : <Pause size={20} />}
        </motion.div>
      </motion.button>
    </>
  );
}
