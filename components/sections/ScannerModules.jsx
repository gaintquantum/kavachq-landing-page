"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Binary, Boxes, Code2, Eye, Fingerprint, Gauge, LockKeyhole, Route, ScanSearch, Server } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
const capabilities = [
  { icon: Code2, title: "Source Code Review", short: "Code", desc: "KAVACH-Q will analyze application source code to discover cryptographic usage, risky algorithms, weak implementation patterns and evidence required for security review." },
  { icon: LockKeyhole, title: "TLS & Certificate Analysis", short: "TLS", desc: "It will inspect exposed endpoints, certificates, expiry status, issuer chains, TLS configuration and weak cryptographic protocols used in live services." },
  { icon: Binary, title: "Binary & Runtime Inspection", short: "Binary", desc: "It will check compiled applications and runtime environments to detect embedded crypto usage, hardcoded keys and hidden cryptographic patterns." },
  { icon: Server, title: "Infrastructure & API Review", short: "Infra", desc: "It will review servers, APIs, infrastructure services and configurations to understand cryptographic exposure and migration readiness." },
  { icon: Boxes, title: "Container & Kubernetes Checks", short: "K8s", desc: "It will scan container workloads, Kubernetes deployments, secrets and environment configurations for crypto assets and security risks." },
  { icon: Eye, title: "Legacy Document Discovery", short: "Docs", desc: "It will extract cryptographic references from old documents, scanned records, architecture files and audit materials that normal scanners may miss." },
  { icon: Fingerprint, title: "Library & Dependency Mapping", short: "Deps", desc: "It will map libraries, dependencies and SBOM data to cryptographic risk categories for faster software supply-chain review." },
];
const outcomes = [
  { icon: ScanSearch, title: "Discover", accent: "cyan", desc: "Find every certificate, key, and algorithm across applications, APIs, infrastructure, containers, dependencies, binaries, and legacy systems—then map them into a centralized Cryptographic Bill of Materials (CBOM)." },
  { icon: Gauge, title: "Assess", accent: "amber", desc: "Assign a 0–100 quantum-vulnerability score to each asset, including expired certificates, SHA-1 usage, hardcoded keys, and unencrypted DPDPA-covered data, prioritized against applicable CERT-IN and RBI requirements." },
  { icon: Route, title: "Prepare", accent: "emerald", desc: "Build a board-ready migration plan mapped to NIST FIPS 203, 204, and 205, with exportable, signed, audit-ready, and auditor-verifiable evidence for applicable ISO 27001:2022 requirements." },
];
const cardTone = {
  cyan: { card: "border-cyan-200 hover:border-cyan-300", icon: "border-cyan-200 bg-cyan-50 text-cyan-700" },
  amber: { card: "border-amber-200 hover:border-amber-300", icon: "border-amber-200 bg-amber-50 text-amber-700" },
  emerald: { card: "border-emerald-200 hover:border-emerald-300", icon: "border-emerald-200 bg-emerald-50 text-emerald-700" },
};
// Node positions on a circle around the scanner hub (percent of the map box).
const nodes = capabilities.map((_, i) => {
  const a = (i / capabilities.length) * Math.PI * 2 - Math.PI / 2;
  return { x: 50 + Math.cos(a) * 38, y: 50 + Math.sin(a) * 38 };
});
export default function ScannerModules() {
  return (
    <section id="modules" aria-labelledby="modules-heading" data-native className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 text-slate-950 sm:px-8 lg:px-10 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(167,139,250,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-300">
        <SectionHeader eyebrow="CERT-IN · RBI · ISO 27001 · MeitY NQM Aligned" eyebrowVariant="pill" id="modules-heading" title="Find Every RSA and ECC Key" accent="Before the Quantum Deadline Finds You."
          description="KAVACH-Q discovers RSA, ECC, and legacy cryptographic assets across your technology estate, scores each finding, and maps the results to applicable post-quantum standards and compliance requirements." />
        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, accent, desc }, index) => {
            const tone = cardTone[accent];
            return (
              <RevealItem as="article" key={title} className={`h-full rounded-card border bg-white p-6 text-left shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none sm:p-7 ${tone.card} ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className={`flex size-12 items-center justify-center rounded-2xl border ${tone.icon}`}><Icon className="size-6" strokeWidth={1.8} aria-hidden="true" /></div>
                <h3 className={`mt-5 text-2xl font-black tracking-tight text-black`}>{title}</h3>
                <p className="mt-2.5 text-base leading-7 text-ink-soft">{desc}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
        <DiscoveryExplorer />
      </div>
    </section>
  );
}
function DiscoveryExplorer() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!inView || touched || reduce) return;
    const t = setInterval(() => setActive((i) => (i + 1) % capabilities.length), 3200);
    return () => clearInterval(t);
  }, [inView, touched, reduce]);
  const select = (i) => { setTouched(true); setActive(i); };
  const onKeyDown = (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + capabilities.length) % capabilities.length;
    select(next);
    document.getElementById(`cap-tab-${next}`)?.focus();
  };
  const current = capabilities[active];
  const CurrentIcon = current.icon;
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-6 grid overflow-hidden rounded-panel border border-line bg-surface shadow-card lg:grid-cols-[0.95fr_1.05fr]">
      {/* Illustrative discovery map */}
      <div className="relative border-b border-line bg-[linear-gradient(160deg,#f0f9ff,#ffffff_55%,#f5f3ff)] p-5 sm:p-8 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Discovery coverage</p>
          <span className="rounded-full border border-amber-300/60 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">Illustrative view</span>
        </div>
        <div className="relative mx-auto mt-4 aspect-square w-full max-w-sm" aria-hidden="true">
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible">
            <circle cx="50" cy="50" r="38" fill="none" stroke="#e2e8f0" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="24" fill="none" stroke="#fdba74" strokeWidth="0.4" strokeDasharray="1 1.5" />
            {nodes.map((n, i) => (
              <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke={i === active ? "#ea580c" : "#fdba74"} strokeWidth={i === active ? 0.8 : 0.45} strokeDasharray="2 2" className="animate-dash-flow" style={{ transition: "stroke 300ms" }} />
            ))}
          </svg>
          <div className="absolute inset-[12%] animate-radar rounded-full bg-[conic-gradient(from_0deg,rgba(6,182,212,0.18),transparent_22%)] motion-reduce:hidden" />
          <div className="absolute left-1/2 top-1/2 flex size-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200 bg-white text-cyan-700 shadow-glow">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan-300/40 motion-reduce:hidden" />
            <ScanSearch className="relative size-1/2" strokeWidth={1.7} />
          </div>
          {capabilities.map(({ icon: Icon, short }, i) => (
            <button key={short} type="button" tabIndex={-1} onClick={() => select(i)} onMouseEnter={() => select(i)} style={{ left: `${nodes[i].x}%`, top: `${nodes[i].y}%` }}
              className={`pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 transition-transform duration-300 ${i === active ? "scale-110 text-indigo-700" : "text-cyan-700 hover:scale-105"}`}>
              <span className={`flex size-10 items-center justify-center rounded-xl border bg-white shadow-card transition-colors duration-300 sm:size-12 ${i === active ? "border-indigo-300 ring-4 ring-indigo-200/60" : "border-line"}`}><Icon className="size-5" strokeWidth={1.8} /></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em]">{short}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Accessible module list + detail */}
      <div className="flex flex-col p-5 sm:p-8">
        <h3 className="text-xl font-black tracking-tight text-ink sm:text-2xl">7 scanner modules, one cryptographic inventory</h3>
        <div role="tablist" aria-label="Scanner modules" aria-orientation="vertical" onKeyDown={onKeyDown} className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title }, i) => (
            <button key={title} id={`cap-tab-${i}`} type="button" role="tab" aria-selected={i === active} aria-controls="cap-panel" tabIndex={i === active ? 0 : -1} onClick={() => select(i)}
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${i === active ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-transparent text-ink-soft hover:border-line hover:bg-surface-muted"}`}>
              <Icon className="size-4 shrink-0" strokeWidth={1.9} aria-hidden="true" />{title}
            </button>
          ))}
        </div>
        <div id="cap-panel" role="tabpanel" aria-labelledby={`cap-tab-${active}`} aria-live="polite" className="mt-4 min-h-36 rounded-card border border-line bg-surface-muted p-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg border border-indigo-200 bg-white text-indigo-600"><CurrentIcon className="size-4.5" strokeWidth={1.9} aria-hidden="true" /></span>
                <h4 className="font-bold text-ink">{current.title}</h4>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{current.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
