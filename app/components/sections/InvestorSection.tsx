"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INVESTORS = [
  { name: "TechVentures ID", type: "Lead Investor", amount: "$500K", logo: "TV" },
  { name: "Digital Alpha Fund", type: "Strategic Partner", amount: "$250K", logo: "DA" },
  { name: "Nusantara Capital", type: "Angel Investor", amount: "$150K", logo: "NC" },
  { name: "Innovation Hub", type: "Accelerator", amount: "Program", logo: "IH" },
];

const PARTNERS = ["Cloudflare", "Neon Database", "Vercel", "GitHub", "AWS", "Google Cloud"];

export default function InvestorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="investor" className="py-32 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Backed By</p>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
            <span className="gradient-text-white">SUPPORTED BY</span>
            <br />
            <span className="gradient-text-cyan">THE BEST</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-px">
          {INVESTORS.map((inv, i) => (
            <motion.div
              key={inv.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-black p-8 hover:bg-white/[0.02] transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white font-black text-sm mx-auto mb-4 group-hover:border-cyan-500/30 transition-colors">
                {inv.logo}
              </div>
              <div className="text-white font-bold text-sm mb-1">{inv.name}</div>
              <div className="text-gray-600 text-xs mb-3">{inv.type}</div>
              <div className="text-cyan-400 font-bold text-sm">{inv.amount}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-white/5"
        >
          <div className="bg-black p-8">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Technology Partners</p>
            <div className="flex flex-wrap gap-3">
              {PARTNERS.map((p) => (
                <span key={p} className="px-4 py-2 border border-white/5 text-gray-500 text-sm rounded-xl hover:border-white/10 hover:text-gray-300 transition-all cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}