"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const TESTIMONIALS = [
  { quote: "HyperTask transformed how our team works. Productivity increased 40% in the first month. Integration with other tools is seamless.", name: "Ahmad Fauzi", title: "Founder, TechStartup.id" },
  { quote: "HyperPay is the solution we have been waiting for. Finally a platform that truly understands the needs of Indonesian SMEs.", name: "Rina Kusuma", title: "CEO, UMKM Digital" },
  { quote: "Hyperchain architecture is very solid. As an engineer, I am impressed by the code quality and API documentation.", name: "Dimas Prasetyo", title: "Head of Engineering, Fintech Co." },
  { quote: "HyperLearn has a different approach from other e-learning platforms. The content personalization is truly felt.", name: "Lestari Wulandari", title: "Product Manager, EdTech" },
  { quote: "The ecosystem approach is brilliant. Having all tools connected under one platform saves us hours every week.", name: "Budi Santoso", title: "CTO, Digital Agency" },
  { quote: "Best developer experience I have seen in an Indonesian startup. The API is clean, well-documented, and reliable.", name: "Maya Indah", title: "Senior Engineer, Startup" },
];

export default function TestimoniSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(124,58,237,0.06),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Testimonials</p>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
            <span className="gradient-text-white">WHAT THEY</span>
            <br />
            <span className="gradient-text-cyan">SAY</span>
          </h2>
        </motion.div>
      </div>

      <InfiniteMovingCards items={TESTIMONIALS} direction="left" speed="slow" />
      <InfiniteMovingCards items={[...TESTIMONIALS].reverse()} direction="right" speed="slow" className="mt-4" />
    </section>
  );
}