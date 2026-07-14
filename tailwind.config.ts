/* ============================================
   tailwind.config.ts
   TAILWIND CONFIG - RABIKU.ID
   ============================================ */

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Color Rabiku
        "rabiku-blue": "#1659A0",
        "rabiku-blue-dark": "#0E3B6C",
        "rabiku-blue-light": "#E8F0F8",
        
        // Neutral
        "rabiku-text": "#1A1A1A",
        "rabiku-background": "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;