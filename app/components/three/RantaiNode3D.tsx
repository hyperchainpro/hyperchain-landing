"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface RantaiNodeProps {
  position?: [number, number, number];
  color?: string;
  index?: number;
}

function ChainLink({ position, color, index = 0 }: RantaiNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !torusRef.current) return;
    const t = state.clock.elapsedTime + index * 0.5;
    meshRef.current.rotation.y = t * 0.4;
    meshRef.current.position.y = (position?.[1] ?? 0) + Math.sin(t * 0.8) * 0.1;
    torusRef.current.rotation.x = t * 0.3;
    torusRef.current.rotation.z = t * 0.2;
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial
          color={color ?? "#00d4ff"}
          emissive={color ?? "#00d4ff"}
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh ref={torusRef}>
        <torusGeometry args={[0.4, 0.06, 8, 24]} />
        <meshStandardMaterial
          color={color ?? "#00d4ff"}
          emissive={color ?? "#00d4ff"}
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

function ConnectionLine({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    return geo;
  }, [start, end]);

  useFrame((state) => {
    if (!lineRef.current) return;
    const mat = lineRef.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#00d4ff" transparent opacity={0.4} />
    </lineSegments>
  );
}

const NODE_POSITIONS: [number, number, number][] = [
  [0, 0, 0],
  [1.5, 0.8, 0.5],
  [-1.5, 0.8, -0.5],
  [0, 1.8, 0],
  [1.5, -0.8, -0.5],
  [-1.5, -0.8, 0.5],
  [0, -1.8, 0],
];

const NODE_COLORS = [
  "#00d4ff",
  "#7c3aed",
  "#06b6d4",
  "#8b5cf6",
  "#0ea5e9",
  "#a855f7",
  "#22d3ee",
];

export default function RantaiNode3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  const connections = useMemo(() => {
    const pairs: [number, number][] = [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
      [1, 3], [2, 3], [4, 6], [5, 6],
    ];
    return pairs.map(([a, b]) => ({
      start: new THREE.Vector3(...NODE_POSITIONS[a]),
      end: new THREE.Vector3(...NODE_POSITIONS[b]),
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {NODE_POSITIONS.map((pos, i) => (
        <ChainLink key={i} position={pos} color={NODE_COLORS[i]} index={i} />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine key={i} start={conn.start} end={conn.end} />
      ))}
    </group>
  );
}
