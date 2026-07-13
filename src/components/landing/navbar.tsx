/* ============================================
   src/components/landing/navbar.tsx
   NAVBAR LANDING PAGE
   ============================================ */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";

/* ============================================
   NAV LINKS
   ============================================ */
const navLinks = [
  { href: "#themes", label: "Tema" },
  { href: "#about", label: "Tentang" },
  { href: "#testimonials", label: "Testimonial" },
  { href: "#faq", label: "FAQ" },
];

/* ============================================
   NAVBAR COMPONENT
   ============================================ */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rabiku-blue/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-rabiku-blue">💍</span>
            <span className="text-xl font-bold text-rabiku-blue">Rabiku</span>
            <span className="text-xl font-bold text-gray-400">.id</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-rabiku-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-rabiku-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-rabiku-blue/10">
          <div className="container-custom py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-rabiku-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="md" className="w-full">
              Hubungi Kami
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}