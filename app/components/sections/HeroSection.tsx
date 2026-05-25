"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Canvas3D = dynamic(() => import("@/components/three/Canvas3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <Canvas3D className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,245,255,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Now in Beta</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <h1 className="font-black leading-[0.9] tracking-tighter mb-6" style={{ fontSize: "clamp(3rem,10vw,9rem)" }}>
            <span className="block text-white">THE DIGITAL</span>
            <span className="block gradient-text-cyan">HYPERCHAIN</span>
            <span className="block text-white/40 font-light tracking-normal mt-4" style={{ fontSize: "clamp(1.5rem,4vw,3.5rem)" }}>ECOSYSTEM</span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          12 integrated products. 8 industry sectors. One chain connecting productivity, finance, health, and innovation.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <button onClick={() => document.querySelector("#bergabung")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 bg-white text-black font-bold rounded-2xl text-base hover:bg-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/30 hover:scale-105">
            Get Early Access
          </button>
          <button onClick={() => document.querySelector("#ekosistem")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 border border-white/15 text-white/70 font-medium rounded-2xl text-base hover:border-white/40 hover:text-white transition-all duration-300 backdrop-blur-sm">
            Explore Ecosystem
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="flex items-center justify-center gap-12 flex-wrap">
          {[
            { value: "12+", label: "Products" },
            { value: "8", label: "Sectors" },
            { value: "50K+", label: "Target Users" },
            { value: "2025", label: "Founded" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}