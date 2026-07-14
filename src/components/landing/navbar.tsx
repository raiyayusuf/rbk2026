/* ============================================
   src/components/landing/navbar.tsx
   NAVBAR LANDING PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogIn } from "lucide-react";

const navLinks = [
  { href: "#themes", label: "Tema" },
  { href: "#about", label: "Tentang" },
  { href: "#testimonials", label: "Testimonial" },
  { href: "#faq", label: "FAQ" },
];

const NavButton = ({ children, mobile = false }: { children: React.ReactNode; mobile?: boolean }) => (
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
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
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-rabiku-blue/70 hover:text-rabiku-blue transition-colors font-medium text-base">
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex items-center shrink-0">
            <Link href="/login">
              <NavButton>
                <LogIn size={18} className="shrink-0" />
                <span>Login</span>
              </NavButton>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-rabiku-blue hover:text-rabiku-blue-dark transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-custom py-4 space-y-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-rabiku-blue/70 hover:text-rabiku-blue transition-colors font-medium text-base py-2.5"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <NavButton mobile>
                <LogIn size={20} className="shrink-0" />
                <span>Login</span>
              </NavButton>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}