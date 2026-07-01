"use client";

import Shield3D from "./Shield3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1f4a75] pt-24 text-white">
      {/* Background glow */}
      <div className="absolute left-[-10%] top-[20%] h-105 w-105 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[10%] h-105 w-105 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Grid background */}
      <div className="hero-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Content */}
          <div className="relative z-30 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
              <span className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                GAINT · National PQC Platform · 2026
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Secure Your
              <br />
              Enterprise For
              <br />
              The <span className="gradient-text">Quantum Era</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              KAVACH-Q discovers vulnerable cryptography, calculates Quantum
              Vulnerability Scores, and helps enterprises migrate to
              post-quantum-safe algorithms with audit-ready compliance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#ctabanner"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
              >
                Request Pilot Access
              </a>

              <a
                href="#pipeline"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
              >
                Watch the Pipeline
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <TrustChip text="CERT-IN Aligned" />
              <TrustChip text="RBI Framework" />
              <TrustChip text="ISO 27001:2022" />
              <TrustChip text="NIST FIPS 203/204/205" />
            </div>
          </div>

          {/* Right Animation */}
          <div className="relative z-20 flex justify-center lg:justify-end">
            <Shield3D />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({ text }) {
  return (
    <div className="rounded-md border border-cyan-400/15 bg-cyan-400/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-300">
      <span className="mr-2 text-emerald-400">✓</span>
      {text}
    </div>
  );
}
