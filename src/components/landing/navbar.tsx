/* ============================================
   src/components/landing/navbar.tsx
   NAVBAR LANDING PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#themes", label: "Tema" },
  { href: "#benefits", label: "Tentang" },
  { href: "#testimonials", label: "Testimonial" },
  { href: "#faq", label: "FAQ" },
];

const NavButton = ({
  children,
  mobile = false,
}: {
  children: React.ReactNode;
  mobile?: boolean;
}) => (
  <button
    className={`
      inline-flex items-center justify-center gap-2.5
      border-2 border-rabiku-blue text-rabiku-blue bg-white
      hover:bg-rabiku-blue hover:text-white hover:border-rabiku-blue
      rounded-xl font-semibold transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-rabiku-blue/50 focus:ring-offset-2
      shadow-md hover:shadow-rabiku-blue/25 cursor-pointer
      ${mobile ? "w-full px-7 py-3.5 text-base min-h-12.5" : "px-7 py-3 text-sm min-h-12 min-w-30"}
    `}
  >
    {children}
  </button>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Lock scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ============================================
  // SCROLL SPY - DETECT ACTIVE SECTION
  // ============================================
  useEffect(() => {
    setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
        (entries) => {
          let hasActiveSection = false;

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              if (id && id !== "hero") {
                setActiveLink(`#${id}`);
                hasActiveSection = true;
              }
            }
          });

          if (!hasActiveSection) {
            setActiveLink("");
          }
        },
        { threshold: 0.1, rootMargin: "-60px 0px -60px 0px" },
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, 100);
  }, []);

  return (
    <>
      {/* Overlay - Blur + Gelap */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navbar - Transparan + Blur */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo/logo-rabiku-text-color.png"
                alt="Rabiku.com"
                width={160}
                height={45}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-10 flex-1">
              {navLinks.map(({ href, label }) => {
                const isActive = activeLink === href && activeLink !== "";
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setActiveLink(href)}
                    className={`
                      relative text-base font-medium transition-all duration-200
                      ${isActive ? "text-rabiku-blue" : "text-gray-400 hover:text-rabiku-blue"}
                    `}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rabiku-blue rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Login */}
            <div className="hidden md:flex items-center shrink-0">
              <Link href="/login">
                <NavButton>
                  <LogIn size={18} className="shrink-0" />
                  <span>Masuk</span>
                </NavButton>
              </Link>
            </div>

            {/* Mobile: Login Icon + Hamburger */}
            <div className="flex items-center gap-1 md:hidden">
              <Link href="/login" className="shrink-0">
                <button
                  className="p-2 text-rabiku-blue hover:text-rabiku-blue-dark transition-colors"
                  aria-label="Login"
                >
                  <LogIn size={24} />
                </button>
              </Link>

              <button
                className="relative p-2 text-rabiku-blue hover:text-rabiku-blue-dark transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Putih solid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -30, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden relative z-50"
            >
              <div className="container-custom py-4 space-y-2.5">
                {navLinks.map(({ href, label }, index) => {
                  const isActive = activeLink === href && activeLink !== "";
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + index * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={href}
                        onClick={() => {
                          setActiveLink(href);
                          setIsOpen(false);
                        }}
                        className={`
                          block text-base font-medium py-2.5 transition-colors
                          ${isActive ? "text-rabiku-blue" : "text-gray-400 hover:text-rabiku-blue"}
                        `}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
