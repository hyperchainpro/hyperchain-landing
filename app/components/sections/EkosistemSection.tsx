"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SECTORS = [
  { id: "01", name: "HyperTask", cat: "Productivity", desc: "AI-powered project management for modern teams", color: "#00f5ff" },
  { id: "02", name: "HyperPay", cat: "Finance", desc: "Integrated digital payments for Indonesian SMEs", color: "#0066ff" },
  { id: "03", name: "HyperLearn", cat: "Education", desc: "Adaptive learning platform with AI curriculum", color: "#7c3aed" },
  { id: "04", name: "HyperHealth", cat: "Healthcare", desc: "Digital health ecosystem connecting patients & doctors", color: "#00f5ff" },
  { id: "05", name: "HyperStore", cat: "E-Commerce", desc: "Marketplace with intelligent logistics integration", color: "#0066ff" },
  { id: "06", name: "HyperConnect", cat: "Networking", desc: "Professional networking for startup ecosystem", color: "#7c3aed" },
  { id: "07", name: "HyperAnalytics", cat: "Data & BI", desc: "Real-time business intelligence & data analytics", color: "#00f5ff" },
  { id: "08", name: "HyperHome", cat: "Property", desc: "Smart property platform with 3D virtual tours", color: "#0066ff" },
];

export default function EkosistemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ekosistem" className="py-32 lg:py-40 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-grid-small opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Ecosystem</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
              <span className="gradient-text-white">8 SECTORS</span>
              <br />
              <span className="gradient-text-cyan">ONE VISION</span>
            </h2>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
              Each product designed to work independently while integrating perfectly with the entire Hyperchain ecosystem.
            </p>
          </div>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group bg-black p-8 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-white/20 font-mono">{sector.id}</span>
                <span className="text-xs text-gray-600 uppercase tracking-wider">{sector.cat}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {sector.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{sector.desc}</p>
              <div className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-full" style={{ background: sector.color }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center gap-3 text-gray-600 text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
          All connected through Hyperchain Core API
        </motion.div>
      </div>
    </section>
  );
}