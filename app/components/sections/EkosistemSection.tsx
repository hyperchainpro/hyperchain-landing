"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SECTORS = [
  { id: 1, icon: "?", name: "HyperTask", category: "Produktivitas", color: "from-cyan-500 to-blue-600", desc: "Manajemen tugas & proyek berbasis AI untuk tim modern" },
  { id: 2, icon: "??", name: "HyperPay", category: "Keuangan", color: "from-green-500 to-emerald-600", desc: "Dompet digital & pembayaran terintegrasi untuk UMKM" },
  { id: 3, icon: "??", name: "HyperLearn", category: "Pendidikan", color: "from-violet-500 to-purple-600", desc: "Platform pembelajaran adaptif dengan kurikulum AI" },
  { id: 4, icon: "??", name: "HyperHealth", category: "Kesehatan", color: "from-red-500 to-rose-600", desc: "Monitoring kesehatan personal & telemedicine" },
  { id: 5, icon: "??", name: "HyperStore", category: "E-Commerce", color: "from-orange-500 to-amber-600", desc: "Marketplace terintegrasi dengan logistik cerdas" },
  { id: 6, icon: "??", name: "HyperConnect", category: "Networking", color: "from-blue-500 to-indigo-600", desc: "Platform networking profesional untuk ekosistem startup" },
  { id: 7, icon: "??", name: "HyperAnalytics", category: "Data & BI", color: "from-teal-500 to-cyan-600", desc: "Business intelligence & analitik data real-time" },
  { id: 8, icon: "??", name: "HyperHome", category: "Properti", color: "from-yellow-500 to-orange-600", desc: "Platform properti cerdas dengan virtual tour 3D" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function EkosistemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ekosistem" className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-950 relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,212,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 50%)`,
        }}
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
            Ekosistem
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            8 Sektor,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Satu Visi
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Setiap produk dirancang untuk bekerja secara mandiri sekaligus
            terintegrasi sempurna dengan seluruh ekosistem Hyperchain.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SECTORS.map((sector) => (
            <motion.div
              key={sector.id}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-white/10 bg-gray-900/50 hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${sector.color} text-2xl mb-4`}>
                {sector.icon}
              </div>

              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                {sector.category}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {sector.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{sector.desc}</p>

              <div className="mt-4 flex items-center gap-1 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Pelajari</span>
                <span>?</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Center connection visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium">Semua terhubung melalui Hyperchain Core API</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
