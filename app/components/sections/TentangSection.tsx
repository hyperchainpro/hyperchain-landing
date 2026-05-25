"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  { icon: "01", title: "Integrated", desc: "All products connected in one seamless ecosystem. Data flows between apps without friction." },
  { icon: "02", title: "AI-Powered", desc: "Artificial intelligence embedded in every product for personalized, intelligent experiences." },
  { icon: "03", title: "Secure", desc: "Enterprise-grade security with end-to-end encryption and full regulatory compliance." },
  { icon: "04", title: "Local & Global", desc: "Built for Indonesia, designed for the world. Local understanding, global standards." },
];

export default function TentangSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-32 lg:py-40 bg-black relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,245,255,0.03),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">About Hyperchain</p>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
              <span className="gradient-text-white">ONE</span>
              <br />
              <span className="gradient-text-cyan">ECOSYSTEM</span>
              <br />
              <span className="gradient-text-white">INFINITE</span>
              <br />
              <span className="text-white/20">POSSIBILITIES</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Hyperchain Project is an integrated digital ecosystem connecting every aspect of digital life -- from work productivity and financial management to health and education -- in one cohesive, powerful platform.
            </p>
          </motion.div>

          {/* Right - pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-px"
          >
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="group flex gap-6 p-6 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
              >
                <span className="text-xs text-cyan-400/40 font-mono mt-1 flex-shrink-0">{pillar.icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">{pillar.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}