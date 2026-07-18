/* ============================================
   src/constants/faq.ts
   DATA FAQ RABIKU.COM
   ============================================ */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Apa itu Rabiku?",
    answer:
      "Rabiku adalah platform jasa pembuatan website pernikahan digital dengan berbagai tema elegan, galeri foto, musik, dan fitur lengkap untuk mendukung hari spesial Anda.",
  },
  {
    id: 2,
    question: "Berapa harga untuk membuat website pernikahan?",
    answer:
      "Cukup Rp 80.000 untuk 1 tema dengan akses selamanya. Tidak ada biaya perpanjangan atau biaya tersembunyi.",
  },
  {
    id: 3,
    question: "Apakah saya bisa mengedit website sendiri?",
    answer:
      "Tentu! Anda bisa mengedit semua konten website secara langsung melalui dashboard admin yang mudah digunakan, tanpa perlu keahlian coding.",
  },
  {
    id: 4,
    question: "Berapa lama waktu pembuatan website?",
    answer:
      "Website bisa selesai dalam waktu 1-2 jam setelah Anda mengisi data dan memilih tema yang diinginkan. Jika ada permintaan custom, waktu bisa disesuaikan.",
  },
  {
    id: 5,
    question: "Apakah ada pilihan tema yang beragam?",
    answer:
      "Ya, kami menyediakan 32 tema dengan 5 kategori (Islamic, Modern, Minimalis, Mewah, Rustic). Setiap tema bisa disesuaikan dengan warna dan gaya pernikahan Anda.",
  },
  {
    id: 6,
    question: "Apakah website bisa diakses selamanya?",
    answer:
      "Ya! Website yang Anda buat akan aktif selamanya tanpa batas waktu. Cukup bayar sekali, nikmati selamanya.",
  },
  {
    id: 7,
    question: "Bagaimana cara memesan dan proses pembayaran?",
    answer:
      "Anda cukup menghubungi kami via WhatsApp, pilih tema yang diinginkan, lalu lakukan pembayaran melalui QRIS. Kami akan membuatkan akun dan website Anda dalam waktu singkat.",
  },
  {
    id: 8,
    question: "Apakah ada support jika saya kesulitan?",
    answer:
      "Tentu! Kami menyediakan support via WhatsApp untuk membantu Anda mengedit website, mengganti tema, atau jika ada kendala teknis lainnya.",
  },
];
