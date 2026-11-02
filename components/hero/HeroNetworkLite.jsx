// Lightweight SVG quantum network for small screens (no WebGL / three.js download).
const nodes = [[40, 70], [120, 30], [210, 85], [300, 40], [350, 130], [260, 170], [160, 150], [70, 190], [190, 250], [320, 240], [100, 290], [250, 320]];
const links = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [6, 7], [5, 8], [8, 9], [4, 9], [7, 10], [8, 10], [8, 11], [9, 11], [2, 6]];
export default function HeroNetworkLite() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-16 top-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(66,133,244,0.14),transparent_65%)] blur-2xl" />
      <svg viewBox="0 0 390 360" className="absolute -right-10 top-20 w-[115%] max-w-136 opacity-50" fill="none">
        <g stroke="#7dd3fc" strokeWidth="1">{links.map(([a, b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}</g>
        {nodes.map(([x, y], i) => (
          <g key={i} className="animate-float-slow" style={{ animationDelay: `${(i % 5) * -1.3}s`, transformBox: "fill-box" }}>
            <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={i % 4 === 0 ? "#6366f1" : "#06b6d4"} />
            {i % 3 === 0 && <circle cx={x} cy={y} r="11" stroke="#22d3ee" strokeOpacity="0.45" />}
          </g>
        ))}
      </svg>
    </div>
  );
}
