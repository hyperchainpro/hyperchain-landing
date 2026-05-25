"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps { count?: number; isMobile?: boolean; }

export default function ParticleField({ count = 600, isMobile = false }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  const particleCount = isMobile ? Math.floor(count / 3) : count;

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const siz = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const r = 8 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const t = Math.random();
      if (t < 0.5) { col[i*3]=0; col[i*3+1]=0.96; col[i*3+2]=1; }
      else if (t < 0.8) { col[i*3]=0; col[i*3+1]=0.4; col[i*3+2]=1; }
      else { col[i*3]=0.49; col[i*3+1]=0.23; col[i*3+2]=0.93; }
      siz[i] = Math.random() * 0.04 + 0.01;
    }
    return [pos, col, siz];
  }, [particleCount]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.015;
    meshRef.current.rotation.x += delta * 0.005;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}