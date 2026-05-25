"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-40 bg-black overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <BackgroundBeams className="opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,245,255,0.05),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Early Access Open</span>
          </div>

          <h2 className="font-black leading-[0.9] tracking-tighter mb-8" style={{ fontSize: "clamp(3rem,8vw,7rem)" }}>
            <span className="gradient-text-white">READY TO</span>
            <br />
            <span className="gradient-text-cyan">JOIN THE</span>
            <br />
            <span className="gradient-text-white">FUTURE?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Be among the first 1000 early adopters and get exclusive access to all Hyperchain products before public launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.querySelector("#bergabung")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-white text-black font-black rounded-2xl text-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/30 hover:scale-105"
            >
              Get Early Access
            </button>
            <button
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 border border-white/15 text-white/70 font-medium rounded-2xl text-lg hover:border-white/40 hover:text-white transition-all duration-300"
            >
              View Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-gray-600 text-sm flex-wrap">
            {["Free for early adopters", "No credit card", "Cancel anytime"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-cyan-400">+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}