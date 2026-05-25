"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlowingSphere({ position, color, index = 0, size = 0.3 }: {
  position: [number, number, number];
  color: string;
  index?: number;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    const t = state.clock.elapsedTime + index * 0.7;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.15;
    glowRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.15;
    const pulse = 0.9 + Math.sin(t * 1.5) * 0.1;
    glowRef.current.scale.setScalar(pulse);
  });

  return (
    <group position={position}>
      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 2.5, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.15} transparent opacity={0.08} />
      </mesh>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          metalness={0.3}
          roughness={0.1}
          transparent
          opacity={0.95}
        />
      </mesh>
    </group>
  );
}

function ConnectionLine({ start, end, color = "#00f5ff" }: { start: THREE.Vector3; end: THREE.Vector3; color?: string }) {
  const lineRef = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints([start, end]), [start, end]);

  useFrame((state) => {
    if (!lineRef.current) return;
    const mat = lineRef.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.2} />
    </lineSegments>
  );
}

const NODES: { pos: [number, number, number]; color: string; size: number }[] = [
  { pos: [0, 0, 0],       color: "#00f5ff", size: 0.45 },
  { pos: [2.2, 1.2, 0.5], color: "#0066ff", size: 0.28 },
  { pos: [-2.2, 1.0, -0.5], color: "#7c3aed", size: 0.28 },
  { pos: [0, 2.6, 0.2],   color: "#00f5ff", size: 0.22 },
  { pos: [2.0, -1.2, -0.3], color: "#0ea5e9", size: 0.25 },
  { pos: [-2.0, -1.0, 0.4], color: "#a855f7", size: 0.25 },
  { pos: [0, -2.6, -0.2], color: "#22d3ee", size: 0.22 },
  { pos: [3.5, 0, 0],     color: "#0066ff", size: 0.18 },
  { pos: [-3.5, 0, 0],    color: "#7c3aed", size: 0.18 },
];

const CONNECTIONS: [number, number][] = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
  [1,3],[2,3],[4,6],[5,6],[1,7],[2,8],[7,4],[8,5],
];

export default function RantaiNode3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
  });

  const connections = useMemo(() =>
    CONNECTIONS.map(([a, b]) => ({
      start: new THREE.Vector3(...NODES[a].pos),
      end: new THREE.Vector3(...NODES[b].pos),
      color: NODES[a].color,
    })), []
  );

  return (
    <group ref={groupRef}>
      {NODES.map((node, i) => (
        <GlowingSphere key={i} position={node.pos} color={node.color} index={i} size={node.size} />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine key={i} start={conn.start} end={conn.end} color={conn.color} />
      ))}
    </group>
  );
}