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

const stages = [
  {
    no: "01",
    title: "SCAN",
    desc: "7-module cryptographic discovery across code, TLS, binaries, K8s Secrets, infrastructure, dependencies, and legacy PDFs using Claude Vision AI.",
    tag: "FR-1.1 → FR-1.7",
    color: "cyan",
    icon: ScanSearch,
  },
  {
    no: "02",
    title: "QUEUE",
    desc: "Kafka 3.5 asynchronous pipeline. The API returns a scan ID in under two seconds. Celery workers and priority queues support national-scale deployment.",
    tag: "Kafka · Celery · Redis",
    color: "violet",
    icon: Workflow,
  },
  {
    no: "03",
    title: "SCORE",
    desc: "The QVS Engine uses vectorised risk scoring for every finding. Five decision-ready risk tiers explain each result in simple language.",
    tag: "Risk Scoring · QVS Engine",
    color: "blue",
    icon: Gauge,
  },
  {
    no: "04",
    title: "PLAN",
    desc: "Generate ML-KEM-768, ML-DSA-65 and SLH-DSA migration plans. Select hybrid or PQC-only strategies and route critical changes through CAB approval.",
    tag: "NIST FIPS 203 · 204 · 205",
    color: "emerald",
    icon: ListChecks,
  },
  {
    no: "05",
    title: "EXECUTE",
    desc: "A secure on-premise agent deploys migrations inside protected and air-gapped networks. Mandatory dry runs and automatic rollback reduce deployment risk.",
    tag: "OPA · mTLS · Zero-Touch",
    color: "amber",
    icon: Rocket,
  },
  {
    no: "06",
    title: "COMPLY",
    desc: "Generate digitally signed evidence reports with trusted timestamps. Every finding is mapped to applicable CERT-In, RBI and ISO 27001 requirements.",
    tag: "CERT-In · RBI · ISO 27001",
    color: "rose",
    icon: FileCheck2,
  },
];

export default function AutomationStages() {
  return (
    <section
      id="pipeline"
      className="relative isolate overflow-hidden bg-[#1f4a75] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Top wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px z-20 overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1200 140"
          preserveAspectRatio="none"
          className="block h-17.5 w-full -scale-y-100 sm:h-25 lg:h-35"
        >
          <path
            d="M0,65 C320,145 560,10 880,42 C1120,65 1270,125 1440,75 L1440,140 L0,140 Z"
            fill="#1D5F86"
          />
        </svg>
      </div>

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          bg-size-[44px_44px]
        "
      />

      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-1/3
          h-150 w-225 -translate-x-1/2 rounded-full
          bg-cyan-300/8 blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40 bottom-0
          h-112.5 w-112.5 rounded-full
          bg-sky-400/8 blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 top-1/4
          h-125 w-125 rounded-full
          bg-violet-400/7 blur-[130px]
        "
      />

      {/* Border lighting */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/35 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex items-center gap-2 rounded-full
              border border-cyan-200/20 bg-cyan-200/8
              px-4 py-2 backdrop-blur-md
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100 sm:text-sm">
              End-to-End Automation
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-normal leading-tight tracking-wider text-white md:text-5xl lg:text-6xl">
            <span className="block mb-2 bg-linear-to-r from-cyan-100 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
              Six <span className="text-white">Stages</span>
            </span>

            <span className="block mb-2">
              <span className="bg-linear-to-r  from-cyan-100 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
                One
              </span>{" "}
              platform.
            </span>

            <span className="block mb-2">
              <span className="bg-linear-to-r mb-4 from-cyan-100 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
                Zero
              </span>{" "}
              quantum blindspots.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Each stage automatically hands off to the next—from discovery and
            prioritisation to secure migration and compliance evidence.
          </p>
        </div>

        {/* Stage cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <StageCard
              key={stage.no}
              stage={stage}
              isLast={index === stages.length - 1}
            />
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
    <article
      className="
        group relative isolate flex min-h-97.5 overflow-hidden rounded-3xl
        border border-white/14
        bg-linear-to-br from-white/14 via-[#173f68]/75 to-[#0a2949]/95
        p-6
        shadow-[0_22px_65px_rgba(2,12,30,0.28)]
        backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:border-cyan-100/35
        hover:shadow-[0_30px_90px_rgba(34,211,238,0.16)]
        sm:p-7
      "
    >
      {/* Individual card glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -right-20 -top-20
          size-52 rounded-full opacity-16 blur-3xl
          transition-all duration-500
          group-hover:scale-125 group-hover:opacity-30
          ${tone.glow}
        `}
      />

      {/* Glass highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-px rounded-[calc(1.5rem-1px)]
          bg-linear-to-br from-white/7 via-transparent to-cyan-300/2.5
        "
      />

      {/* Top color bar */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`}
      />

      {/* Stage watermark */}
      <div
        aria-hidden="true"
        className={`
          absolute right-5 top-20
          text-7xl font-black leading-none
          transition-all duration-500
          group-hover:-translate-y-1 group-hover:scale-105
          ${tone.watermark}
        `}
      >
        {stage.no}
      </div>

      {/* Bottom hover line */}
      <div
        aria-hidden="true"
        className={`
          absolute inset-x-12 bottom-0 h-px
          bg-linear-to-r from-transparent ${tone.line} to-transparent
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        `}
      />

      <div className="relative z-10 flex w-full flex-col">
        <div className="flex items-start justify-between gap-4">
          {/* Icon */}
          <div
            className={`
              flex size-14 shrink-0 items-center justify-center
              rounded-2xl border ring-1 ring-white/10
              shadow-lg transition-all duration-500
              group-hover:-rotate-3 group-hover:scale-110
              ${tone.iconBox}
            `}
          >
            <Icon className={`h-7 w-7 ${tone.icon}`} strokeWidth={1.8} />
          </div>

          {/* Stage badge */}
          <span
            className={`
              relative z-10 rounded-full border px-3 py-1.5
              text-[10px] font-bold uppercase tracking-[0.18em]
              backdrop-blur-md sm:text-xs
              ${tone.badge}
            `}
          >
            Stage {stage.no}
          </span>
        </div>

        <h3 className="mt-7 text-3xl font-black tracking-tight text-white">
          {stage.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/70">{stage.desc}</p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-7">
          <div
            className={`
              inline-flex max-w-[85%] rounded-full border
              px-4 py-2 text-[10px] font-bold uppercase
              tracking-widest sm:text-xs
              ${tone.tag}
            `}
          >
            {stage.tag}
          </div>

          {!isLast && (
            <div
              className="
                flex size-9 shrink-0 items-center justify-center rounded-full
                border border-white/10 bg-white/6 text-white/60
                transition-all duration-300
                group-hover:translate-x-1 group-hover:border-cyan-200/30
                group-hover:bg-cyan-300/10 group-hover:text-cyan-100
              "
            >
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function getTone(color) {
  const tones = {
    cyan: {
      bar: "bg-linear-to-r from-transparent via-cyan-300 to-transparent",
      glow: "bg-cyan-300",
      line: "via-cyan-200/80",
      icon: "text-cyan-100",
      iconBox: "border-cyan-300/35 bg-cyan-300/14 shadow-cyan-400/20",
      badge: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
      tag: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
      watermark: "text-cyan-100/7",
    },

    blue: {
      bar: "bg-linear-to-r from-transparent via-sky-400 to-transparent",
      glow: "bg-sky-400",
      line: "via-sky-200/80",
      icon: "text-sky-100",
      iconBox: "border-sky-300/35 bg-sky-300/14 shadow-sky-400/20",
      badge: "border-sky-300/25 bg-sky-300/10 text-sky-100",
      tag: "border-sky-300/25 bg-sky-300/10 text-sky-100",
      watermark: "text-sky-100/7",
    },

    violet: {
      bar: "bg-linear-to-r from-transparent via-violet-400 to-transparent",
      glow: "bg-violet-400",
      line: "via-violet-200/80",
      icon: "text-violet-100",
      iconBox: "border-violet-300/35 bg-violet-300/14 shadow-violet-400/20",
      badge: "border-violet-300/25 bg-violet-300/10 text-violet-100",
      tag: "border-violet-300/25 bg-violet-300/10 text-violet-100",
      watermark: "text-violet-100/7",
    },

    emerald: {
      bar: "bg-linear-to-r from-transparent via-emerald-300 to-transparent",
      glow: "bg-emerald-300",
      line: "via-emerald-200/80",
      icon: "text-emerald-100",
      iconBox: "border-emerald-300/35 bg-emerald-300/14 shadow-emerald-400/20",
      badge: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
      tag: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
      watermark: "text-emerald-100/7",
    },

    amber: {
      bar: "bg-linear-to-r from-transparent via-amber-300 to-transparent",
      glow: "bg-amber-300",
      line: "via-amber-200/80",
      icon: "text-amber-100",
      iconBox: "border-amber-300/35 bg-amber-300/14 shadow-amber-400/20",
      badge: "border-amber-300/25 bg-amber-300/10 text-amber-100",
      tag: "border-amber-300/25 bg-amber-300/10 text-amber-100",
      watermark: "text-amber-100/7",
    },

    rose: {
      bar: "bg-linear-to-r from-transparent via-rose-300 to-transparent",
      glow: "bg-rose-300",
      line: "via-rose-200/80",
      icon: "text-rose-100",
      iconBox: "border-rose-300/35 bg-rose-300/14 shadow-rose-400/20",
      badge: "border-rose-300/25 bg-rose-300/10 text-rose-100",
      tag: "border-rose-300/25 bg-rose-300/10 text-rose-100",
      watermark: "text-rose-100/7",
    },
  };

  return tones[color] ?? tones.cyan;
}
