"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STACK = [
  { cat: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { cat: "3D & Animation", items: ["Three.js", "React Three Fiber", "Drei", "GSAP", "ScrollTrigger"] },
  { cat: "Backend", items: ["Node.js", "FastAPI", "GraphQL", "REST API", "WebSocket"] },
  { cat: "Database", items: ["Neon PostgreSQL", "Redis", "MongoDB", "Prisma ORM", "PgBouncer"] },
  { cat: "Infrastructure", items: ["Cloudflare Pages", "Cloudflare CDN", "GitHub Actions", "Docker", "Kubernetes"] },
  { cat: "AI/ML", items: ["OpenAI API", "TensorFlow", "Python", "Scikit-learn", "Hugging Face"] },
];

export default function TeknologiSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="teknologi" className="py-32 lg:py-40 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-grid-small opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Technology</p>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
            <span className="gradient-text-white">CUTTING-EDGE</span>
            <br />
            <span className="gradient-text-cyan">STACK</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {STACK.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-black p-8 hover:bg-white/[0.02] transition-all duration-300"
            >
              <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-6">{s.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-xs text-gray-500 border border-white/5 rounded-lg hover:border-white/10 hover:text-gray-300 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-px bg-white/5"
        >
          <div className="bg-black p-8 lg:p-12">
            <h3 className="text-xs text-gray-600 uppercase tracking-widest mb-8">System Architecture</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {[
                { label: "Browser", icon: "🌐" },
                { label: "Cloudflare CDN", icon: "☁️" },
                { label: "Next.js Static", icon: "⚡" },
                { label: "Edge Functions", icon: "🔧" },
                { label: "Neon DB", icon: "🗄️" },
              ].map((item, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 border border-white/5 rounded-xl text-gray-400 hover:border-white/10 transition-colors">
                    <span>{item.icon}</span>
                    <span className="text-xs">{item.label}</span>
                  </div>
                  {i < arr.length - 1 && <span className="text-white/10 text-xs">--&gt;</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}