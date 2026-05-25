"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TEAM = [
  { name: "Arya Pratama", role: "CEO & Co-Founder", bio: "Ex-Gojek engineer. 8 years in product development and startup scaling.", avatar: "AP", color: "#00f5ff" },
  { name: "Sari Dewi", role: "CTO & Co-Founder", bio: "Full-stack architect. Specialist in distributed systems and cloud-native infrastructure.", avatar: "SD", color: "#0066ff" },
  { name: "Budi Santoso", role: "Head of Product", bio: "Product strategist with track record launching 5 B2C products in Indonesian market.", avatar: "BS", color: "#7c3aed" },
  { name: "Maya Indah", role: "Head of Design", bio: "UX/UI designer. Previously at Tokopedia and Traveloka. Obsessed with details.", avatar: "MI", color: "#00f5ff" },
  { name: "Rizky Hakim", role: "Lead Engineer", bio: "Backend specialist. Builds systems serving millions of requests per day.", avatar: "RH", color: "#0066ff" },
  { name: "Nadia Putri", role: "Head of Marketing", bio: "Growth hacker. Specialist in digital marketing and community building for startups.", avatar: "NP", color: "#7c3aed" },
];

export default function TimSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tim" className="py-32 lg:py-40 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Team</p>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
            <span className="gradient-text-white">THE PEOPLE</span>
            <br />
            <span className="gradient-text-cyan">BEHIND IT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group bg-black p-8 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-black font-black text-sm flex-shrink-0" style={{ background: member.color }}>
                  {member.avatar}
                </div>
                <div>
                  <div className="text-white font-bold group-hover:text-cyan-400 transition-colors">{member.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{member.role}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              <div className="mt-6 w-6 h-px transition-all duration-300 group-hover:w-12" style={{ background: member.color }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-px bg-white/5"
        >
          <div className="bg-black p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">We are looking for the best talent to join our mission</p>
            <button
              onClick={() => document.querySelector("#bergabung")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 flex-shrink-0"
            >
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}