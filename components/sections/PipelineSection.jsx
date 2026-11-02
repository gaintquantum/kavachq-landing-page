"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, FileCheck2, Gauge, ListChecks, Rocket, ScanSearch, Workflow } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
// Details reuse capabilities already described elsewhere on the page and link to that section.
const stages = [
  { no: "01", title: "SCAN", desc: "7-module cryptographic discovery across code, TLS, binaries, K8s Secrets, infrastructure, dependencies, and legacy PDFs using Claude Vision AI.", tag: "FR-1.1 → FR-1.7", color: "cyan", icon: ScanSearch,
    details: ["Source Code Review", "TLS & Certificate Analysis", "Binary & Runtime Inspection", "Infrastructure & API Review", "Container & Kubernetes Checks", "Legacy Document Discovery", "Library & Dependency Mapping"], link: ["#modules", "Scanner modules"] },
  { no: "02", title: "QUEUE", desc: "Kafka 3.5 asynchronous pipeline. The API returns a scan ID in under two seconds. Celery workers and priority queues support national-scale deployment.", tag: "Kafka · Celery · Redis", color: "violet", icon: Workflow,
    details: ["Workload Prioritization", "Failed Job Recovery", "Real-Time Progress", "Elastic Processing", "Operational Monitoring", "Verifiable Audit Trail"], link: ["#queue", "Processing pipeline"] },
  { no: "03", title: "SCORE", desc: "The QVS Engine uses vectorised risk scoring for every finding. Five decision-ready risk tiers explain each result in simple language.", tag: "Risk Scoring · QVS Engine", color: "blue", icon: Gauge,
    details: ["Cryptographic Posture", "Security Exposure", "Data Sensitivity", "Environmental Context", "Migration Complexity"], link: ["#qvs", "QVS model"] },
  { no: "04", title: "PLAN", desc: "Generate ML-KEM-768, ML-DSA-65 and SLH-DSA migration plans. Select hybrid or PQC-only strategies and route critical changes through CAB approval.", tag: "NIST FIPS 203 · 204 · 205", color: "emerald", icon: ListChecks,
    details: ["ML-KEM-768", "ML-DSA-65", "SLH-DSA", "Hybrid or PQC-only strategy", "CAB approval routing"], link: ["#migration", "Migration workflow"] },
  { no: "05", title: "EXECUTE", desc: "A secure on-premise agent deploys migrations inside protected and air-gapped networks. Mandatory dry runs and automatic rollback reduce deployment risk.", tag: "OPA · mTLS · Zero-Touch", color: "amber", icon: Rocket,
    details: ["Secure on-premise agent", "Protected & air-gapped networks", "Mandatory dry runs", "Automatic rollback"], link: ["#deployment", "Deployment flow"] },
  { no: "06", title: "COMPLY", desc: "Generate digitally signed evidence reports with trusted timestamps. Every finding is mapped to applicable CERT-In, RBI and ISO 27001 requirements.", tag: "CERT-In · RBI · ISO 27001", color: "rose", icon: FileCheck2,
    details: ["Digitally signed reports", "Trusted timestamps", "CERT-In", "RBI", "ISO 27001"], link: ["#compliance", "Compliance mapping"] },
];
const tones = {
  cyan: { text: "text-cyan-700", soft: "bg-cyan-50", border: "border-cyan-200", ring: "ring-4 ring-cyan-300/40", cardRing: "ring-1 ring-cyan-300/50", dot: "bg-cyan-500", bar: "from-cyan-400" },
  violet: { text: "text-violet-700", soft: "bg-violet-50", border: "border-violet-200", ring: "ring-4 ring-violet-300/40", cardRing: "ring-1 ring-violet-300/50", dot: "bg-violet-500", bar: "from-violet-400" },
  blue: { text: "text-sky-700", soft: "bg-sky-50", border: "border-sky-200", ring: "ring-4 ring-sky-300/40", cardRing: "ring-1 ring-sky-300/50", dot: "bg-sky-500", bar: "from-sky-400" },
  emerald: { text: "text-emerald-700", soft: "bg-emerald-50", border: "border-emerald-200", ring: "ring-4 ring-emerald-300/40", cardRing: "ring-1 ring-emerald-300/50", dot: "bg-emerald-500", bar: "from-emerald-400" },
  amber: { text: "text-amber-700", soft: "bg-amber-50", border: "border-amber-200", ring: "ring-4 ring-amber-300/40", cardRing: "ring-1 ring-amber-300/50", dot: "bg-amber-500", bar: "from-amber-400" },
  rose: { text: "text-rose-700", soft: "bg-rose-50", border: "border-rose-200", ring: "ring-4 ring-rose-300/40", cardRing: "ring-1 ring-rose-300/50", dot: "bg-rose-500", bar: "from-rose-400" },
};
export default function AutomationStages() {
  const listRef = useRef(null);
  const reduce = useReducedMotion();
  const [scrollStage, setScrollStage] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.8", "end 0.55"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setScrollStage(Math.min(stages.length - 1, Math.max(0, Math.floor(v * stages.length)))));
  const active = hovered ?? expanded ?? scrollStage;
  const toggle = (i) => setExpanded((cur) => (cur === i ? null : i));
  const jumpTo = (i) => {
    setExpanded(i);
    document.getElementById(`stage-${stages[i].no}`)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  };
  return (
    <section id="pipeline" aria-labelledby="pipeline-heading" data-native className="relative isolate scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[44px_44px] mask-[radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 h-96 w-3xl -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10),rgba(99,102,241,0.06)_45%,transparent_70%)] blur-2xl" />
      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader size="display" eyebrow="End-to-End Automation" id="pipeline-heading"
          title={<><span className="text-gradient">Six</span> Stages. <span className="text-gradient">One</span> platform.<span className="block"><span className="text-gradient">Zero</span> quantum blindspots.</span></>}
          description="Each stage automatically hands off to the next—from discovery and prioritisation to secure migration and compliance evidence." />
        {/* Desktop rail: fills with scroll, nodes jump to and expand their stage */}
        <div className="relative mx-auto mt-12 hidden max-w-5xl lg:block">
          <div className="absolute inset-x-[8.33%] top-5 h-0.5 rounded-full bg-line" aria-hidden="true" />
          <motion.div className="absolute inset-x-[8.33%] top-5 h-0.5 origin-left rounded-full bg-linear-to-r from-cyan-400 via-indigo-500 to-violet-500" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
          <ol className="relative grid grid-cols-6" aria-label="Pipeline stages">
            {stages.map((s, i) => {
              const t = tones[s.color];
              const on = i <= active;
              return (
                <li key={s.no} className="flex flex-col items-center">
                  <button type="button" onClick={() => jumpTo(i)} aria-label={`Stage ${s.no} ${s.title}: show details`}
                    className={`relative flex size-10 items-center justify-center rounded-full border-2 bg-surface text-xs font-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${on ? `${t.border} ${t.text} shadow-card` : "border-line text-ink-muted"} ${i === active ? `scale-110 ${t.ring}` : ""}`}>
                    {i === active && <span className={`absolute inset-0 animate-pulse-ring rounded-full ${t.dot} opacity-30 motion-reduce:hidden`} aria-hidden="true" />}
                    <span className="relative">{s.no}</span>
                  </button>
                  <span className={`mt-2 text-[11px] font-bold tracking-[0.18em] transition-colors ${i === active ? t.text : "text-ink-muted"}`}>{s.title}</span>
                </li>
              );
            })}
          </ol>
        </div>
        <div ref={listRef} className="relative mt-8 lg:mt-10">
          {/* Mobile/tablet vertical connector */}
          <div className="absolute bottom-6 left-4.75 top-6 w-0.5 rounded-full bg-line lg:hidden" aria-hidden="true" />
          <motion.div className="absolute bottom-6 left-4.75 top-6 w-0.5 origin-top rounded-full bg-linear-to-b from-cyan-400 via-indigo-500 to-violet-500 lg:hidden" style={{ scaleY: scrollYProgress }} aria-hidden="true" />
          <RevealGroup as="ol" stagger={0.08} className="grid items-start gap-4 lg:grid-cols-3 lg:gap-5">
            {stages.map((s, i) => (
              <RevealItem as="li" key={s.no} className="relative pl-12 lg:pl-0" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <span className={`absolute left-2.5 top-7 z-10 size-4 rounded-full border-4 border-surface shadow-[0_0_0_1px_var(--color-line)] transition-colors duration-300 lg:hidden ${i <= active ? tones[s.color].dot : "bg-line-strong"}`} aria-hidden="true" />
                <StageCard stage={s} active={i === active} open={expanded === i} onToggle={() => toggle(i)} isLast={i === stages.length - 1} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
function StageCard({ stage, active, open, onToggle, isLast }) {
  const { no, title, desc, tag, color, icon: Icon, details, link } = stage;
  const t = tones[color];
  const panelId = `stage-${no}-details`;
  return (
    <article id={`stage-${no}`} className={`group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-card border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 motion-reduce:transform-none sm:p-6 ${active ? `${t.border} shadow-glow ${t.cardRing}` : "border-line shadow-card hover:shadow-card-hover"}`}>
      <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${t.bar} to-transparent transition-opacity duration-300 ${active ? "opacity-100" : "opacity-40"}`} aria-hidden="true" />
      <span className={`pointer-events-none absolute -right-1 top-3 select-none font-display text-6xl leading-none text-ink opacity-[0.06] transition-transform duration-500 group-hover:-translate-y-1`} aria-hidden="true">{no}</span>
      <div className="relative flex items-center gap-3">
        <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl border ${t.border} ${t.soft} ${t.text} transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105`}>
          <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div>
          <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${t.text}`}>Stage {no}</p>
          <h3 className="text-xl font-black tracking-tight text-ink sm:text-2xl">{title}</h3>
        </div>
      </div>
      <p className="relative mt-4 text-sm leading-6 text-ink-soft">{desc}</p>
      <div className="relative mt-auto flex items-center justify-between gap-3 pt-5">
        <span className={`inline-flex max-w-[75%] rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] ${t.border} ${t.soft} ${t.text}`}>{tag}</span>
        <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={panelId}
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-bold transition hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${t.text}`}>
          {open ? "Hide" : "Details"}<ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={panelId} key="details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden">
            <div className="mt-4 border-t border-line pt-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">Covers</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {details.map((d) => <li key={d} className="rounded-md border border-line bg-surface-muted px-2 py-1 text-xs font-semibold text-ink-soft">{d}</li>)}
              </ul>
              {link && <a href={link[0]} className={`mt-3 inline-flex items-center gap-1 text-sm font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${t.text}`}>Explore {link[1]}<ArrowRight className="size-3.5" aria-hidden="true" /></a>}
              {!isLast && <p className="mt-3 text-xs text-ink-muted">Hands off automatically to Stage {String(+no + 1).padStart(2, "0")}.</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
