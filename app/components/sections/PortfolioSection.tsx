"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    id: "01", name: "HyperTask", cat: "Productivity", status: "Beta",
    desc: "AI-powered project management platform helping teams work smarter with task automation, deadline prediction, and real-time collaboration.",
    tech: ["Next.js", "AI/ML", "WebSocket", "PostgreSQL"],
    metrics: { users: "2.3K", rating: "4.8", tasks: "45K" },
    color: "#00f5ff",
  },
  {
    id: "02", name: "HyperPay", cat: "Finance", status: "Development",
    desc: "Integrated digital payment solution for Indonesian SMEs. Supports QRIS, bank transfers, and business financial management in one dashboard.",
    tech: ["React Native", "Node.js", "Redis", "Stripe API"],
    metrics: { users: "1.1K", rating: "4.9", tasks: "12K" },
    color: "#0066ff",
  },
  {
    id: "03", name: "HyperLearn", cat: "Education", status: "Alpha",
    desc: "Adaptive e-learning platform that adjusts curriculum to each user's learning style using machine learning and learning analytics.",
    tech: ["Vue.js", "Python", "TensorFlow", "MongoDB"],
    metrics: { users: "890", rating: "4.7", tasks: "8K" },
    color: "#7c3aed",
  },
  {
    id: "04", name: "HyperHealth", cat: "Healthcare", status: "Planning",
    desc: "Digital health ecosystem connecting patients, doctors, and pharmacies. IoT health monitoring, telemedicine, and digital medical records.",
    tech: ["React", "FastAPI", "IoT", "FHIR"],
    metrics: { users: "500+", rating: "4.6", tasks: "3K" },
    color: "#00f5ff",
  },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-32 lg:py-40 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Products</p>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
            <span className="gradient-text-white">FLAGSHIP</span>
            <br />
            <span className="gradient-text-cyan">PRODUCTS</span>
          </h2>
        </motion.div>

        <div className="space-y-px bg-white/5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-black p-8 lg:p-12 hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Left */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs text-white/20 font-mono">{project.id}</span>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">{project.cat}</span>
                    <span className="text-xs px-2 py-0.5 rounded border border-white/10 text-gray-500">{project.status}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300 mb-4">
                    {project.name}
                  </h3>
                  <div className="w-12 h-px transition-all duration-500 group-hover:w-24" style={{ background: project.color }} />
                </div>

                {/* Right */}
                <div className="lg:w-2/3">
                  <p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs text-gray-500 border border-white/5 rounded-lg hover:border-white/10 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-8">
                    <div><div className="text-white font-bold">{project.metrics.users}</div><div className="text-xs text-gray-600 mt-0.5">Users</div></div>
                    <div><div className="text-white font-bold">{project.metrics.rating}</div><div className="text-xs text-gray-600 mt-0.5">Rating</div></div>
                    <div><div className="text-white font-bold">{project.metrics.tasks}</div><div className="text-xs text-gray-600 mt-0.5">Transactions</div></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}