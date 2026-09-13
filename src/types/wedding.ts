/* ============================================
   src/types/wedding.ts
   WEDDING TYPE DEFINITIONS - RABIKU.COM
   ============================================ */

export type ThemeCategory =
  | "islamic"
  | "modern"
  | "minimalis"
  | "mewah"
  | "rustic";
export type ThemeColor = "coklat" | "biru" | "pink" | "hijau" | "ungu";

export interface WeddingData {
  slug: string;
  groomName: string;
  brideName: string;
  groomFullName: string;
  brideFullName: string;
  groomParents: string;
  brideParents: string;
  groomInstagram: string;
  brideInstagram: string;
  weddingDate: string;
  weddingTime: string;
  venueName: string;
  venueAddress: string;
  coverImage: string;
  quote: string;
  loveStory: string;
  galleryImages: string[];
  eventSchedule: { time: string; title: string; description: string }[];
  bankAccounts: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
  }[];
  donationLink: string;
  tema: ThemeCategory;
  warna: ThemeColor;
}

/* ============================================
   DUMMY: Elvano & Azelia (Angelicgrace - Pink)
   ============================================ */
export const dummyWedding: WeddingData = {
  slug: "elvano-azelia",
  groomName: "Elvano",
  brideName: "Azelia",
  groomFullName: "Elvano Pratama, S.T.",
  brideFullName: "Azelia Putri, S.Pd.",
  groomParents: "Putra dari Bapak H. Ahmad & Ibu Hj. Siti",
  brideParents: "Putri dari Bapak H. Budi & Ibu Hj. Rina",
  groomInstagram: "elvano",
  brideInstagram: "azelia",
  weddingDate: "2026-12-12",
  weddingTime: "09:00 WIB",
  venueName: "Gedung Serbaguna",
  venueAddress: "Jl. Contoh No. 123, Jakarta",
  coverImage: "/dummy-image/image-dummy-potrait.png",
  quote:
    "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
  loveStory:
    "Kami bertemu di bangku kuliah, tumbuh bersama, dan memutuskan untuk melangkah bersama selamanya.",
  galleryImages: [
    "/themes/angelicgrace/Angelicgrace-1.png",
    "/themes/angelicgrace/Angelicgrace-2.png",
    "/themes/angelicgrace/Angelicgrace-3.png",
  ],
  eventSchedule: [
    {
      time: "08:00 - 10:00",
      title: "Akad Nikah",
      description: "Prosesi sakral pernikahan",
    },
    {
      time: "11:00 - 14:00",
      title: "Resepsi",
      description: "Ramah tamah & makan siang",
    },
  ],
  bankAccounts: [
    {
      bankName: "BCA",
      accountNumber: "1234567890",
      accountHolder: "Elvano Pratama",
    },
  ],
  donationLink: "https://saweria.co/elvanoazelia",
  tema: "islamic",
  warna: "pink",
};

/* ============================================
   DUMMY: Arka & Kirana (Auroraromance - Biru)
   ============================================ */
export const dummyWeddingAurora: WeddingData = {
  slug: "arka-kirana",
  groomName: "Arka",
  brideName: "Kirana",
  groomFullName: "Arka Pradana Putra, S.Kom.",
  brideFullName: "Kirana Maharani, S.E.",
  groomParents: "Putra dari Bapak Pradana Saputra & Ibu Sartini Wulan",
  brideParents: "Putri dari Bapak H. Wijaya & Ibu Hj. Lestari",
  groomInstagram: "arka_pradana",
  brideInstagram: "kirana_mhr",
  weddingDate: "2026-10-18",
  weddingTime: "08:00 WIB",
  venueName: "Masjid Agung Pemalang",
  venueAddress: "Jl. Pemuda No. 45, Pemalang, Jawa Tengah",
  coverImage: "/dummy-image/image-dummy-potrait.png",
  quote:
    "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
  loveStory:
    "Dari pertemuan sederhana, kami belajar tumbuh bersama. Kini kami memilih untuk melangkah ke jenjang yang lebih serius, mengikat janji suci di hadapan Tuhan.",
  galleryImages: [
    "/themes/Auroraromance/Auroraromance-1.png",
    "/themes/Auroraromance/Auroraromance-2.png",
    "/themes/Auroraromance/Auroraromance-3.png",
  ],
  eventSchedule: [
    {
      time: "08:00 - 10:00",
      title: "Akad Nikah",
      description: "Prosesi sakral pernikahan",
    },
    {
      time: "11:00 - 14:00",
      title: "Resepsi",
      description: "Ramah tamah & makan siang",
    },
  ],
  bankAccounts: [
    {
      bankName: "BCA",
      accountNumber: "1234567890",
      accountHolder: "Arka Pradana Putra",
    },
  ],
  donationLink: "https://saweria.co/arkakirana",
  tema: "islamic",
  warna: "biru",
};
