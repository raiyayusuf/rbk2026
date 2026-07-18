/* ============================================
   next.config.ts
   NEXT.JS CONFIGURATION - RABIKU.COM
   ============================================ */

import type { NextConfig } from "next";

/* ============================================
   IMAGE OPTIMIZATION CONFIGURATION
   ============================================ */
const nextConfig: NextConfig = {
  images: {
    // Device breakpoints for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Additional image sizes for responsive layouts
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
