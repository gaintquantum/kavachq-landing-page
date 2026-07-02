"use client";

import {
  BadgeCheck,
  Banknote,
  Landmark,
  ShieldCheck,
} from "lucide-react";

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
  {
    title: "CERT-IN",
    subtitle: "Cyber Security Framework",
    desc: "Crypto Policy, TLS Guidelines, PKI Guidelines, PQC Advisory, Hash Standards, SDLC Security, and Audit Framework.",
    icon: ShieldCheck,
    tone: "cyan",
  },
  {
    title: "RBI",
    subtitle: "IT & Cyber Security Framework",
    desc: "IT Framework, Cyber Security, PKI Policy, SDLC, and Future-Ready Security guidelines prepared for inspection.",
    icon: Banknote,
    tone: "amber",
  },
  {
    title: "ISO 27001:2022",
    subtitle: "Annex A Controls",
    desc: "A.10.1.1, A.10.1.2, A.14.1.2, and A.12.4.1 mapped automatically per finding.",
    icon: BadgeCheck,
    tone: "emerald",
  },
  {
    title: "MeitY NQM · DPDPA",
    subtitle: "India regulatory coverage",
    desc: "National Quantum Mission guidance and DPDPA 2023 Section 8(5) personal data protection requirements.",
    icon: Landmark,
    tone: "violet",
  },
];

const severityClass = {
  CRITICAL: "border-red-300/25 bg-red-500/15 text-red-200",
  HIGH: "border-orange-300/25 bg-orange-500/15 text-orange-100",
  MEDIUM: "border-amber-300/25 bg-amber-500/15 text-amber-100",
};

export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="relative scroll-mt-20 overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-position-[44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(16,185,129,0.1),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            Stage 6 · Comply
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Legally defensible reports.
            <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
              Zero manual mapping.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/78">
            Claude Citations API maps every finding to the relevant regulatory
            clause, page, and section. Reports are digitally signed, timestamped,
            and archived for audit review.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {frameworks.map((framework) => (
              <FrameworkCard key={framework.title} framework={framework} />
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-cyan-100/15 bg-slate-950/72 shadow-[0_28px_90px_rgba(2,8,23,0.3)] backdrop-blur-xl">
            <div className="border-b border-white/10 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/65">
                  Compliance Mapping Matrix
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                  Findings with clause-level traceability
                </h3>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="bg-white/[0.04]">
                    {["Finding", "CERT-IN", "RBI Clause", "Severity"].map((head) => (
                      <th
                        key={head}
                        className="border-b border-white/10 px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-100/62"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map(([finding, cert, rbi, severity]) => (
                    <tr
                      key={finding}
                      className="transition duration-200 hover:bg-cyan-300/[0.065]"
                    >
                      <td className="border-b border-white/[0.07] px-5 py-4 text-sm font-semibold text-white">
                        <div className="flex items-center gap-3">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                          <span>{finding}</span>
                        </div>
                      </td>
                      <td className="border-b border-white/[0.07] px-5 py-4 text-sm text-slate-300">
                        {cert}
                      </td>
                      <td className="border-b border-white/[0.07] px-5 py-4 text-sm text-slate-300">
                        {rbi}
                      </td>
                      <td className="border-b border-white/[0.07] px-5 py-4">
                        <span
                          className={`inline-flex min-w-20 justify-center rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-wider ${severityClass[severity]}`}
                        >
                          {severity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkCard({ framework }) {
  const Icon = framework.icon;
  const tone = getTone(framework.tone);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-cyan-100/15 bg-slate-950/58 p-5 shadow-[0_18px_60px_rgba(2,8,23,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35">
      <div className={`absolute inset-y-0 left-0 w-1 ${tone.bar}`} />

      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-lg ring-1 ring-white/10 ${tone.iconBox}`}
        >
          <Icon className={`h-6 w-6 ${tone.icon}`} strokeWidth={1.85} />
        </div>

        <div className="min-w-0">
          <p className={`text-xs font-bold uppercase tracking-[0.2em] ${tone.kicker}`}>
            {framework.subtitle}
          </p>
          <h3 className="mt-2 text-xl font-black tracking-tight text-white">
            {framework.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {framework.desc}
          </p>
        </div>
      </div>
    </article>
  );
}

function getTone(tone) {
  const tones = {
    cyan: {
      bar: "bg-cyan-300",
      icon: "text-cyan-200",
      iconBox: "border-cyan-300/35 bg-cyan-300/15 shadow-cyan-300/20",
      kicker: "text-cyan-100/70",
    },
    amber: {
      bar: "bg-amber-300",
      icon: "text-amber-200",
      iconBox: "border-amber-300/35 bg-amber-300/15 shadow-amber-300/20",
      kicker: "text-amber-100/70",
    },
    emerald: {
      bar: "bg-emerald-300",
      icon: "text-emerald-200",
      iconBox: "border-emerald-300/35 bg-emerald-300/15 shadow-emerald-300/20",
      kicker: "text-emerald-100/70",
    },
    violet: {
      bar: "bg-violet-300",
      icon: "text-violet-200",
      iconBox: "border-violet-300/35 bg-violet-300/15 shadow-violet-300/20",
      kicker: "text-violet-100/70",
    },
  };

  return tones[tone] ?? tones.cyan;
}
