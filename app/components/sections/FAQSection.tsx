"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQS = [
  { q: "What is Hyperchain Project?", a: "Hyperchain Project is an integrated digital ecosystem connecting various digital products in one platform. From productivity, finance, education, to health -- all connected through Hyperchain Core." },
  { q: "How do I join Hyperchain?", a: "You can join as a product user, business partner, or talent contributor. Fill out the form in the Join section to get started." },
  { q: "Is Hyperchain available to the public?", a: "Some products are in Beta phase and available to limited users. Register now to get early adopter access." },
  { q: "How is user data security maintained?", a: "We use end-to-end encryption, SSL/TLS, and follow international security standards. Your data is never sold to third parties." },
  { q: "Is there a cost to use Hyperchain?", a: "We offer a free tier for all products with basic features. Premium tiers are available for advanced features at competitive pricing." },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-white font-medium group-hover:text-cyan-400 transition-colors pr-8">{q}</span>
        <span className={`text-gray-500 text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">FAQ</p>
            <h2 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter">
              <span className="gradient-text-white">COMMON</span>
              <br />
              <span className="gradient-text-cyan">QUESTIONS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}