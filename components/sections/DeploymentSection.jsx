"use client";

import {
  Building2,
  FileCheck2,
  KeyRound,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

export default function DeploymentSection() {
  const steps = [
    {
      no: "01",
      title: "Tenant & Access",
      description:
        "Configure the organization tenant, RBAC roles, SSO, data residency, retention policy, and immutable audit logging before scans begin.",
      icon: Building2,
      tone: "cyan",
    },
    {
      no: "02",
      title: "Connect Assets",
      description:
        "Register repositories, servers, APIs, binaries, TLS endpoints, SBOMs, and internal environments with scoped credentials or private connectors.",
      icon: KeyRound,
      tone: "emerald",
    },
    {
      no: "03",
      title: "Scan & Score",
      description:
        "All 7 scanner modules run against internal targets. QVS scores computed in real time. CRITICAL findings trigger CISO alerts within 4 hours. Coverage report flags <98% gaps.",
      icon: ScanSearch,
      tone: "violet",
    },
    {
      no: "04",
      title: "Enforce & Report",
      description:
        "Use CI/CD policy gates, dry-run migration controls, owner assignments, and compliance exports for CERT-IN, RBI, ISO 27001, and internal audits.",
      icon: FileCheck2,
      tone: "amber",
    },
  ];

  return (
    <section
      id="deployment"
      className="relative scroll-mt-20 overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-position-[44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(251,191,36,0.1),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
            <span className="h-px w-6 bg-cyan-300" />
            Secure Deployment
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Built for private
            <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
              national-scale rollout.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/78">
            KAVACH-Q is deployed as a controlled platform for government and
            regulated institutions: tenant isolation, SSO, data residency,
            scoped asset discovery, QVS scoring, migration controls, and
            audit-ready compliance evidence.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 h-full border-l-2 border-dashed border-cyan-100/50 shadow-[0_0_22px_rgba(103,232,249,0.22)] xl:left-0 xl:right-0 xl:top-11 xl:h-px xl:border-l-0 xl:border-t-2" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.no}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, isLast }) {
  const Icon = step.icon;
  const tone = getTone(step.tone);

  return (
    <article className="group relative rounded-3xl border border-cyan-100/15 bg-slate-950/68 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-slate-950/82">
      {!isLast && (
        <div className="absolute left-8 top-20 h-[calc(100%+1.25rem)] border-l-2 border-dashed border-cyan-100/50 shadow-[0_0_18px_rgba(103,232,249,0.22)] xl:hidden" />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border shadow-lg ring-1 ring-white/10 ${tone.iconBox}`}
          >
            <Icon className={`h-7 w-7 ${tone.icon}`} strokeWidth={1.8} />
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-[#1f4a75] text-sm font-black text-cyan-100 shadow-[0_0_0_8px_rgba(31,74,117,0.95)]">
            {step.no}
          </div>
        </div>

        <h3 className="mt-8 text-xl font-black tracking-tight text-white">
          {step.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {step.description}
        </p>
      </div>
    </article>
  );
}

function getTone(tone) {
  const tones = {
    cyan: {
      icon: "text-cyan-200",
      iconBox: "border-cyan-300/35 bg-cyan-300/15 shadow-cyan-300/20",
    },
    emerald: {
      icon: "text-emerald-200",
      iconBox: "border-emerald-300/35 bg-emerald-300/15 shadow-emerald-300/20",
    },
    violet: {
      icon: "text-violet-200",
      iconBox: "border-violet-300/35 bg-violet-300/15 shadow-violet-300/20",
    },
    amber: {
      icon: "text-amber-200",
      iconBox: "border-amber-300/35 bg-amber-300/15 shadow-amber-300/20",
    },
  };

  return tones[tone] ?? tones.cyan;
}
