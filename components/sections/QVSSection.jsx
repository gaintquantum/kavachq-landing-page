"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ArrowRight, Building2, Calculator, Database, FileBadge2, GitBranch, Gauge, ListChecks, Lock, Radar, ScanSearch, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
const tones = {
  cyan: { card: "border-cyan-200 bg-cyan-50 hover:border-cyan-300 hover:bg-cyan-100", chip: "border border-cyan-300 bg-cyan-100 text-cyan-700", text: "text-cyan-700" },
  blue: { card: "border-blue-200 bg-blue-50 hover:border-blue-300 hover:bg-blue-100", chip: "border border-blue-300 bg-blue-100 text-sky-700", text: "text-sky-700" },
  violet: { card: "border-violet-200 bg-violet-50 hover:border-violet-300 hover:bg-violet-100", chip: "border border-violet-300 bg-violet-100 text-violet-700", text: "text-violet-700" },
  emerald: { card: "border-emerald-200 bg-emerald-50 hover:border-emerald-300 hover:bg-emerald-100", chip: "border border-emerald-300 bg-emerald-100 text-emerald-700", text: "text-emerald-700" },
  amber: { card: "border-amber-200 bg-amber-50 hover:border-amber-300 hover:bg-amber-100", chip: "border border-amber-300 bg-amber-100 text-amber-700", text: "text-amber-700" },
};
const riskTiers = [
  { label: "CRITICAL", action: "Immediate remediation", color: "text-red-700", border: "border-red-200 hover:border-red-300", bg: "bg-red-50", bar: "bg-red-400" },
  { label: "HIGH", action: "Priority remediation", color: "text-orange-700", border: "border-orange-200 hover:border-orange-300", bg: "bg-orange-50", bar: "bg-orange-400" },
  { label: "MEDIUM", action: "Planned remediation", color: "text-yellow-700", border: "border-yellow-200 hover:border-yellow-300", bg: "bg-yellow-50", bar: "bg-yellow-400" },
  { label: "LOW", action: "Monitor & schedule", color: "text-emerald-700", border: "border-emerald-200 hover:border-emerald-300", bg: "bg-emerald-50", bar: "bg-emerald-400" },
  { label: "NEGLIGIBLE", action: "Monitor", color: "text-cyan-700", border: "border-cyan-200 hover:border-cyan-300", bg: "bg-cyan-50", bar: "bg-cyan-400" },
];
const assessmentFactors = [
  { title: "Cryptographic Posture", text: "Evaluates the security characteristics and resilience of cryptographic assets against emerging quantum threats.", color: "cyan", icon: Lock },
  { title: "Security Exposure", text: "Considers how cryptographic assets are exposed across systems, services, infrastructure and external interfaces.", color: "blue", icon: Radar },
  { title: "Data Sensitivity", text: "Accounts for the sensitivity and long-term value of information protected by cryptographic assets.", color: "violet", icon: Database },
  { title: "Environmental Context", text: "Considers the operational and business context surrounding each cryptographic asset.", color: "emerald", icon: Building2 },
  { title: "Migration Complexity", text: "Considers the practical complexity and effort involved in transitioning affected assets.", color: "amber", icon: GitBranch },
];
const engine = [
  { label: "Assessment Context", value: "Cryptographic + Environment Signals", box: "border-line bg-surface-muted", labelColor: "text-ink-soft", icon: Workflow },
  { label: "Proprietary Engine", value: "Weighted Risk Methodology", box: "border-violet-200 bg-violet-50", labelColor: "text-violet-700", icon: Calculator },
  { label: "Output", value: "QVS · 0–100", box: "border-cyan-200 bg-cyan-50", labelColor: "text-cyan-700", icon: Gauge },
];
const flow = [
  { step: "Discover", title: "Scan Everything", text: "Repositories, certificates, binaries, infrastructure, containers and cryptographic assets across the enterprise.", color: "cyan", icon: ScanSearch },
  { step: "Analyse", title: "Calculate Risk", text: "Evaluate cryptographic, exposure, data and environmental context using the QVS methodology.", color: "violet", icon: Calculator },
  { step: "Prioritise", title: "Take Action", text: "Classify findings by risk and generate migration priorities with clear remediation guidance.", color: "emerald", icon: ListChecks },
];
export default function PatentedScoring() {
  return (
    <section id="qvs" aria-labelledby="qvs-heading" data-native className="relative scroll-mt-24 overflow-hidden px-4 py-16 text-ink sm:px-8 lg:px-10 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-24 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />
        <div className="absolute bottom-24 right-1/4 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-310">
        <SectionHeader size="display" id="qvs-heading" title="The QVS Assessment Model —" accent="quantum risk in one number."
          description="Every cryptographic asset receives a Quantum Vulnerability Score between 0 and 100 — computed using a proprietary scoring methodology and environment-aware risk multipliers.">
        </SectionHeader>
        <Reveal className="mt-10 rounded-3xl border border-cyan-200 bg-surface p-5 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black">QVS Assessment Model</p>
            <h3 className="mt-3 text-balance text-2xl font-black text-ink sm:text-3xl lg:text-4xl">Multi-factor quantum risk assessment</h3>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-7 text-ink-soft md:text-base">
              QVS combines cryptographic, exposure, data and environmental signals through a proprietary weighted methodology to produce a normalized risk score from 0 to 100.
            </p>
          </div>
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {assessmentFactors.map(({ title, text, color, icon: Icon }, i) => (
              <RevealItem as="article" key={title} className={`flex h-full flex-col rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 motion-reduce:transform-none ${tones[color].card} ${i === assessmentFactors.length - 1 ? "sm:col-span-2 xl:col-span-1" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className={`flex size-10 items-center justify-center rounded-xl ${tones[color].chip}`}>
                    <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className={`text-sm font-black tracking-[0.2em] ${tones[color].text}`} aria-hidden="true">0{i + 1}</span>
                </div>
                <h4 className="mt-4 text-lg font-black leading-snug text-ink">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal as="ol" delay={0.15} className="mt-8 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]" aria-label="QVS assessment flow">
            {engine.map(({ label, value, box, labelColor, icon: Icon }, i) => (
              <li key={label} className="contents">
                <div className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 ${box}`}>
                  <Icon className={`size-5 shrink-0 ${labelColor}`} strokeWidth={1.8} aria-hidden="true" />
                  <div className="min-w-0">
                    <p className={`text-[11px] font-bold uppercase tracking-widest ${labelColor}`}>{label}</p>
                    <p className="mt-0.5 font-bold text-ink">{value}</p>
                  </div>
                </div>
                {i < engine.length - 1 && (
                  <span className="flex items-center justify-center text-cyan-700" aria-hidden="true">
                    <ArrowRight className="size-5 rotate-90 md:rotate-0" strokeWidth={2.2} />
                  </span>
                )}
              </li>
            ))}
          </Reveal>
          <QvsSample />
        </Reveal>
        <div className="mt-10">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">QVS Assessment Pipeline</p>
          <RevealGroup className="grid gap-4 md:grid-cols-3">
            {flow.map(({ step, title, text, color, icon: Icon }) => (
              <RevealItem as="article" key={step} className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 motion-reduce:transform-none ${tones[color].card}`}>
                <div className="flex items-center gap-3">
                  <span className={`flex size-9 items-center justify-center rounded-lg ${tones[color].chip}`}>
                    <Icon className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className={`text-sm font-bold uppercase tracking-[0.25em] ${tones[color].text}`}>{step}</span>
                </div>
                <h4 className="mt-4 text-xl font-black text-ink lg:text-2xl">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <div className="mt-12">
          <h3 className="text-center text-2xl font-black text-ink sm:text-3xl">Risk Tiers & Response Priority</h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-ink-soft">
            QVS findings are grouped into risk tiers to help security teams prioritize remediation and migration activities.
          </p>
          <RevealGroup as="ol" className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="QVS risk tiers, highest to lowest">
            {riskTiers.map((tier, i) => (
              <RevealItem as="li" key={tier.label} className={`relative flex h-full flex-col overflow-hidden rounded-card border ${tier.border} ${tier.bg} px-5 pb-5 pt-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.10)] motion-reduce:transform-none ${i === riskTiers.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <span className={`absolute inset-x-0 top-0 h-1 ${tier.bar}`} aria-hidden="true" />
                <h4 className={`text-lg font-black tracking-wide ${tier.color}`}>{tier.label}</h4>
                <p className="mt-1.5 text-sm leading-6 text-ink-soft">{tier.action}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
// Illustrative gauge: replays the scored DEMO TENANT findings from the live scanner demo. No tier thresholds are implied.
const sampleFindings = [
  { id: "M1", label: "RSA-2048", where: "PaymentGateway.java:142", detail: "method: RSAKey.generate(2048) · AST · HIGH", score: 91, tier: "CRITICAL", note: "Demo SLA: 30 days" },
  { id: "M6", label: "Legacy PDF · DES-56", where: "Bank_Sandbox_01_Mainframe.pdf", detail: "Document analysis: DES-56 on p.14 · HIGH", score: 98, tier: "CRITICAL", note: "Demo plan triggered" },
];
const tierChip = { CRITICAL: "border-red-300 bg-red-50 text-red-700", HIGH: "border-orange-300 bg-orange-50 text-orange-700", MEDIUM: "border-yellow-300 bg-yellow-50 text-yellow-700", LOW: "border-emerald-300 bg-emerald-50 text-emerald-700", NEGLIGIBLE: "border-cyan-300 bg-cyan-50 text-cyan-700" };
const ARC = "M26.06 93.94 A48 48 0 1 1 93.94 93.94";
function QvsSample() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [touched, setTouched] = useState(false);
  const value = useMotionValue(0);
  const shown = useTransform(value, (v) => Math.round(v));
  const progress = useTransform(value, (v) => v / 100);
  const f = sampleFindings[idx];
  useEffect(() => {
    if (!inView) return;
    const c = animate(value, f.score, reduce ? { duration: 0 } : { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    return () => c.stop();
  }, [inView, f.score, reduce, value]);
  useEffect(() => {
    if (!inView || touched || reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % sampleFindings.length), 5000);
    return () => clearInterval(t);
  }, [inView, touched, reduce]);
  return (
    <div ref={ref} className="mt-6 grid items-center gap-6 rounded-card border border-line bg-surface p-5 shadow-card sm:p-6 md:grid-cols-[auto_1fr]">
      <div className="relative mx-auto size-44 sm:size-48" role="img" aria-label={`Illustrative QVS ${f.score} of 100, ${f.tier}`}>
        <svg viewBox="0 0 120 120" className="size-full" aria-hidden="true">
          <defs><linearGradient id="qvs-arc" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stopColor="#10b981" /><stop offset="0.5" stopColor="#f59e0b" /><stop offset="1" stopColor="#ef4444" /></linearGradient></defs>
          <path d={ARC} fill="none" stroke="#e2e8f0" strokeWidth="10" strokeLinecap="round" />
          <motion.path d={ARC} fill="none" stroke="url(#qvs-arc)" strokeWidth="10" strokeLinecap="round" style={{ pathLength: progress }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2" aria-hidden="true">
          <motion.span className="font-display text-4xl leading-none text-ink">{shown}</motion.span>
          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted">QVS · 0–100</span>
          <span className={`mt-2 rounded-full border px-2.5 py-0.5 text-[10px] font-black tracking-wider ${tierChip[f.tier]}`}>{f.tier}</span>
        </div>
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">Sample output</p>
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">Illustrative · Demo tenant · Not customer data</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Sample findings">
          {sampleFindings.map((s, i) => (
            <button key={s.id} type="button" aria-pressed={i === idx} onClick={() => { setTouched(true); setIdx(i); }}
              className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${i === idx ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-line text-ink-soft hover:bg-surface-muted"}`}>[{s.id}] {s.label}</button>
          ))}
        </div>
        <dl className="mt-4 grid gap-x-6 gap-y-2 font-mono text-[13px] sm:grid-cols-[auto_1fr]">
          <dt className="text-ink-muted">Asset</dt><dd className="min-w-0 wrap-break-word text-ink">{f.where}</dd>
          <dt className="text-ink-muted">Evidence</dt><dd className="min-w-0 wrap-break-word text-ink-soft">{f.detail}</dd>
          <dt className="text-ink-muted">Result</dt><dd className="text-ink-soft">QVS {f.score} → {f.tier} · {f.note}</dd>
        </dl>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="QVS risk tiers">
          {Object.keys(tierChip).map((t) => (
            <li key={t} className={`rounded-full border px-2.5 py-1 text-[10px] font-black tracking-wider transition ${t === f.tier ? `${tierChip[t]} shadow-card` : "border-line text-ink-muted"}`}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
