/* ============================================
   tailwind.config.ts
   TAILWIND CONFIG - RABIKU.COM
   ============================================ */

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Color Rabiku
        "rabiku-blue": "#1659A0",
        "rabiku-blue-dark": "#0E3B6C",
        "rabiku-blue-light": "#E8F0F8",

        // Additional Colors
        "rabiku-pink": "#FD6572",
        "rabiku-pink-dark": "#D94452",
        "rabiku-pink-light": "#FFE8EA",

        // Neutral
        "rabiku-text": "#1A1A1A",
        "rabiku-background": "#FFFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
