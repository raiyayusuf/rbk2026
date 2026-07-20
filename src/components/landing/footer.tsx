/* ============================================
   src/components/landing/footer.tsx
   FOOTER SECTION - RABIKU.COM
   ============================================ */

"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail } from "lucide-react";

/* ============================================
   ICON KOMPONEN (SVG)
   ============================================ */
const WhatsAppIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);

/* ============================================
   FOOTER DATA
   ============================================ */
const footerData = {
  brand: {
    name: "Rabiku.com",
    description:
      "Platform pembuatan undangan pernikahan digital premium. Kami membantu Anda menyebarkan kabar bahagia dengan cara yang lebih elegan, cepat, dan modern.",
  },
  links: [
    { label: "Tema", href: "#themes" },
    { label: "Tentang", href: "#benefits" },
    { label: "Testimonial", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  contact: {
    whatsapp: "082227180340",
    email: "raiyayusuf.p@gmail.com",
  },
  social: {
    instagram: "raiyaysf_",
    youtube: "#",
    tiktok: "#",
    linkedin: "raiya-yusuf-priatmojo",
  },
};

/* ============================================
   WHATSAPP AUTO MESSAGE
   ============================================ */
const whatsappMessage =
  "Halo Admin Rabiku, saya ingin menanyakan lebih lanjut tentang pembuatan website pernikahan digital. Apakah bisa dibantu?";

/* ============================================
   FOOTER COMPONENT
   ============================================ */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${footerData.contact.whatsapp}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <footer className="bg-rabiku-blue text-white">
      <div className="container-custom">
        {/* Top Section - Brand Left, Links Right */}
        <div className="py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Brand Column - Kiri */}
          <div className="lg:w-5/12">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/logo-rabiku-text-white.png"
                alt="Rabiku.com"
                width={160}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              {footerData.brand.description}
            </p>
          </div>

          {/* Right Columns - 3 kolom, di desktop pake lg:ml-auto biar ke kanan */}
          <div className="lg:w-7/12 lg:ml-auto">
            <div className="grid grid-cols-3 gap-4 w-full lg:flex lg:justify-end lg:gap-8 md:gap-12">
              {/* Tautan */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Tautan
                </h3>
                <ul className="space-y-2.5">
                  {footerData.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kontak */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Kontak
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.linkedin.com/in/${footerData.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <LinkedInIcon />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${footerData.contact.email}`}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <Mail size={22} />
                      <span>Email</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sosial Media */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Sosial Media
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href={`https://instagram.com/${footerData.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <InstagramIcon />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={footerData.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <YouTubeIcon />
                      <span>YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={footerData.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <Image
                        src="/logo/tiktok/tiktok-svgrepo-com.svg"
                        alt="TikTok"
                        width={20}
                        height={20}
                        className="h-5 w-5 opacity-70 brightness-0 invert"
                      />
                      <span>TikTok</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            &copy; {currentYear} Rabiku.com | All rights reserved.
          </p>
          <p className="text-xs text-white flex items-center gap-1.5">
            Made with
            <Heart size={14} className="text-white fill-white" />
            by Raiya Yusuf Priatmojo
          </p>
        </div>
      </div>
    </footer>
  );
}
