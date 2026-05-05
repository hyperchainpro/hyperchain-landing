"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INVESTORS = [
  { name: "TechVentures ID", type: "Lead Investor", amount: "$500K", logo: "TV" },
  { name: "Digital Alpha Fund", type: "Strategic Partner", amount: "$250K", logo: "DA" },
  { name: "Nusantara Capital", type: "Angel Investor", amount: "$150K", logo: "NC" },
  { name: "Innovation Hub", type: "Accelerator", amount: "Program", logo: "IH" },
];

const PARTNERS = [
  "Cloudflare", "Neon Database", "Vercel", "GitHub", "AWS", "Google Cloud",
];

export default function InvestorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="investor" className="py-24 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Investor & Partner
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Didukung oleh{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Terbaik
            </span>
          </h2>
        </motion.div>

        {/* Investors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {INVESTORS.map((inv, i) => (
            <motion.div
              key={inv.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/10 bg-gray-900/50 text-center hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-white font-black text-lg mx-auto mb-4">
                {inv.logo}
              </div>
              <h3 className="text-white font-bold mb-1">{inv.name}</h3>
              <p className="text-gray-400 text-xs mb-2">{inv.type}</p>
              <span className="text-cyan-400 font-semibold text-sm">{inv.amount}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-sm hover:border-white/20 hover:text-white transition-all duration-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
