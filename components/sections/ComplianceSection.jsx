"use client";
import { useState } from "react";
import { BadgeCheck, Banknote, Info, Landmark, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
const rows = [
  ["RSA-1024 in production", "Crypto Policy §3.1", "IT Framework §5.2", "CRITICAL"],
  ["RSA-2048 in production", "Crypto Policy §3.1", "IT Framework §5.2", "HIGH"],
  ["TLS < 1.3 enabled", "TLS Guidelines §2.4", "Cyber Sec §4.1", "HIGH"],
  ["No PQC migration plan", "PQC Advisory §1.3", "Future-Ready §3.2", "HIGH"],
  ["Expired certificates", "PKI Guidelines §5.1", "PKI Policy §7.3", "CRITICAL"],
  ["SHA-1 in use", "Hash Standards §4.2", "Crypto Baseline §2.1", "HIGH"],
  ["Hardcoded keys in source", "SDLC Security §4.3", "SDLC Framework §3.1", "CRITICAL"],
  ["DPDPA data unencrypted", "—", "Data Privacy §2.3", "CRITICAL"],
  ["ECDH without PQC upgrade", "PQC Advisory §2.1", "Future-Ready §3.4", "MEDIUM"],
];
const frameworks = [
  { title: "CERT-IN", subtitle: "Cyber Security Framework", desc: "Crypto Policy, TLS Guidelines, PKI Guidelines, PQC Advisory, Hash Standards, SDLC Security, and Audit Framework.", icon: ShieldCheck, tone: "cyan", column: 1 },
  { title: "RBI", subtitle: "IT & Cyber Security Framework", desc: "IT Framework, Cyber Security, PKI Policy, SDLC, and Future-Ready Security guidelines prepared for inspection.", icon: Banknote, tone: "amber", column: 2 },
  { title: "ISO 27001:2022", subtitle: "Annex A Controls", desc: "A.10.1.1, A.10.1.2, A.14.1.2, and A.12.4.1 mapped automatically per finding.", icon: BadgeCheck, tone: "emerald" },
  { title: "MeitY NQM · DPDPA", subtitle: "India regulatory coverage", desc: "National Quantum Mission guidance and DPDPA 2023 Section 8(5) personal data protection requirements.", icon: Landmark, tone: "violet" },
];
const severityClass = {
  CRITICAL: "border-red-200 bg-red-50 text-red-700",
  HIGH: "border-orange-200 bg-orange-50 text-orange-700",
  MEDIUM: "border-amber-200 bg-amber-50 text-amber-700",
};
const tones = {
  cyan: { bar: "bg-cyan-300", icon: "text-cyan-700", iconBox: "border-cyan-200 bg-cyan-50", kicker: "text-cyan-700", card: "border-cyan-200 hover:border-cyan-300" },
  amber: { bar: "bg-amber-300", icon: "text-amber-700", iconBox: "border-amber-200 bg-amber-50", kicker: "text-amber-700", card: "border-amber-200 hover:border-amber-300" },
  emerald: { bar: "bg-emerald-300", icon: "text-emerald-700", iconBox: "border-emerald-200 bg-emerald-50", kicker: "text-emerald-700", card: "border-emerald-200 hover:border-emerald-300" },
  violet: { bar: "bg-violet-300", icon: "text-violet-700", iconBox: "border-violet-200 bg-violet-50", kicker: "text-violet-700", card: "border-violet-200 hover:border-violet-300" },
};
const heads = [["Finding", "w-[32%]"], ["CERT-IN", "w-[24%]"], ["RBI Clause", "w-[24%]"], ["Severity", "w-[20%]"]];
// Cards and matrix use the radius tokens (rounded-card/panel), which the global light-theme card override doesn't target.
export default function ComplianceSection() {
  // Hovering/focusing CERT-IN or RBI highlights its column in the matrix.
  const [focusCol, setFocusCol] = useState(null);
  const colClass = (c) => (focusCol === c ? "bg-cyan-50/80 transition-colors" : "transition-colors");
  return (
    <section id="compliance" aria-labelledby="compliance-heading" data-native className="relative scroll-mt-24 overflow-hidden px-4 py-16 text-ink sm:px-8 lg:px-10 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/45 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/25 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-330">
        <SectionHeader align="left" eyebrow="Stage 6 · Comply" id="compliance-heading" title="Legally defensible reports." accent="Zero manual mapping."
          description="Claude Citations API maps every finding to the relevant regulatory clause, page, and section. Reports are digitally signed, timestamped, and archived for audit review." />
        <div className="mt-10 grid items-start gap-5 xl:grid-cols-[36fr_64fr] xl:gap-6">
          <RevealGroup className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {frameworks.map((f) => <FrameworkCard key={f.title} framework={f} highlighted={f.column && focusCol === f.column} onHighlight={setFocusCol} />)}
          </RevealGroup>
          <Reveal delay={0.1} className="min-w-0 overflow-hidden rounded-panel border border-cyan-200 bg-surface shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Compliance Mapping Matrix</p>
                <h3 className="mt-1.5 text-xl font-black tracking-tight text-ink sm:text-2xl">Findings with clause-level traceability</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-amber-700">
                <Info className="size-3.5" aria-hidden="true" />Illustrative sample
              </span>
            </div>
            <div className="overflow-x-auto focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-300" tabIndex={0} role="region" aria-label="Compliance mapping matrix (scrollable)">
              <table className="w-full min-w-145 table-fixed border-collapse">
                <caption className="sr-only">Illustrative sample findings mapped to CERT-In and RBI clauses with severity</caption>
                <thead>
                  <tr className="bg-surface-muted">
                    {heads.map(([head, w], c) => (
                      <th key={head} scope="col" className={`${w} ${colClass(c)} border-b border-line px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-700 sm:px-5`}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <RevealGroup as="tbody" stagger={0.05} delay={0.25}>
                  {rows.map(([finding, cert, rbi, severity]) => (
                    <RevealItem as="tr" y={8} key={finding} className="transition-colors duration-200 hover:bg-cyan-100">
                      <th scope="row" className="border-b border-line px-4 py-3 text-left align-middle text-[13px] font-semibold text-ink sm:px-5 sm:text-sm">
                        <span className="flex items-center gap-2.5">
                          <span className="size-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" aria-hidden="true" />
                          <span className="min-w-0 wrap-break-word">{finding}</span>
                        </span>
                      </th>
                      <td className={`wrap-break-word border-b border-line px-4 py-3 align-middle text-[13px] leading-5 text-ink-soft sm:px-5 sm:text-sm ${colClass(1)}`}>{cert}</td>
                      <td className={`wrap-break-word border-b border-line px-4 py-3 align-middle text-[13px] leading-5 text-ink-soft sm:px-5 sm:text-sm ${colClass(2)}`}>{rbi}</td>
                      <td className="border-b border-line px-4 py-3 align-middle sm:px-5">
                        <span className={`inline-flex w-22 justify-center rounded-full border py-1 text-[11px] font-black uppercase tracking-wider ${severityClass[severity]}`}>{severity}</span>
                      </td>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </table>
            </div>
            <p id="matrix-hint" className="px-5 py-3 text-xs leading-5 text-ink-muted">Sample findings and clause references shown to illustrate the mapping format.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function FrameworkCard({ framework: { title, subtitle, desc, icon: Icon, tone, column }, highlighted, onHighlight }) {
  const t = tones[tone];
  const link = column ? { tabIndex: 0, onMouseEnter: () => onHighlight(column), onMouseLeave: () => onHighlight(null), onFocus: () => onHighlight(column), onBlur: () => onHighlight(null), "aria-describedby": "matrix-hint" } : {};
  return (
    <RevealItem as="article" {...link} className={`relative h-full overflow-hidden rounded-card border bg-white p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${highlighted ? "ring-2 ring-cyan-300" : ""} shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)] motion-reduce:transform-none sm:p-5 ${t.card}`}>
      <div className={`absolute inset-y-0 left-0 w-1 ${t.bar}`} aria-hidden="true" />
      <div className="flex items-start gap-4">
        <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${t.iconBox}`}>
          <Icon className={`size-5 ${t.icon}`} strokeWidth={1.85} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${t.kicker}`}>{subtitle}</p>
          <h3 className="mt-1 text-lg font-black tracking-tight text-ink">{title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-ink-soft">{desc}</p>
          {column && <p className="mt-2 hidden text-xs font-semibold text-cyan-700 xl:block">Highlights its column in the mapping matrix →</p>}
        </div>
      </div>
    </RevealItem>
  );
}
