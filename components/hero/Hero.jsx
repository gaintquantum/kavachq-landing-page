"use client";

import { useRef } from "react";
import KavachQLogo3D from "@/components/KavachQLogo3d";
import Shield3D from "./Shield3D";
import QuantumBackground from "./QuantumBackground";

export default function Hero() {
  const heroRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  function handlePointerMove(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    mouseRef.current.x = x * 2 - 1;
    mouseRef.current.y = -(y * 2 - 1);
    heroRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
    heroRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
  }

  function resetPointer() {
    mouseRef.current.x = 0;
    mouseRef.current.y = 0;
    heroRef.current?.style.setProperty("--mouse-x", "65%");
    heroRef.current?.style.setProperty("--mouse-y", "45%");
  }

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{
        "--mouse-x": "65%",
        "--mouse-y": "45%",
        background:
          "radial-gradient(circle at var(--mouse-x, 65%) var(--mouse-y, 45%), rgba(219, 242, 255, 0.38), transparent 22%), radial-gradient(circle at 65% 40%, rgba(25, 216, 242, 0.16), transparent 30%), linear-gradient(112deg, #21507c 0%, #1d5f86 48%, #234a78 100%)",
      }}
      className="relative min-h-screen overflow-hidden pt-24 text-[#f5fbff] sm:pt-28 lg:pt-24"
    >
      <QuantumBackground mouseRef={mouseRef} />

      {/* Background glow */}
      <div className="absolute left-[-40%] top-[18%] z-1 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:left-[-20%] sm:h-96 sm:w-96 lg:left-[-10%] lg:h-105 lg:w-105" />
      <div className="absolute right-[-40%] top-[8%] z-1 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl sm:right-[-20%] sm:h-96 sm:w-96 lg:right-[-10%] lg:h-105 lg:w-105" />

      {/* Grid background */}
      <div className="hero-grid absolute inset-0 z-1 opacity-20 sm:opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:py-0">
          {/* Left Content */}
          <div className="relative z-30 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-3 -inset-y-5 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(16,47,76,0.56),rgba(16,47,76,0.16)_65%,transparent_82%)] sm:-inset-x-10 sm:-inset-y-8 lg:bg-[radial-gradient(ellipse_at_35%_48%,rgba(16,47,76,0.56),rgba(16,47,76,0.2)_48%,transparent_74%)]"
            />
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:mb-6 lg:justify-start">
              <div className="inline-flex mt-2 items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 sm:px-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200 sm:text-xs sm:tracking-[0.22em]">
                  🛡️ ISO/IEC 27001:2022
                </span>
              </div>

              <div className="inline-flex max-w-full mt-2 items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200 sm:text-xs sm:tracking-[0.22em]">
                  GAINT · National PQC Platform · 2026
                </span>
              </div>
            </div>
            <div className="mb-5 flex justify-center sm:mb-6 lg:justify-start">
              <KavachQLogo3D />
            </div>
            <h1
              style={{
                fontFamily: '"Michroma", Futura, "Trebuchet MS", sans-serif',
              }}
              className="text-xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Secure Your
              <br />
              Enterprise For
              <br />
              The{" "}
              <span className="mt-2 inline-block text-6xl rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-2 py-1 text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.22)] sm:px-3">
                Quantum Era
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#c5d9e8] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              KAVACH-Q discovers vulnerable cryptography, calculates Quantum
              Vulnerability Scores, and helps enterprises migrate to
              post-quantum-safe algorithms with audit-ready compliance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href="https://kavachq.com"
                className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
              >
                Visit KAVACH-Q
              </a>

              <a
                href="#pipeline"
                className="rounded-xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
              >
                Watch the Pipeline
              </a>
            </div>

            <div className="mx-auto mb-2 mt-2 grid max-w-md grid-cols-1 gap-2 sm:mt-10 sm:gap-3 lg:mx-0 lg:max-w-sm">
              <TrustChip text="CERT-IN Aligned" />
              <TrustChip text="RBI Framework" />
              <TrustChip text="ISO 27001:2022" />
              <TrustChip text="NIST FIPS 203/204/205" />
            </div>
          </div>

          {/* Right Animation */}
          <div className="relative z-20 flex min-w-0 justify-center lg:justify-end">
            <div className="relative z-20 flex min-w-0 w-full max-w-2xl items-center justify-center py-10">
              {/* <Shield3D /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({ text }) {
  return (
    <div className="flex min-h-8 items-center justify-center gap-1.5 rounded-md border border-cyan-400/15 bg-cyan-400/5 px-2 py-1.5 text-center text-[8px] uppercase tracking-[0.08em] text-[#c5d9e8] sm:min-h-0 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs sm:tracking-[0.16em] lg:justify-start lg:text-left">
      <span className="grid h-4 w-4 shrink-0 place-items-center text-emerald-400 sm:h-5 sm:w-5">
        <svg
          viewBox="0 0 24 24"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3.5 18.5 6v5.1c0 4.1-2.6 7.2-6.5 8.7-3.9-1.5-6.5-4.6-6.5-8.7V6L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m8.6 12 2.1 2.1 4.7-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-relaxed">{text}</span>
    </div>
  );
}
