"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileSignature, FlaskConical, Gauge, KeyRound, ListChecks, RotateCcw, ScanSearch, Server, ShieldCheck } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
// Every step restates capabilities already described in the Pipeline, Scanner, QVS, Deployment and Compliance sections.
const steps = [
  { title: "Discovery", icon: ScanSearch, color: "cyan", text: "Find every certificate, key, and algorithm across applications, APIs, infrastructure, containers, dependencies, binaries, and legacy systems—then map them into a centralized Cryptographic Bill of Materials (CBOM).", link: ["#modules", "Scanner modules"] },
  { title: "Risk Assessment", icon: Gauge, color: "sky", text: "Assign a 0–100 quantum-vulnerability score to each asset and group findings into five decision-ready risk tiers.", link: ["#qvs", "QVS model"] },
  { title: "Migration Planning", icon: ListChecks, color: "indigo", text: "Generate ML-KEM-768, ML-DSA-65 and SLH-DSA migration plans. Select hybrid or PQC-only strategies.", link: ["#pipeline", "PLAN stage"] },
  { title: "Approval", icon: ClipboardCheck, color: "violet", text: "Route critical changes through CAB approval before anything reaches production.", link: ["#pipeline", "PLAN stage"] },
  { title: "Controlled Execution", icon: Server, color: "amber", text: "A secure on-premise agent deploys migrations inside protected and air-gapped networks, behind CI/CD policy gates. Mandatory dry runs and automatic rollback reduce deployment risk.", link: ["#deployment", "Deployment flow"] },
  { title: "Compliance Evidence", icon: FileSignature, color: "emerald", text: "Generate digitally signed evidence reports with trusted timestamps, mapped to applicable CERT-In, RBI and ISO 27001 requirements.", link: ["#compliance", "Compliance mapping"] },
];
const tones = {
  cyan: { text: "text-cyan-700", soft: "bg-cyan-50", border: "border-cyan-200", dot: "bg-cyan-500" },
  sky: { text: "text-sky-700", soft: "bg-sky-50", border: "border-sky-200", dot: "bg-sky-500" },
  indigo: { text: "text-indigo-700", soft: "bg-indigo-50", border: "border-indigo-200", dot: "bg-indigo-500" },
  violet: { text: "text-violet-700", soft: "bg-violet-50", border: "border-violet-200", dot: "bg-violet-500" },
  amber: { text: "text-amber-700", soft: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-500" },
  emerald: { text: "text-emerald-700", soft: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500" },
};
const algorithms = [
  { name: "ML-KEM-768", std: "NIST FIPS 203", role: "Key encapsulation", tone: "cyan" },
  { name: "ML-DSA-65", std: "NIST FIPS 204", role: "Digital signatures", tone: "indigo" },
  { name: "SLH-DSA", std: "NIST FIPS 205", role: "Hash-based signatures", tone: "violet" },
];
const strategies = {
  hybrid: { label: "Hybrid", desc: "Classical and post-quantum algorithms run together during the transition.", lanes: [["Classical", "RSA / ECC"], ["Post-quantum", "ML-KEM · ML-DSA"]] },
  pqc: { label: "PQC-only", desc: "Post-quantum algorithms replace classical cryptography outright.", lanes: [["Post-quantum", "ML-KEM · ML-DSA · SLH-DSA"]] },
};
const safeguards = [
  { icon: ClipboardCheck, label: "CAB approval recorded", tone: "violet" },
  { icon: ShieldCheck, label: "CI/CD policy gate passed", tone: "sky" },
  { icon: FlaskConical, label: "Mandatory dry run completed", tone: "amber" },
  { icon: Server, label: "On-premise agent deploys change", tone: "indigo" },
  { icon: RotateCcw, label: "Automatic rollback armed", tone: "emerald" },
];
export default function MigrationSection() {
  const [active, setActive] = useState(2);
  const [strategy, setStrategy] = useState("hybrid");
  const flowRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, amount: 0.4 });
  const onKeyDown = (e) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + steps.length) % steps.length;
    setActive(next);
    document.getElementById(`mig-tab-${next}`)?.focus();
  };
  const cur = steps[active];
  const t = tones[cur.color];
  const CurIcon = cur.icon;
  return (
    <section id="migration" aria-labelledby="migration-heading" data-native className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(99,102,241,0.08),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(6,182,212,0.08),transparent_30%)]" />
      <div className="relative mx-auto w-full max-w-310">
        <SectionHeader eyebrow="Post-Quantum Migration" id="migration-heading" title="From first scan to signed evidence." accent="Planned, approved, reversible."
          description="KAVACH-Q connects every finding to a migration path: plan with NIST post-quantum algorithms, route critical changes through CAB approval, execute with mandatory dry runs and automatic rollback, then export signed evidence." />
        {/* Workflow stepper */}
        <div ref={flowRef} className="relative mt-10">
          <svg className="pointer-events-none absolute inset-x-[8.33%] top-6 hidden h-2 w-[83.33%] lg:block" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="1" x2="100" y2="1" stroke="#e2e8f0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.line x1="0" y1="1" x2="100" y2="1" stroke="url(#mig-line)" strokeWidth="2" vectorEffect="non-scaling-stroke" initial={{ pathLength: 0 }} animate={{ pathLength: flowInView ? 1 : 0 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} />
            <defs><linearGradient id="mig-line"><stop offset="0" stopColor="#06b6d4" /><stop offset="0.5" stopColor="#6366f1" /><stop offset="1" stopColor="#10b981" /></linearGradient></defs>
          </svg>
          <div role="tablist" aria-label="Migration workflow" onKeyDown={onKeyDown} className="relative grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
            {steps.map(({ title, icon: Icon, color }, i) => {
              const tt = tones[color];
              const on = i === active;
              return (
                <button key={title} id={`mig-tab-${i}`} type="button" role="tab" aria-selected={on} aria-controls="mig-panel" tabIndex={on ? 0 : -1} onClick={() => setActive(i)}
                  className={`group flex flex-col items-center gap-2 rounded-xl px-2 py-2 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:bg-transparent ${on ? `${tt.text} bg-surface-muted` : "text-ink-muted hover:text-ink"}`}>
                  <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={flowInView ? { scale: on ? 1.1 : 1, opacity: 1 } : {}} transition={{ delay: 0.15 + i * 0.18, type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative flex size-12 items-center justify-center rounded-full border-2 bg-surface shadow-card transition-colors ${on ? `${tt.border} ring-4 ring-indigo-100` : "border-line group-hover:border-line-strong"}`}>
                    <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border border-line bg-surface text-[10px] font-black text-ink">{i + 1}</span>
                  </motion.span>
                  <span className="text-xs font-bold leading-tight sm:text-sm">{title}</span>
                </button>
              );
            })}
          </div>
          <div id="mig-panel" role="tabpanel" aria-labelledby={`mig-tab-${active}`} className={`mt-5 rounded-card border bg-surface p-5 shadow-card transition-colors sm:p-6 ${t.border}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl border ${t.border} ${t.soft} ${t.text}`}><CurIcon className="size-6" strokeWidth={1.8} aria-hidden="true" /></span>
                <div className="min-w-0 flex-1">
                  <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${t.text}`}>Step {active + 1} of {steps.length}</p>
                  <h3 className="mt-1 text-xl font-black tracking-tight text-ink">{cur.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">{cur.text}</p>
                </div>
                <a href={cur.link[0]} className={`inline-flex shrink-0 items-center gap-1 self-start rounded-full border px-3 py-1.5 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${t.border} ${t.text}`}>{cur.link[1]}<ArrowRight className="size-3.5" aria-hidden="true" /></a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* Algorithms + strategy */}
          <RevealGroup className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
            <RevealItem as="p" className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">NIST post-quantum algorithms</RevealItem>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {algorithms.map(({ name, std, role, tone }) => (
                <RevealItem key={name} className={`rounded-tile border p-4 transition hover:-translate-y-0.5 hover:shadow-card ${tones[tone].border} ${tones[tone].soft}`}>
                  <KeyRound className={`size-5 ${tones[tone].text}`} strokeWidth={1.9} aria-hidden="true" />
                  <p className="mt-3 font-mono text-sm font-bold text-ink">{name}</p>
                  <p className={`mt-1 text-[11px] font-bold uppercase tracking-[0.12em] ${tones[tone].text}`}>{std}</p>
                  <p className="mt-1 text-xs text-ink-soft">{role}</p>
                </RevealItem>
              ))}
            </div>
            <RevealItem className="mt-5 border-t border-line pt-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-bold text-ink">Migration strategy</p>
                <div className="inline-flex rounded-full border border-line bg-surface-muted p-1" role="group" aria-label="Migration strategy">
                  {Object.entries(strategies).map(([key, { label }]) => (
                    <button key={key} type="button" aria-pressed={strategy === key} onClick={() => setStrategy(key)}
                      className={`relative rounded-full px-3.5 py-1.5 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${strategy === key ? "text-indigo-700" : "text-ink-muted hover:text-ink"}`}>
                      {strategy === key && <motion.span layoutId="strategy-pill" className="absolute inset-0 rounded-full bg-white shadow-card" transition={{ type: "spring", stiffness: 400, damping: 32 }} aria-hidden="true" />}
                      <span className="relative">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{strategies[strategy].desc}</p>
              <div className="mt-3 space-y-2">
                <AnimatePresence initial={false}>
                  {strategies[strategy].lanes.map(([lane, algos]) => (
                    <motion.div key={strategy + lane} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="flex items-center gap-3 rounded-tile border border-line bg-surface-muted px-3 py-2">
                        <span className={`size-2 shrink-0 rounded-full ${lane === "Classical" ? "bg-slate-400" : "bg-indigo-500"}`} aria-hidden="true" />
                        <span className="w-30 shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">{lane}</span>
                        <span className="min-w-0 font-mono text-xs text-ink">{algos}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </RevealItem>
          </RevealGroup>
          {/* Execution safeguards (illustrative change flow) */}
          <RevealGroup stagger={0.16} delay={0.1} className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
            <RevealItem className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Controlled execution safeguards</p>
              <span className="rounded-full border border-amber-300/60 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">Illustrative change flow</span>
            </RevealItem>
            <ol className="relative mt-5 space-y-3">
              <span className="absolute bottom-4 left-4.75 top-4 w-px bg-line" aria-hidden="true" />
              {safeguards.map(({ icon: Icon, label, tone }) => (
                <RevealItem as="li" key={label} y={10} className="relative flex items-center gap-3">
                  <span className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border bg-surface ${tones[tone].border} ${tones[tone].text}`}><Icon className="size-4.5" strokeWidth={1.9} aria-hidden="true" /></span>
                  <span className="flex flex-1 items-center justify-between gap-3 rounded-lg border border-line bg-surface-muted px-3 py-2.5">
                    <span className="text-sm font-semibold text-ink">{label}</span>
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  </span>
                </RevealItem>
              ))}
            </ol>
            <RevealItem as="p" className="mt-4 text-xs leading-5 text-ink-muted">Sequence shown to illustrate how safeguards apply to a single change; it is not live deployment activity.</RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
