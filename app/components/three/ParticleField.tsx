"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  isMobile?: boolean;
}

export default function ParticleField({ count = 800, isMobile = false }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  const particleCount = isMobile ? Math.floor(count / 3) : count;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      // Cyan/blue/purple palette
      const t = Math.random();
      col[i * 3] = t < 0.33 ? 0.0 : t < 0.66 ? 0.3 : 0.6;
      col[i * 3 + 1] = t < 0.33 ? 0.8 : t < 0.66 ? 0.5 : 0.2;
      col[i * 3 + 2] = 1.0;
    }
    return [pos, col];
  }, [particleCount]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.03;
    meshRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}
