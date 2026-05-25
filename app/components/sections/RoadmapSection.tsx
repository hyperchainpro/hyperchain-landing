"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PHASES = [
  { q: "Q1 2025", title: "Foundation", status: "done", items: ["Project initialization", "Market research & validation", "Core team formation", "System architecture design"] },
  { q: "Q2 2025", title: "Development", status: "done", items: ["HyperTask Beta Launch", "HyperPay development starts", "Landing page & branding", "Seed funding round"] },
  { q: "Q3 2025", title: "Expansion", status: "active", items: ["HyperPay Beta Launch", "HyperLearn Alpha", "Strategic partnerships", "Team expansion to 20"] },
  { q: "Q4 2025", title: "Scale", status: "upcoming", items: ["HyperHealth development", "Series A funding", "Expand to 3 cities", "50K active users"] },
  { q: "Q1 2026", title: "Domination", status: "upcoming", items: ["8 products live", "100K users", "ASEAN regional expansion", "IPO preparation"] },
];

export default function RoadmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roadmap" className="py-32 lg:py-40 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Roadmap</p>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
            <span className="gradient-text-white">THE</span>
            <br />
            <span className="gradient-text-cyan">JOURNEY</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

          <div className="space-y-px bg-white/5">
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase.q}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-black p-8 lg:p-10 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="text-xs text-gray-600 mb-2">{phase.q}</div>
                    <div className="text-white font-bold text-lg">{phase.title}</div>
                    <div className={`mt-3 inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
                      phase.status === "done" ? "border-green-500/20 text-green-400 bg-green-500/5" :
                      phase.status === "active" ? "border-cyan-500/20 text-cyan-400 bg-cyan-500/5" :
                      "border-white/10 text-gray-600"
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${phase.status === "done" ? "bg-green-400" : phase.status === "active" ? "bg-cyan-400 animate-pulse" : "bg-gray-600"}`} />
                      {phase.status === "done" ? "Completed" : phase.status === "active" ? "In Progress" : "Upcoming"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${phase.status === "done" ? "bg-green-400" : phase.status === "active" ? "bg-cyan-400" : "bg-gray-700"}`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}