"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function StarsBackground({ className }: { className?: string }) {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 3,
    }));
    setStars(generated);
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.2, star.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
