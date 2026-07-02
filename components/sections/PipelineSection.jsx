"use client";

import {
  ArrowRight,
  FileCheck2,
  Gauge,
  ListChecks,
  Rocket,
  ScanSearch,
  Workflow,
} from "lucide-react";

export default function AutomationStages() {
  const stages = [
    {
      no: "01",
      title: "SCAN",
      desc: "7-module cryptographic discovery across code, TLS, binaries, K8s Secrets, infra, dependencies, and legacy PDFs via Claude Vision AI.",
      tag: "FR-1.1 → FR-1.7",
      color: "cyan",
      icon: ScanSearch,
    },
    {
      no: "02",
      title: "QUEUE",
      desc: "Kafka 3.5 async pipeline. API returns scan_id in <2s. Celery workers with 3-tier priority queues scale to national deployment. Dead Letter Queue — no silent failures.",
      tag: "Kafka · Celery · Redis",
      color: "blue",
      icon: Workflow,
    },
    {
      no: "03",
      title: "SCORE",
      desc: "QVS Engine: NumPy-vectorised scoring of every finding. Five decision-ready tiers. Claude Batch API explains each score in plain language.",
      tag: "Risk Scoring · QVS Engine",
      color: "violet",
      icon: Gauge,
    },
    {
      no: "04",
      title: "PLAN",
      desc: "liboqs generates ML-KEM-768, ML-DSA-65, SPHINCS+ key artifacts. Hybrid or PQC-Only strategy per asset. CAB approval workflow. Claude Extended Thinking for critical decisions.",
      tag: "NIST FIPS 203/204/205",
      color: "emerald",
      icon: ListChecks,
    },
    {
      no: "05",
      title: "EXECUTE",
      desc: "Go on-premise agent (<20MB, mTLS) deploys inside air-gapped networks. OPA Policy-as-Code blocks vulnerable crypto in every PR. Mandatory dry-run. Auto-rollback on failure.",
      tag: "OPA · mTLS · Zero-Touch",
      color: "amber",
      icon: Rocket,
    },
    {
      no: "06",
      title: "COMPLY",
      desc: "Digitally signed PDFs with RFC 3161 timestamp. Claude Citations API maps every finding to CERT-IN, RBI, ISO 27001 clauses with exact page references. 10-year immutable archive.",
      tag: "CERT-IN · RBI · ISO 27001",
      color: "rose",
      icon: FileCheck2,
    },
  ];

  return (
    <section
      id="pipeline"
      className="relative overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-position-[44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            End-to-End Automation
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Six stages. One platform.
            <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
              Zero quantum blindspots.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Each stage hands off to the next automatically — scan, prioritise,
            score, plan, execute, and prove compliance — without manual
            intervention at any step.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <StageCard key={stage.no} stage={stage} isLast={index === stages.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageCard({ stage, isLast }) {
  const Icon = stage.icon;
  const tone = getTone(stage.color);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-cyan-100/15 bg-slate-950/70 p-6 shadow-[0_22px_70px_rgba(2,8,23,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-slate-950/85">
      <div className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`} />
      <div className={`absolute right-5 top-5 text-7xl font-black ${tone.watermark}`}>
        {stage.no}
      </div>

      {!isLast && (
        <div className="absolute right-5 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/15 bg-white/5 text-cyan-100/70 lg:flex">
          <ArrowRight className="h-4 w-4" />
        </div>
      )}

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg shadow-black/20 ring-1 ring-white/10 transition duration-300 group-hover:scale-105 ${tone.iconBox}`}
          >
            <Icon className={`h-7 w-7 ${tone.icon}`} strokeWidth={1.8} />
          </div>

          <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${tone.badge}`}>
            Stage {stage.no}
          </span>
        </div>

        <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
          {stage.title}
        </h3>

        <p className="mt-4 min-h-32 text-sm leading-7 text-slate-300">
          {stage.desc}
        </p>

        <div className={`mt-6 inline-flex max-w-full rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide ${tone.tag}`}>
          {stage.tag}
        </div>
      </div>
    </article>
  );
}

function getTone(color) {
  const tones = {
    cyan: {
      bar: "bg-cyan-300",
      icon: "text-cyan-200",
      iconBox:
        "border-cyan-300/35 bg-cyan-300/15 shadow-cyan-300/20",
      badge: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
      tag: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
      watermark: "text-cyan-100/5",
    },
    blue: {
      bar: "bg-sky-400",
      icon: "text-sky-200",
      iconBox:
        "border-sky-300/35 bg-sky-300/15 shadow-sky-300/20",
      badge: "border-sky-300/25 bg-sky-300/10 text-sky-100",
      tag: "border-sky-300/25 bg-sky-300/10 text-sky-100",
      watermark: "text-sky-100/5",
    },
    violet: {
      bar: "bg-violet-400",
      icon: "text-violet-200",
      iconBox:
        "border-violet-300/35 bg-violet-300/15 shadow-violet-300/20",
      badge: "border-violet-300/25 bg-violet-300/10 text-violet-100",
      tag: "border-violet-300/25 bg-violet-300/10 text-violet-100",
      watermark: "text-violet-100/5",
    },
    emerald: {
      bar: "bg-emerald-300",
      icon: "text-emerald-200",
      iconBox:
        "border-emerald-300/35 bg-emerald-300/15 shadow-emerald-300/20",
      badge: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
      tag: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
      watermark: "text-emerald-100/5",
    },
    amber: {
      bar: "bg-amber-300",
      icon: "text-amber-200",
      iconBox:
        "border-amber-300/35 bg-amber-300/15 shadow-amber-300/20",
      badge: "border-amber-300/25 bg-amber-300/10 text-amber-100",
      tag: "border-amber-300/25 bg-amber-300/10 text-amber-100",
      watermark: "text-amber-100/5",
    },
    rose: {
      bar: "bg-rose-300",
      icon: "text-rose-200",
      iconBox:
        "border-rose-300/35 bg-rose-300/15 shadow-rose-300/20",
      badge: "border-rose-300/25 bg-rose-300/10 text-rose-100",
      tag: "border-rose-300/25 bg-rose-300/10 text-rose-100",
      watermark: "text-rose-100/5",
    },
  };

  return tones[color] ?? tones.cyan;
}
