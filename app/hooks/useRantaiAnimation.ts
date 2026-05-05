"use client";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function useRantaiAnimation(
  groupRef: React.RefObject<THREE.Group | null>,
  scrollProgress: React.MutableRefObject<number>
) {
  useEffect(() => {
    if (!groupRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        },
      },
    });

    tl.to(groupRef.current.rotation, { y: Math.PI * 2, duration: 1 });
    tl.to(groupRef.current.position, { y: -2, duration: 1 }, 0);

    return () => {
      tl.kill();
    };
  }, [groupRef, scrollProgress]);
}

export function useScroll3D() {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
