"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Early Access Terbuka
          </span>

          <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Siap Bergabung dengan{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Masa Depan?
            </span>
          </h2>

          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Jadilah bagian dari 1000 early adopter pertama dan dapatkan akses
            eksklusif ke semua produk Hyperchain sebelum diluncurkan ke publik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.querySelector("#bergabung")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-black rounded-full text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              Daftar Early Access
            </button>
            <button
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 border border-white/30 text-white font-semibold rounded-full text-lg hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300"
            >
              Lihat Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">?</span>
              <span>Gratis untuk early adopter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">?</span>
              <span>Tanpa kartu kredit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">?</span>
              <span>Bisa cancel kapan saja</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
