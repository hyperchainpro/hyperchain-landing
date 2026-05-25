"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#tentang", label: "About" },
  { href: "#ekosistem", label: "Ecosystem" },
  { href: "#portfolio", label: "Products" },
  { href: "#tim", label: "Team" },
  { href: "#bergabung", label: "Join" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className={`flex items-center justify-between gap-8 px-6 py-3 rounded-2xl border transition-all duration-500 max-w-5xl w-full ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50"
          : "bg-transparent border-transparent"
      }`}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[2px] bg-black rounded-md flex items-center justify-center">
              <span className="text-cyan-400 font-black text-xs">HC</span>
            </div>
          </div>
          <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
            HYPER<span className="text-cyan-400">CHAIN</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNav("#bergabung")}
            className="relative px-5 py-2 text-sm font-semibold text-black bg-white rounded-xl hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#bergabung")}
              className="mt-2 w-full py-3 bg-white text-black font-semibold rounded-xl text-sm hover:bg-cyan-400 transition-all"
            >
              Get Early Access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
