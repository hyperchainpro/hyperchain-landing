"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#ekosistem", label: "Ekosistem" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#tim", label: "Tim" },
  { href: "#bergabung", label: "Bergabung" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              <div className="absolute inset-1 bg-black rounded-md rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center text-cyan-400 font-bold text-sm">H</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              HYPER<span className="text-cyan-400">CHAIN</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#bergabung")}
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <nav className="px-4 py-6 flex flex-col gap-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-cyan-400 text-base font-medium transition-colors text-left py-2 border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#bergabung")}
                className="mt-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-full"
              >
                Daftar Sekarang
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
