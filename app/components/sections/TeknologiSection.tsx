"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TECH_STACK = [
  { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "3D & Animasi", items: ["Three.js", "React Three Fiber", "Drei", "GSAP", "ScrollTrigger"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "GraphQL", "REST API", "WebSocket"] },
  { category: "Database", items: ["Neon PostgreSQL", "Redis", "MongoDB", "Prisma ORM", "PgBouncer"] },
  { category: "Infrastructure", items: ["Cloudflare Pages", "Cloudflare CDN", "GitHub Actions", "Docker", "Kubernetes"] },
  { category: "AI/ML", items: ["OpenAI API", "TensorFlow", "Python", "Scikit-learn", "Hugging Face"] },
];

export default function TeknologiSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="teknologi" className="py-24 lg:py-32 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Teknologi
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Stack{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Terdepan
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dibangun dengan teknologi terbaik yang tersedia, dipilih berdasarkan
            performa, skalabilitas, dan developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/10 bg-gray-900/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-violet-500/5"
        >
          <h3 className="text-white font-bold text-xl mb-6 text-center">Arsitektur Sistem</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-sm">
            {[
              { label: "User Browser", icon: "??" },
              { label: "?", icon: "" },
              { label: "Cloudflare CDN", icon: "??" },
              { label: "?", icon: "" },
              { label: "Next.js Static", icon: "?" },
              { label: "?", icon: "" },
              { label: "Edge Functions", icon: "??" },
              { label: "?", icon: "" },
              { label: "Neon DB", icon: "???" },
            ].map((item, i) => (
              <div key={i} className={item.icon ? "flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-300" : "text-cyan-400 font-bold text-lg"}>
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
