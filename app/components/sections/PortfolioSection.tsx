"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    name: "HyperTask",
    category: "Produktivitas",
    status: "Beta",
    statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
    desc: "Platform manajemen proyek berbasis AI yang membantu tim bekerja lebih cerdas dengan otomatisasi tugas, prediksi deadline, dan kolaborasi real-time.",
    tech: ["Next.js", "AI/ML", "WebSocket", "PostgreSQL"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    metrics: { users: "2.3K", rating: "4.8", tasks: "45K" },
  },
  {
    id: 2,
    name: "HyperPay",
    category: "Keuangan",
    status: "Development",
    statusColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    desc: "Solusi pembayaran digital terintegrasi untuk UMKM Indonesia. Mendukung QRIS, transfer bank, dan manajemen keuangan bisnis dalam satu dashboard.",
    tech: ["React Native", "Node.js", "Redis", "Stripe API"],
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    metrics: { users: "1.1K", rating: "4.9", tasks: "12K" },
  },
  {
    id: 3,
    name: "HyperLearn",
    category: "Pendidikan",
    status: "Alpha",
    statusColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    desc: "Platform e-learning adaptif yang menyesuaikan kurikulum dengan gaya belajar setiap pengguna menggunakan machine learning dan analitik pembelajaran.",
    tech: ["Vue.js", "Python", "TensorFlow", "MongoDB"],
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
    metrics: { users: "890", rating: "4.7", tasks: "8K" },
  },
  {
    id: 4,
    name: "HyperHealth",
    category: "Kesehatan",
    status: "Planning",
    statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    desc: "Ekosistem kesehatan digital yang menghubungkan pasien, dokter, dan apotek. Fitur monitoring kesehatan IoT, telemedicine, dan rekam medis digital.",
    tech: ["React", "FastAPI", "IoT", "FHIR"],
    gradient: "from-red-500/20 to-rose-500/20",
    border: "border-red-500/30",
    metrics: { users: "500+", rating: "4.6", tasks: "3K" },
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-950 relative">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(0,212,255,0.1) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Produk{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Unggulan
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dari konsep hingga produksi, setiap produk Hyperchain dibangun
            dengan standar kualitas tertinggi dan fokus pada pengalaman pengguna.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={"relative p-8 rounded-3xl border " + project.border + " bg-gradient-to-br " + project.gradient + " backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 group"}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white font-black text-2xl mt-1 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <span className={"px-3 py-1 rounded-full text-xs font-semibold border " + project.statusColor}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-white font-bold">{project.metrics.users}</div>
                  <div className="text-gray-500 text-xs">Pengguna</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold">&#9733; {project.metrics.rating}</div>
                  <div className="text-gray-500 text-xs">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold">{project.metrics.tasks}</div>
                  <div className="text-gray-500 text-xs">Transaksi</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border border-white/20 text-gray-300 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-sm">
            Lihat Semua Produk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
