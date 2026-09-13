/* ============================================
   src/constants/wedding-themes.tsx
   THEME CONFIG PER WEDDING - RABIKU.COM
   ============================================ */

export interface WeddingThemeConfig {
  slug: string;
  name: string;
  category: "islamic" | "modern" | "minimalis" | "mewah" | "rustic";
  color: "coklat" | "biru" | "pink" | "hijau" | "ungu";
  assets: {
    cover: string;
    bg1: string;
    bg2: string;
    bg3: string;
    bg4?: string;
  };
  colors: {
    gold: string;
    pink: string;
    brown: string;
    border: string;
    bg1: string;
    bg2: string;
  };
  song?: {
    title: string;
    artist: string;
    url: string;
  };
}

/* ============================================
   THEME PRESETS
   ============================================ */

export const weddingThemes: Record<string, WeddingThemeConfig> = {
  // ============================================
  // ANGELICGRACE (Pink)
  // ============================================
  "elvano-azelia": {
    slug: "elvano-azelia",
    name: "Angelicgrace",
    category: "islamic",
    color: "pink",
    assets: {
      cover: "/themes/angelicgrace/Angelicgrace-cover.png",
      bg1: "/themes/angelicgrace/Angelicgrace-1.png",
      bg2: "/themes/angelicgrace/Angelicgrace-2.png",
      bg3: "/themes/angelicgrace/Angelicgrace-3.png",
    },
    colors: {
      gold: "#D4AF7A",
      pink: "#D4838F",
      brown: "#5C3A3F",
      border: "#F5A876",
      bg1: "#FDF8F8",
      bg2: "#FDF0F2",
    },
    song: {
      title: "Perfect",
      artist: "Ed Sheeran",
      url: "https://res.cloudinary.com/ditaequtc/video/upload/v1789316963/Angelicgrace_edvtsx.mp3",
    },
  },

  // ============================================
  // AURORAROMANCE (Biru)
  // ============================================
  "arka-kirana": {
    slug: "arka-kirana",
    name: "Auroraromance",
    category: "islamic",
    color: "biru",
    assets: {
      cover: "/themes/Auroraromance/Auroraromance-cover.png",
      bg1: "/themes/Auroraromance/Auroraromance-1.png",
      bg2: "/themes/Auroraromance/Auroraromance-2.png",
      bg3: "/themes/Auroraromance/Auroraromance-3.png",
      bg4: "/themes/Auroraromance/Auroraromance-4.png",
    },
    colors: {
      gold: "#C9A96B",
      pink: "#C48B9F",
      brown: "#2C3E50",
      border: "#8FA8C8",
      bg1: "#F5F8FC",
      bg2: "#E8EEF5",
    },
    song: {
      title: "A Thousand Years",
      artist: "Christina Perri",
      url: "https://res.cloudinary.com/ditaequtc/video/upload/v1789316965/Auroraromance_bzmldk.mp3",
    },
  },
};

export function getThemeConfig(slug: string): WeddingThemeConfig {
  return weddingThemes[slug] || weddingThemes["elvano-azelia"];
}
