"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { value: 12, suffix: "+", label: "Produk Aktif", color: "text-cyan-400" },
  { value: 50, suffix: "K+", label: "Target Pengguna", color: "text-violet-400" },
  { value: 8, suffix: "", label: "Sektor Industri", color: "text-blue-400" },
  { value: 99, suffix: ".9%", label: "Uptime Target", color: "text-green-400" },
  { value: 330, suffix: "+", label: "Edge Locations", color: "text-orange-400" },
  { value: 100, suffix: "ms", label: "Latensi Target", color: "text-pink-400" },
];

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
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white">
            Angka yang{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Berbicara
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`text-3xl lg:text-4xl font-black ${metric.color} mb-2`}>
                <CountUp target={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-gray-400 text-xs">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
