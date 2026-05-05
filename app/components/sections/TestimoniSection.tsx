"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Ahmad Fauzi",
    role: "Founder, TechStartup.id",
    content: "HyperTask mengubah cara tim kami bekerja. Produktivitas naik 40% dalam sebulan pertama. Integrasi dengan tools lain sangat mulus.",
    avatar: "AF",
    gradient: "from-cyan-500 to-blue-600",
    rating: 5,
  },
  {
    name: "Rina Kusuma",
    role: "CEO, UMKM Digital",
    content: "HyperPay adalah solusi yang kami tunggu-tunggu. Akhirnya ada platform yang benar-benar memahami kebutuhan UMKM Indonesia.",
    avatar: "RK",
    gradient: "from-green-500 to-emerald-600",
    rating: 5,
  },
  {
    name: "Dimas Prasetyo",
    role: "Head of Engineering, Fintech Co.",
    content: "Arsitektur Hyperchain sangat solid. Sebagai engineer, saya terkesan dengan kualitas kode dan dokumentasi API mereka.",
    avatar: "DP",
    gradient: "from-violet-500 to-purple-600",
    rating: 5,
  },
  {
    name: "Lestari Wulandari",
    role: "Product Manager, EdTech",
    content: "HyperLearn memiliki pendekatan yang berbeda dari platform e-learning lain. Personalisasi kontennya benar-benar terasa.",
    avatar: "LW",
    gradient: "from-pink-500 to-rose-600",
    rating: 5,
  },
];

export default function TestimoniSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 100%, rgba(124,58,237,0.15) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Testimoni
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Mereka
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="p-8 rounded-2xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">?</span>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
