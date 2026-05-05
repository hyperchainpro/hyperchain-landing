"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  {
    icon: "🔗",
    title: "Terintegrasi",
    desc: "Semua produk terhubung dalam satu ekosistem yang mulus. Data mengalir antar aplikasi tanpa hambatan.",
  },
  {
    icon: "⚡",
    title: "Bertenaga AI",
    desc: "Kecerdasan buatan tertanam di setiap produk untuk memberikan pengalaman yang personal dan cerdas.",
  },
  {
    icon: "🛡️",
    title: "Aman & Terpercaya",
    desc: "Keamanan enterprise-grade dengan enkripsi end-to-end dan kepatuhan terhadap regulasi data.",
  },
  {
    icon: "🌏",
    title: "Lokal & Global",
    desc: "Dibangun untuk Indonesia, dirancang untuk dunia. Memahami kebutuhan lokal dengan standar global.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TentangSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Tentang Kami
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-black text-white mb-6"
          >
            Apa itu{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Hyperchain?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Hyperchain Project adalah ekosistem digital terintegrasi yang menghubungkan
            berbagai aspek kehidupan digital dari produktivitas kerja, manajemen keuangan,
            hingga kesehatan dan pendidikan dalam satu platform yang kohesif dan powerful.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative p-8 lg:p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 mb-16 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-2xl lg:text-3xl font-light text-white leading-relaxed text-center">
              Kami percaya bahwa teknologi terbaik adalah yang{" "}
              <span className="text-cyan-400 font-semibold">tidak terlihat</span> --
              yang bekerja di balik layar untuk membuat hidup Anda lebih mudah,
              lebih produktif, dan lebih{" "}
              <span className="text-violet-400 font-semibold">bermakna</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
