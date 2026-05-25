"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const METRICS = [
  { value: 12, suffix: "+", label: "Active Products", sub: "Across 8 sectors" },
  { value: 50, suffix: "K+", label: "Target Users", sub: "By end of 2025" },
  { value: 99, suffix: ".9%", label: "Uptime Target", sub: "SLA guarantee" },
  { value: 330, suffix: "+", label: "Edge Locations", sub: "Via Cloudflare" },
  { value: 100, suffix: "ms", label: "Latency Target", sub: "Southeast Asia" },
  { value: 8, suffix: "", label: "Industry Sectors", sub: "Covered" },
];

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_50%_at_50%_50%,rgba(0,102,255,0.04),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5"
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-black p-8 text-center hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                <CountUp target={m.value} suffix={m.suffix} />
              </div>
              <div className="text-xs text-gray-400 font-medium mb-1">{m.label}</div>
              <div className="text-xs text-gray-700">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}