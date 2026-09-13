/* ============================================
   src/components/landing/footer.tsx
   FOOTER SECTION - RABIKU.COM
   ============================================ */

"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail } from "lucide-react";
import {
  WhatsAppIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "@/components/ui/icons";

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

const whatsappMessage =
  "Halo Admin Rabiku, saya ingin menanyakan lebih lanjut tentang pembuatan website pernikahan digital. Apakah bisa dibantu?";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${footerData.contact.whatsapp}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <footer className="bg-rabiku-blue text-white">
      <div className="container-custom">
        <div className="py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16">
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
                      <WhatsAppIcon size={20} />
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
                      <LinkedInIcon size={20} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${footerData.contact.email}`}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <Mail size={20} />
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
                      <InstagramIcon size={20} />
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
                      <YouTubeIcon size={20} />
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

        <div className="border-t border-white/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            &copy; {currentYear} Rabiku.com | All rights reserved.
          </p>
          <p className="text-sm text-white flex items-center gap-1.5">
            Made with
            <Heart size={14} className="text-white fill-white" />
            by Raiya Yusuf Priatmojo
          </p>
        </div>
      </div>
    </footer>
  );
}
