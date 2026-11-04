"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, FileCheck2, Gauge, ListChecks, Rocket, ScanSearch, Workflow } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
// Details reuse capabilities already described elsewhere on the page and link to that section.
const stages = [
  { no: "01", title: "SCAN", desc: "7-module cryptographic discovery across code, TLS, binaries, K8s Secrets, infrastructure, dependencies, and legacy PDFs using Claude Vision AI.", tag: "7-Module Discovery", color: "cyan", icon: ScanSearch,
    details: ["Source Code Review", "TLS & Certificate Analysis", "Binary & Runtime Inspection", "Infrastructure & API Review", "Container & Kubernetes Checks", "Legacy Document Discovery", "Library & Dependency Mapping"], link: ["#modules", "Scanner modules"] },
  { no: "02", title: "QUEUE", desc: "Kafka 3.5 asynchronous pipeline. The API returns a scan ID in under two seconds. Celery workers and priority queues support national-scale deployment.", tag: "Priority Processing", color: "violet", icon: Workflow,
    details: ["Workload Prioritization", "Failed Job Recovery", "Real-Time Progress", "Elastic Processing", "Operational Monitoring", "Verifiable Audit Trail"], link: ["#queue", "Processing pipeline"] },
  { no: "03", title: "SCORE", desc: "The QVS Engine uses vectorised risk scoring for every finding. Five decision-ready risk tiers explain each result in simple language.", tag: "Risk Intelligence", color: "blue", icon: Gauge,
    details: ["Cryptographic Posture", "Security Exposure", "Data Sensitivity", "Environmental Context", "Migration Complexity"], link: ["#qvs", "QVS model"] },
  { no: "04", title: "PLAN", desc: "Generate ML-KEM-768, ML-DSA-65 and SLH-DSA migration plans. Select hybrid or PQC-only strategies and route critical changes through CAB approval.", tag: "Migration Planning", color: "emerald", icon: ListChecks,
    details: ["ML-KEM-768", "ML-DSA-65", "SLH-DSA", "Hybrid or PQC-only strategy", "CAB approval routing"], link: ["#migration", "Migration workflow"] },
  { no: "05", title: "EXECUTE", desc: "A secure on-premise agent deploys migrations inside protected and air-gapped networks. Mandatory dry runs and automatic rollback reduce deployment risk.", tag: "Secure Deployment", color: "amber", icon: Rocket,
    details: ["Secure on-premise agent", "Protected & air-gapped networks", "Mandatory dry runs", "Automatic rollback"], link: ["#deployment", "Deployment flow"] },
  { no: "06", title: "COMPLY", desc: "Generate digitally signed evidence reports with trusted timestamps. Every finding is mapped to applicable CERT-In, RBI and ISO 27001 requirements.", tag: "Compliance Evidence", color: "rose", icon: FileCheck2,
    details: ["Digitally signed reports", "Trusted timestamps", "CERT-In", "RBI", "ISO 27001"], link: ["#compliance", "Compliance mapping"] },
];
const tones = {
  cyan: { text: "text-cyan-700", border: "border-cyan-200", ring: "ring-4 ring-cyan-300/40", dot: "bg-cyan-500" },
  violet: { text: "text-violet-700", border: "border-violet-200", ring: "ring-4 ring-violet-300/40", dot: "bg-violet-500" },
  blue: { text: "text-sky-700", border: "border-sky-200", ring: "ring-4 ring-sky-300/40", dot: "bg-sky-500" },
  emerald: { text: "text-emerald-700", border: "border-emerald-200", ring: "ring-4 ring-emerald-300/40", dot: "bg-emerald-500" },
  amber: { text: "text-amber-700", border: "border-amber-200", ring: "ring-4 ring-amber-300/40", dot: "bg-amber-500" },
  rose: { text: "text-rose-700", border: "border-rose-200", ring: "ring-4 ring-rose-300/40", dot: "bg-rose-500" },
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
    <section id="pipeline" aria-labelledby="pipeline-heading" data-native className="stage-section relative isolate scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="stage-orb -left-40 top-1/4 size-[34rem]" />
      <div aria-hidden="true" className="stage-orb -right-32 top-16 size-[28rem]" />
      <div aria-hidden="true" className="stage-orb bottom-[-14rem] left-1/2 size-[38rem] -translate-x-1/2" />
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
                  <span className="mt-2 text-[11px] font-bold tracking-[0.18em] text-black">{s.title}</span>
                </li>
              );
            })}
          </ol>
        </div>
        <div ref={listRef} className="relative mt-8 lg:mt-10">
          {/* Mobile/tablet vertical connector */}
          <div className="absolute bottom-6 left-4.75 top-6 w-0.5 rounded-full bg-line md:hidden" aria-hidden="true" />
          <motion.div className="absolute bottom-6 left-4.75 top-6 w-0.5 origin-top rounded-full bg-linear-to-b from-cyan-400 via-indigo-500 to-violet-500 md:hidden" style={{ scaleY: scrollYProgress }} aria-hidden="true" />
          <RevealGroup as="ol" stagger={0.08} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {stages.map((s, i) => (
              <RevealItem as="li" key={s.no} className={`relative pl-12 md:pl-0 ${expanded !== null ? "md:self-start" : ""}`} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <span className={`absolute left-2.5 top-7 z-10 size-4 rounded-full border-4 border-surface shadow-[0_0_0_1px_var(--color-line)] transition-colors duration-300 md:hidden ${i <= active ? tones[s.color].dot : "bg-line-strong"}`} aria-hidden="true" />
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
  const panelId = `stage-${no}-details`;
  return (
    <article id={`stage-${no}`} data-tone={color} data-active={active} className="stage-card relative flex h-full scroll-mt-28 flex-col overflow-hidden p-5 sm:p-6">
      <span className="stage-number pointer-events-none absolute right-4 top-3 select-none font-display leading-none" aria-hidden="true">{no}</span>
      <div className="relative flex items-center gap-3.5">
        <div className="stage-icon relative flex shrink-0 items-center justify-center">
          <Icon className="relative size-7" strokeWidth={1.9} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="stage-title">{title}</h3>
        </div>
      </div>
      <p className="stage-desc relative mt-4">{desc}</p>
      <div className="relative mt-auto flex items-center justify-between gap-3 pt-5">
        <span className="stage-badge inline-flex min-w-0 rounded-full px-3 py-1.5">{tag}</span>
        <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={panelId}
          className="stage-toggle inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          {open ? "Hide" : "Details"}<ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={panelId} key="details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden">
            <div className="stage-panel mt-4 pt-4">
              <p className="stage-panel-label">Covers</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {details.map((d) => <li key={d} className="stage-chip rounded-md px-2 py-1">{d}</li>)}
              </ul>
              {link && <a href={link[0]} className="stage-link mt-3 inline-flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Explore {link[1]}<ArrowRight className="size-3.5" aria-hidden="true" /></a>}
              {!isLast && <p className="stage-handoff mt-3">Hands off automatically to Stage {String(+no + 1).padStart(2, "0")}.</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
