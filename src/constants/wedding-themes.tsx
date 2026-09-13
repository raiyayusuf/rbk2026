/* ============================================
   src/constants/wedding-themes.ts
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
      gold: "#C9A96B", // Gold soft
      pink: "#C48B9F", // Pink dusty (dari bunga)
      brown: "#2C3E50", // Navy tua (teks)
      border: "#8FA8C8", // Biru soft (border)
      bg1: "#F5F8FC", // Biru sangat muda (input bg)
      bg2: "#E8EEF5", // Biru soft (highlight)
    },
  },
};

export function getThemeConfig(slug: string): WeddingThemeConfig {
  return weddingThemes[slug] || weddingThemes["elvano-azelia"];
}
