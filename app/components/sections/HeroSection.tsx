"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Canvas3D = dynamic(() => import("@/components/three/Canvas3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/20 to-violet-950/20" />
  ),
});

const STATS = [
  { value: "12+", label: "Produk Digital" },
  { value: "50K+", label: "Pengguna Target" },
  { value: "8", label: "Sektor Industri" },
  { value: "2025", label: "Tahun Berdiri" },
];

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Background */}
      <Canvas3D className="absolute inset-0 w-full h-full" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Ekosistem Digital Generasi Berikutnya
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6"
        >
          HYPER
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            CHAIN
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 mt-2">
            PROJECT
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Satu ekosistem. Dua belas produk. Tak terbatas kemungkinan.
          Menghubungkan produktivitas, keuangan, kesehatan, dan inovasi
          dalam satu rantai digital yang terintegrasi.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <button
            onClick={() => document.querySelector("#bergabung")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            Bergabung Sekarang
          </button>
          <button
            onClick={() => document.querySelector("#tentang")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full text-lg hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-3xl font-black text-cyan-400">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
