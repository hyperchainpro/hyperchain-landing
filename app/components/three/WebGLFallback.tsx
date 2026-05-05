export default function WebGLFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-cyan-950/20 to-violet-950/20">
      {/* SVG illustration fallback */}
      <svg
        viewBox="0 0 400 400"
        className="w-64 h-64 opacity-30"
        aria-hidden="true"
      >
        {/* Central node */}
        <circle cx="200" cy="200" r="20" fill="#00d4ff" opacity="0.8" />
        {/* Outer nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 200 + 100 * Math.cos(rad);
          const y = 200 + 100 * Math.sin(rad);
          return (
            <g key={i}>
              <line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="#00d4ff"
                strokeWidth="1"
                opacity="0.3"
              />
              <circle cx={x} cy={y} r="10" fill="#7c3aed" opacity="0.6" />
            </g>
          );
        })}
        {/* Orbit ring */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="0.5"
          opacity="0.2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
