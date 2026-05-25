"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-950 text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform",
            "[--aurora:repeating-linear-gradient(100deg,#06b6d4_10%,#7c3aed_15%,#0ea5e9_20%,#a855f7_25%,#00d4ff_30%)]",
            "[background-image:var(--aurora)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            "filter blur-[10px]",
            "after:content-[\"_\"] after:absolute after:inset-0",
            "after:[background-image:var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora after:[background-attachment:fixed]",
            "after:mix-blend-difference",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
        />
      </div>
      {children}
    </div>
  );
}
