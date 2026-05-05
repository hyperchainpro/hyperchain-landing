"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TEAM = [
  {
    name: "Arya Pratama",
    role: "CEO & Co-Founder",
    bio: "Ex-Gojek engineer. 8 tahun pengalaman di product development dan startup scaling.",
    avatar: "AP",
    gradient: "from-cyan-500 to-blue-600",
    links: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sari Dewi",
    role: "CTO & Co-Founder",
    bio: "Full-stack architect. Spesialis distributed systems dan cloud-native infrastructure.",
    avatar: "SD",
    gradient: "from-violet-500 to-purple-600",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Budi Santoso",
    role: "Head of Product",
    bio: "Product strategist dengan track record meluncurkan 5 produk B2C di pasar Indonesia.",
    avatar: "BS",
    gradient: "from-green-500 to-emerald-600",
    links: { linkedin: "#" },
  },
  {
    name: "Maya Indah",
    role: "Head of Design",
    bio: "UX/UI designer. Berpengalaman di Tokopedia dan Traveloka. Obsesi pada detail.",
    avatar: "MI",
    gradient: "from-pink-500 to-rose-600",
    links: { linkedin: "#", dribbble: "#" },
  },
  {
    name: "Rizky Hakim",
    role: "Lead Engineer",
    bio: "Backend specialist. Membangun sistem yang melayani jutaan request per hari.",
    avatar: "RH",
    gradient: "from-orange-500 to-amber-600",
    links: { github: "#", linkedin: "#" },
  },
  {
    name: "Nadia Putri",
    role: "Head of Marketing",
    bio: "Growth hacker. Spesialis digital marketing dan community building untuk startup.",
    avatar: "NP",
    gradient: "from-teal-500 to-cyan-600",
    links: { linkedin: "#", twitter: "#" },
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TimSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tim" className="py-24 lg:py-32 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Tim
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Orang-orang di{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Balik Hyperchain
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tim kami terdiri dari para profesional berpengalaman yang bersatu
            dengan satu misi: membangun ekosistem digital terbaik untuk Indonesia.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="p-6 rounded-2xl border border-white/10 bg-gray-900/50 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex gap-3">
                {Object.entries(member.links).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    aria-label={`${member.name} on ${platform}`}
                    className="text-gray-500 hover:text-cyan-400 text-xs capitalize transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center p-8 rounded-2xl border border-dashed border-white/20 bg-white/5"
        >
          <p className="text-gray-400 mb-4">Kami sedang mencari talenta terbaik untuk bergabung</p>
          <button
            onClick={() => document.querySelector("#bergabung")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Lihat Posisi Terbuka
          </button>
        </motion.div>
      </div>
    </section>
  );
}
