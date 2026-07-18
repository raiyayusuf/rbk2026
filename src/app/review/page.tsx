/* ============================================
   src/app/review/page.tsx
   REVIEW FORM PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star, ImageUp, X } from "lucide-react";
import Image from "next/image";
import { Datepicker } from "flowbite-react";
import ModalReview from "@/components/ui/modal-review";

/* ============================================
   DATEPICKER THEME (RABIKU PINK)
   ============================================ */
const datepickerTheme = {
  root: { base: "relative" },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inner:
        "inline-block rounded-lg bg-white p-4 shadow-lg border border-gray-200",
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: { base: "p-1" },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-rabiku-pink/50",
        today: "bg-rabiku-pink text-white hover:bg-rabiku-pink-dark",
        clear:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title: "h-6 text-center text-sm font-medium leading-6 text-gray-500",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          selected: "bg-rabiku-pink text-white hover:bg-rabiku-pink-dark",
          disabled: "text-gray-400 cursor-not-allowed",
          today: "",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          selected: "bg-rabiku-pink text-white hover:bg-rabiku-pink-dark",
          disabled: "text-gray-400 cursor-not-allowed",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          selected: "bg-rabiku-pink text-white hover:bg-rabiku-pink-dark",
          disabled: "text-gray-400 cursor-not-allowed",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          selected: "bg-rabiku-pink text-white hover:bg-rabiku-pink-dark",
          disabled: "text-gray-400 cursor-not-allowed",
        },
      },
    },
  },
};

/* ============================================
   LIGHTBOX COMPONENT
   ============================================ */
const Lightbox = ({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState(initialIndex);
  if (!images.length) return null;

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-71 p-2 rounded-full bg-white/20 hover:bg-white/40"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      {images.length > 1 && index > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIndex(index - 1);
          }}
          className="absolute left-4 z-71 p-2 rounded-full bg-white/20 hover:bg-white/40"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      {images.length > 1 && index < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIndex(index + 1);
          }}
          className="absolute right-4 z-71 p-2 rounded-full bg-white/20 hover:bg-white/40"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
      <div
        className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
          <Image
            src={images[index]}
            alt={`Lightbox ${index + 1}`}
            fill
            className="object-contain"
          />
        </div>
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

/* ============================================
   MAIN COMPONENT
   ============================================ */
export default function ReviewPage() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    brideName: "",
    groomName: "",
    weddingDate: "",
    rating: 0,
    testimonial: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [hover, setHover] = useState(0);
  const [error, setError] = useState("");
  const [drag, setDrag] = useState(false);
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);
  const [popup, setPopup] = useState({ show: false, message: "" });
  const [touched, setTouched] = useState({
    brideName: false,
    groomName: false,
    weddingDate: false,
    rating: false,
    testimonial: false,
    image: false,
  });
  const [loading, setLoading] = useState(false);

  const isInvalid = (field: keyof typeof touched) => {
    if (!touched[field]) return false;
    if (field === "brideName") return !form.brideName.trim();
    if (field === "groomName") return !form.groomName.trim();
    if (field === "weddingDate") return !form.weddingDate;
    if (field === "rating") return form.rating === 0;
    if (field === "testimonial") return !form.testimonial.trim();
    if (field === "image") return !file;
    return false;
  };

  const validate = () => {
    const errors = [];
    if (!form.brideName.trim()) errors.push("Nama Pengantin Wanita");
    if (!form.groomName.trim()) errors.push("Nama Pengantin Pria");
    if (!form.weddingDate) errors.push("Tanggal Pernikahan");
    if (form.rating === 0) errors.push("Penilaian Bintang");
    if (!form.testimonial.trim()) errors.push("Testimonial");
    if (!file) errors.push("Foto");
    if (errors.length) {
      setPopup({ show: true, message: `Mohon isi: ${errors.join(", ")}` });
      return false;
    }
    return true;
  };

  const handleBlur = (field: keyof typeof touched) =>
    setTouched((prev) => ({ ...prev, [field]: true }));
  const handleRating = (val: number) => {
    setForm((prev) => ({ ...prev, rating: val }));
    setTouched((prev) => ({ ...prev, rating: true }));
  };

  const handleFile = (f: File) => {
    if (!["image/jpeg", "image/png"].includes(f.type))
      return setError("Hanya JPG/PNG");
    if (f.size > 2 * 1024 * 1024) return setError("Max 2MB");
    setError("");
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setTouched((prev) => ({ ...prev, image: true }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);
    if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const submit = async () => {
    setTouched({
      brideName: true,
      groomName: true,
      weddingDate: true,
      rating: true,
      testimonial: true,
      image: true,
    });
    if (!validate()) return;
    setLoading(true);
    try {
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file as File);
      });
      console.log({ ...form, image: base64 });
      localStorage.setItem(
        "reviewData",
        JSON.stringify({
          brideName: form.brideName,
          groomName: form.groomName,
        }),
      );
      setTimeout(() => router.push("/review/thank-you"), 1000);
    } catch {
      setPopup({ show: true, message: "Terjadi kesalahan. Coba lagi." });
    } finally {
      setLoading(false);
    }
  };

  const stars = () =>
    Array.from({ length: 5 }).map((_, i) => {
      const val = i + 1;
      return (
        <button
          key={i}
          type="button"
          onClick={() => handleRating(val)}
          onMouseEnter={() => setHover(val)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none"
        >
          <Star
            className={`w-8 h-8 transition-all ${val <= (hover || form.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        </button>
      );
    });

  const inputClass = (field: keyof typeof touched) =>
    `w-full px-4 py-3 rounded-xl border-2 transition-colors text-gray-900 placeholder:text-gray-400 focus:outline-none ${
      isInvalid(field)
        ? "border-red-500 focus:border-red-500 bg-red-50/50"
        : "border-gray-300 focus:border-rabiku-blue"
    }`;

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rabiku-blue mb-3">
            Kirim <span className="text-rabiku-pink">Review</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Bagikan pengalaman Anda menggunakan Rabiku. Ceritakan kesan Anda
            tentang website pernikahan digital kami.
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100"
        >
          {/* Row 1: Bride, Groom, Rating */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nama Pengantin Wanita <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.brideName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, brideName: e.target.value }))
                }
                onBlur={() => handleBlur("brideName")}
                placeholder="Contoh: Fitri"
                className={inputClass("brideName")}
              />
              {isInvalid("brideName") && (
                <p className="text-red-500 text-xs mt-1">Wajib diisi</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nama Pengantin Pria <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.groomName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, groomName: e.target.value }))
                }
                onBlur={() => handleBlur("groomName")}
                placeholder="Contoh: Yusuf"
                className={inputClass("groomName")}
              />
              {isInvalid("groomName") && (
                <p className="text-red-500 text-xs mt-1">Wajib diisi</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Penilaian Anda <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-1">{stars()}</div>
              {isInvalid("rating") && (
                <p className="text-red-500 text-xs mt-1">Wajib dipilih</p>
              )}
            </div>
          </div>

          {/* Row 2: Datepicker + Testimonial (Sejajar) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Tanggal Pernikahan <span className="text-red-500">*</span>
              </label>
              <Datepicker
                inline
                value={
                  form.weddingDate ? new Date(form.weddingDate) : new Date()
                }
                onChange={(date: Date | null) => {
                  if (date) {
                    const y = date.getFullYear();
                    const m = String(date.getMonth() + 1).padStart(2, "0");
                    const d = String(date.getDate()).padStart(2, "0");
                    setForm((prev) => ({
                      ...prev,
                      weddingDate: `${y}-${m}-${d}`,
                    }));
                    setTouched((prev) => ({ ...prev, weddingDate: true }));
                  }
                }}
                onBlur={() => handleBlur("weddingDate")}
                theme={datepickerTheme}
                className="w-full [&>div>input]:hidden"
              />
              {form.weddingDate && (
                <p className="text-sm text-gray-500 mt-2">
                  Terpilih:{" "}
                  {new Date(form.weddingDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
              {isInvalid("weddingDate") && (
                <p className="text-red-500 text-xs mt-1">Wajib dipilih</p>
              )}
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="block text-gray-700 font-semibold mb-2">
                Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.testimonial}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, testimonial: e.target.value }))
                }
                onBlur={() => handleBlur("testimonial")}
                placeholder="Ceritakan pengalaman Anda bersama Rabiku..."
                rows={8}
                className={`${inputClass("testimonial")} resize-y min-h-55 flex-1`}
              />
              {isInvalid("testimonial") && (
                <p className="text-red-500 text-xs mt-1">Wajib diisi</p>
              )}
              <div className="text-right text-xs text-gray-400 mt-1">
                {form.testimonial.length} karakter
              </div>
            </div>
          </div>

          {/* Row 3: Upload, Preview, Submit */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 flex flex-col">
              <label className="block text-gray-700 font-semibold mb-2">
                Foto <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-400 mb-3">
                Upload 1 momen kemesraan (max 2MB, JPG/PNG)
              </p>
              <div
                onClick={() => fileRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDrag(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setDrag(false);
                }}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                  drag
                    ? "border-rabiku-blue bg-rabiku-blue/5"
                    : isInvalid("image")
                      ? "border-red-500 bg-red-50/50"
                      : "border-gray-300 hover:border-rabiku-blue"
                }`}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={(e) => {
                    if (e.target.files?.length) handleFile(e.target.files[0]);
                  }}
                  className="hidden"
                />
                <ImageUp
                  className={`w-8 h-8 mx-auto mb-2 ${drag ? "text-rabiku-blue" : "text-gray-400"}`}
                />
                <p className="text-gray-400 text-sm">
                  {drag
                    ? "Lepaskan untuk upload"
                    : "Klik atau drag & drop foto"}
                </p>
              </div>
              {isInvalid("image") && !error && (
                <p className="text-red-500 text-xs mt-1">Wajib diupload</p>
              )}
              {error && (
                <div className="text-red-500 text-sm text-center mt-1">
                  {error}
                </div>
              )}
            </div>

            <div className="flex flex-col items-center md:items-center gap-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Preview Foto
              </label>
              {preview ? (
                <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-gray-100 cursor-pointer group">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    onClick={() => setLightbox({ images: [preview], index: 0 })}
                  />
                  <button
                    type="button"
                    onClick={removeFile}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 z-10"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-sm">
                  Belum ada foto
                </div>
              )}
            </div>

            <div className="flex items-end">
              <button
                onClick={submit}
                disabled={loading}
                className="w-full py-3 bg-rabiku-blue text-white font-semibold rounded-xl hover:bg-rabiku-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Mengirim..." : "Kirim Review"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      {popup.show && (
        <ModalReview
          message={popup.message}
          onClose={() => setPopup({ show: false, message: "" })}
        />
      )}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
