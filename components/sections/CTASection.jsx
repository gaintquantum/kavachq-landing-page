import { ArrowRight, FileSearch, Workflow } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { demoRequestHref } from "@/lib/demoRequest";
const stats = [["Asset-Level", "Cryptographic Visibility"], ["QVS", "Quantum Risk Scoring"], ["24h", "Compliance Report"]];
export default function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-heading" data-native className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal className="border-glow animate-border-spin relative overflow-hidden rounded-panel shadow-glow">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(6,182,212,0.10),transparent_35%),radial-gradient(circle_at_95%_90%,rgba(99,102,241,0.10),transparent_35%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size-[36px_36px] mask-[radial-gradient(ellipse_at_left,black,transparent_70%)]" aria-hidden="true" />
          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
            <div>
              <Eyebrow variant="line">Start Today</Eyebrow>
              <h2 id="cta-heading" className="mt-4 max-w-3xl text-title font-black tracking-tight text-ink">
                India&apos;s quantum clock <span className="text-gradient block">is ticking.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lead">
                Start your crypto inventory today. KAVACH-Q gives you a complete cryptographic posture report, QVS scores for every asset, and a CERT-IN aligned remediation roadmap.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={demoRequestHref} className="visit-kavachq-button group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-6 text-sm font-bold text-white shadow-[0_10px_28px_rgba(66,133,244,0.32)] transition hover:-translate-y-0.5 hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transform-none">
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100 motion-reduce:hidden" aria-hidden="true" />
                  Request a Demo<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a href="#compliance" className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line-strong bg-white px-6 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transform-none">
                  <FileSearch className="size-4" aria-hidden="true" />View Sample Report<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a href="#deployment" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line-strong bg-white px-6 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transform-none">
                  <Workflow className="size-4" aria-hidden="true" />View Deployment Flow
                </a>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-6 text-ink-muted">Alert: 4h · Report: 24h · Remediation SLA: 30 days</p>
            </div>
            <RevealGroup delay={0.2} className="grid content-start gap-3">
              {stats.map(([value, label]) => (
                <RevealItem key={label} className="group rounded-tile border border-line bg-white/80 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-card motion-reduce:transform-none">
                  <p className="text-gradient font-display text-3xl leading-tight sm:text-4xl">{value}</p>
                  <p className="mt-1.5 text-sm font-semibold text-ink-soft">{label}</p>
                </RevealItem>
              ))}
              <RevealItem className="rounded-tile border border-emerald-200 bg-emerald-50 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">CERT-IN • RBI • ISO 27001 • NIST PQC • DPDPA 2023</RevealItem>
            </RevealGroup>
          </div>
          <div className="relative border-t border-line px-6 py-5 text-center sm:px-10 lg:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Built in India. For India.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
