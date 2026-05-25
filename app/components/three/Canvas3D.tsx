"use client";
import { Suspense, Component, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, AdaptiveDpr, Environment } from "@react-three/drei";
import RantaiNode3D from "./RantaiNode3D";
import ParticleField from "./ParticleField";
import WebGLFallback from "./WebGLFallback";
import { useIsMobile } from "@/hooks/useMediaQuery";

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 8]} intensity={3} color="#00f5ff" />
      <pointLight position={[-8, 4, -4]} intensity={2} color="#0066ff" />
      <pointLight position={[8, -4, -4]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[0, 8, 0]} intensity={1} color="#00f5ff" />
    </>
  );
}

interface Canvas3DProps { className?: string; }

export default function Canvas3D({ className }: Canvas3DProps) {
  const isMobile = useIsMobile();
  return (
    <div className={className} aria-hidden="true" role="presentation">
      <WebGLErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 55 }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <AdaptiveDpr pixelated />
          <SceneLights />
          <Suspense fallback={null}>
            <Stars radius={100} depth={60} count={isMobile ? 800 : 2500} factor={3} saturation={0.3} fade speed={0.3} />
            <ParticleField count={isMobile ? 150 : 500} isMobile={isMobile} />
            <RantaiNode3D />
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}