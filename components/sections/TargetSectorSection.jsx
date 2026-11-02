"use client";
import { BadgeCheck, Landmark, RadioTower, ShieldCheck } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
const sectors = [
  { title: "Central & State Government", label: "Government", visual: "gov", icon: Landmark, tone: "cyan",
    description: "NIC-hosted portals, ministry APIs, and citizen-services platforms — including legacy documents readable only through vision-assisted analysis.",
    points: ["CERT-IN and MeitY regulatory alignment", "Private deployment and data residency controls", "Legacy document and configuration discovery"] },
  { title: "BFSI — Banks, Insurance, Finance", label: "Regulated Finance", visual: "bfsi", icon: BadgeCheck, tone: "amber",
    description: "RBI-regulated banks, SEBI-registered firms, insurance companies, and payment processors with clause-level reporting for regulatory review.",
    points: ["RBI cyber security framework coverage", "Repository, API, TLS, and SBOM scanning", "DPDPA 2023 encryption checks"] },
  { title: "Critical Infrastructure", label: "National Assets", visual: "infra", icon: RadioTower, tone: "rose",
    description: "Power grids, telecom networks, water treatment, railways, and defence contractors where source access may be partial or unavailable.",
    points: ["Runtime, firmware, and binary inspection", "SCADA and legacy component visibility", "Controlled scanning with no data exfiltration"] },
];
const tones = {
  cyan: { stroke: "#06b6d4", fill: "#cffafe", text: "text-cyan-700", soft: "bg-cyan-50", border: "border-cyan-200", hover: "hover:border-cyan-300", band: "from-cyan-50", bar: "bg-cyan-400" },
  amber: { stroke: "#d97706", fill: "#fef3c7", text: "text-amber-700", soft: "bg-amber-50", border: "border-amber-200", hover: "hover:border-amber-300", band: "from-amber-50", bar: "bg-amber-400" },
  rose: { stroke: "#e11d48", fill: "#ffe4e6", text: "text-rose-700", soft: "bg-rose-50", border: "border-rose-200", hover: "hover:border-rose-300", band: "from-rose-50", bar: "bg-rose-400" },
};
export default function TargetSectorsSection() {
  return (
    <section id="who" aria-labelledby="who-heading" data-native className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(251,191,36,0.08),transparent_28%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader align="left" eyebrow="Target Sectors" id="who-heading" title="Built for India's most" accent="critical institutions."
          description="KAVACH-Q focuses on sectors where cryptographic failure has national, regulatory, or public-service impact, from government systems to finance and infrastructure." />
        <RevealGroup stagger={0.12} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => <SectorCard key={s.title} sector={s} wide={i === sectors.length - 1} />)}
        </RevealGroup>
      </div>
    </section>
  );
}
function SectorCard({ sector: { title, label, visual, icon: Icon, tone, description, points }, wide }) {
  const t = tones[tone];
  return (
    <RevealItem as="article" className={`group relative flex h-full flex-col overflow-hidden rounded-card border bg-surface shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none ${t.border} ${t.hover} ${wide ? "md:col-span-2 lg:col-span-1" : ""}`}>
      <div className={`relative h-32 overflow-hidden border-b ${t.border} bg-linear-to-br ${t.band} to-white`} aria-hidden="true">
        <SectorVisual kind={visual} tone={t} />
        <span className={`absolute inset-x-0 top-0 h-1 ${t.bar}`} />
        <span className={`absolute bottom-3 left-5 flex size-12 items-center justify-center rounded-xl border bg-white shadow-card transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 ${t.border} ${t.text}`}><Icon className="size-6" strokeWidth={1.8} /></span>
        <span className={`absolute left-5 top-4 rounded-full border bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${t.border} ${t.text}`}>{label}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-black tracking-tight text-ink lg:text-2xl">{title}</h3>
        <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">Environment</p>
        <p className="mt-1 flex-1 text-sm leading-6 text-ink-soft">{description}</p>
        <p className={`mt-5 border-t border-line pt-4 text-[11px] font-bold uppercase tracking-[0.16em] ${t.text}`}>KAVACH-Q capabilities</p>
        <ul className="mt-2 space-y-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-ink-soft">
              <ShieldCheck className={`mt-1 size-4 shrink-0 ${t.text}`} strokeWidth={2} aria-hidden="true" />{point}
            </li>
          ))}
        </ul>
      </div>
    </RevealItem>
  );
}
// Abstract, decorative sector illustrations (pure SVG, CSS-animated, paused for reduced motion).
function SectorVisual({ kind, tone }) {
  const dash = { strokeDasharray: "3 3" };
  if (kind === "gov") {
    const nodes = [[230, 30], [290, 60], [340, 28], [270, 100], [345, 95]];
    return (
      <svg viewBox="0 0 400 128" className="absolute inset-0 size-full" fill="none">
        {[[0, 1], [1, 2], [1, 3], [3, 4], [2, 4]].map(([a, b]) => <line key={`${a}${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={tone.stroke} strokeOpacity="0.45" strokeWidth="1.2" style={dash} className="animate-dash-flow" />)}
        {nodes.map(([x, y], i) => <g key={i} className="animate-float-slow" style={{ animationDelay: `${-i * 1.1}s`, transformBox: "fill-box" }}><rect x={x - 11} y={y - 8} width="22" height="16" rx="3" fill="white" stroke={tone.stroke} strokeWidth="1.2" /><path d={`M${x - 6} ${y - 2}h12M${x - 6} ${y + 3}h8`} stroke={tone.stroke} strokeOpacity="0.6" /></g>)}
      </svg>
    );
  }
  if (kind === "bfsi") {
    return (
      <svg viewBox="0 0 400 128" className="absolute inset-0 size-full" fill="none">
        {[0, 1, 2, 3].map((i) => <g key={i} className="animate-float-slow" style={{ animationDelay: `${-i * 0.9}s`, transformBox: "fill-box" }}><rect x={190 + i * 50} y={40 + (i % 2) * 18} width="38" height="30" rx="5" fill={i === 3 ? tone.fill : "white"} stroke={tone.stroke} strokeWidth="1.2" /><path d={`M${198 + i * 50} ${52 + (i % 2) * 18}h22M${198 + i * 50} ${60 + (i % 2) * 18}h14`} stroke={tone.stroke} strokeOpacity="0.55" /></g>)}
        {[0, 1, 2].map((i) => <line key={i} x1={228 + i * 50} y1={55 + (i % 2) * 18} x2={240 + i * 50} y2={55 + ((i + 1) % 2) * 18} stroke={tone.stroke} strokeWidth="1.2" style={dash} className="animate-dash-flow" />)}
        <g transform="translate(352 20)"><rect x="0" y="9" width="20" height="15" rx="3" fill="white" stroke={tone.stroke} strokeWidth="1.3" /><path d="M5 9V6a5 5 0 0 1 10 0v3" stroke={tone.stroke} strokeWidth="1.3" /></g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 128" className="absolute inset-0 size-full" fill="none">
      {[200, 260, 320, 380].map((x, i) => <g key={x}><path d={`M${x} 110 L${x - 9} 110 L${x} 40 L${x + 9} 110 Z`} stroke={tone.stroke} strokeOpacity="0.5" strokeWidth="1.1" /><line x1={x - 14} y1="55" x2={x + 14} y2="55" stroke={tone.stroke} strokeOpacity="0.5" /><circle cx={x} cy="40" r="3" fill={tone.stroke} className="animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} /></g>)}
      {[200, 260, 320].map((x) => <path key={x} d={`M${x + 14} 55 Q ${x + 30} 68 ${x + 46} 55`} stroke={tone.stroke} strokeWidth="1.2" style={dash} className="animate-dash-flow" />)}
      <g className="animate-pulse-ring" style={{ transformBox: "fill-box", transformOrigin: "center" }}><circle cx="380" cy="40" r="10" stroke={tone.stroke} strokeOpacity="0.6" /></g>
    </svg>
  );
}
