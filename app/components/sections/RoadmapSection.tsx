"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ROADMAP = [
  {
    quarter: "Q1 2025",
    title: "Fondasi",
    status: "completed",
    items: ["Inisialisasi Hyperchain Project", "Riset pasar & validasi ide", "Pembentukan tim inti", "Arsitektur sistem dirancang"],
  },
  {
    quarter: "Q2 2025",
    title: "Pengembangan",
    status: "completed",
    items: ["HyperTask Beta Launch", "HyperPay Development dimulai", "Landing page & branding", "Seed funding round"],
  },
  {
    quarter: "Q3 2025",
    title: "Ekspansi",
    status: "active",
    items: ["HyperPay Beta Launch", "HyperLearn Alpha", "Partnership strategis", "Ekspansi tim ke 20 orang"],
  },
  {
    quarter: "Q4 2025",
    title: "Skalabilitas",
    status: "upcoming",
    items: ["HyperHealth Development", "Series A funding", "Ekspansi ke 3 kota", "50K pengguna aktif"],
  },
  {
    quarter: "Q1 2026",
    title: "Dominasi",
    status: "upcoming",
    items: ["8 produk live", "100K pengguna", "Ekspansi regional ASEAN", "IPO preparation"],
  },
];

export default function RoadmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Roadmap
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Perjalanan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Hyperchain
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {ROADMAP.map((phase, i) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`flex gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <div className="flex-1 p-6 rounded-2xl border border-white/10 bg-gray-900/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    phase.status === "completed"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : phase.status === "active"
                      ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30 animate-pulse"
                      : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                  }`}>
                    {phase.status === "completed" ? "? Selesai" : phase.status === "active" ? "? Aktif" : "? Mendatang"}
                  </span>
                  <span className="text-gray-400 text-sm">{phase.quarter}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        phase.status === "completed" ? "bg-green-400" :
                        phase.status === "active" ? "bg-cyan-400" : "bg-gray-600"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  phase.status === "completed"
                    ? "bg-green-400 border-green-400"
                    : phase.status === "active"
                    ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                    : "bg-gray-800 border-gray-600"
                }`} />
              </div>
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
