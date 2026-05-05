"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "Apa itu Hyperchain Project?",
    a: "Hyperchain Project adalah ekosistem digital terintegrasi yang menghubungkan berbagai produk digital dalam satu platform. Dari produktivitas, keuangan, pendidikan, hingga kesehatan � semua terhubung melalui Hyperchain Core.",
  },
  {
    q: "Bagaimana cara bergabung dengan Hyperchain?",
    a: "Anda bisa bergabung sebagai pengguna produk kami, sebagai mitra bisnis, atau sebagai talenta yang ingin berkontribusi. Isi formulir di bagian Bergabung untuk memulai.",
  },
  {
    q: "Apakah Hyperchain tersedia untuk umum?",
    a: "Beberapa produk kami sudah dalam fase Beta dan tersedia untuk pengguna terbatas. Daftar sekarang untuk mendapatkan akses early adopter.",
  },
  {
    q: "Bagaimana keamanan data pengguna dijaga?",
    a: "Kami menggunakan enkripsi end-to-end, SSL/TLS, dan mengikuti standar keamanan internasional. Data Anda tidak pernah dijual ke pihak ketiga.",
  },
  {
    q: "Apakah ada biaya untuk menggunakan Hyperchain?",
    a: "Kami menawarkan tier gratis untuk semua produk dengan fitur dasar. Tier premium tersedia untuk fitur lanjutan dengan harga yang kompetitif.",
  },
];

function FAQItem({ q, a, index, inView }: { q: string; a: string; index: number; inView: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);

  return (
    <motion.details
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group border border-white/10 rounded-2xl bg-gray-900/50 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
    >
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <span className="text-white font-semibold pr-4">{q}</span>
        <span className="text-cyan-400 text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
      </summary>
      <div className="px-6 pb-6">
        <p className="text-gray-400 leading-relaxed">{a}</p>
      </div>
    </motion.details>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gray-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Pertanyaan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Umum
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
