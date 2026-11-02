"use client";

import { useRef } from "react";
import KavachQLogo3D from "@/components/KavachQLogo3d";
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
      style={{ "--mouse-x": "65%", "--mouse-y": "45%" }}
      className="enterprise-hero relative min-h-screen overflow-hidden bg-white pt-24 text-slate-950 sm:pt-28 lg:pt-24"
    >
      <QuantumBackground mouseRef={mouseRef} />

      {/* Grid background */}
      <div className="hero-grid absolute inset-0 z-1 opacity-35" />

      <div className="relative z-10 mx-auto max-w-[112rem] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-8 pb-24 pt-8 sm:pb-16 sm:pt-10 lg:grid-cols-[48fr_52fr] lg:gap-6 lg:py-0">
          {/* Left Content */}
          <div className="relative z-30 mx-auto max-w-[43rem] text-center lg:mx-0 lg:text-left">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/90 px-3 py-1.5 sm:px-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-xs sm:tracking-[0.2em]">
                  🛡️ ISO/IEC 27001:2022
                </span>
              </div>

              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/90 px-3 py-1.5 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-800 sm:text-xs sm:tracking-[0.2em]">
                  GAINT · National PQC Platform · 2026
                </span>
              </div>
            </div>
            <div className="mb-3 flex justify-center sm:mb-4 lg:justify-start">
              <KavachQLogo3D />
            </div>
            <h1
              style={{
                fontFamily: '"Michroma", Futura, "Trebuchet MS", sans-serif',
              }}
              className="hero-headline text-balance text-[clamp(2.25rem,4.4vw,4.9rem)] leading-[1.06] tracking-[-0.045em] text-slate-950"
            >
              Secure Your
              <br />
              Enterprise For
              <br />
              The{" "}
              <span className="mt-1 inline-block text-[#1677a8]">
                Quantum Era
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[40rem] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              KAVACH-Q discovers vulnerable cryptography, calculates Quantum
              Vulnerability Scores, and helps enterprises migrate to
              post-quantum-safe algorithms with audit-ready compliance.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href="https://kavachq.com"
                className="visit-kavachq-button inline-flex h-12 items-center justify-center rounded-xl bg-[#4285F4] px-6 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2f6fda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 motion-reduce:transform-none"
              >
                Visit KAVACH-Q
              </a>

              <a
                href="/faqs"
                className="learn-kavachq-button inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-center font-bold text-[#2563eb] transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 motion-reduce:transform-none"
              >
                Learn About Kavach-Q
              </a>
            </div>

            <div className="mx-auto mt-6 flex max-w-[42rem] flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
              <TrustChip text="CERT-IN Aligned" />
              <TrustChip text="RBI Framework" />
              <TrustChip text="ISO 27001:2022" />
              <TrustChip text="NIST FIPS 203/204/205" />
            </div>
          </div>

          {/* Right Animation */}
          <div className="relative z-20 hidden min-h-[36rem] min-w-0 lg:block" aria-hidden="true">
            <div className="absolute inset-8 rounded-[2rem] border border-blue-100/80 bg-[linear-gradient(145deg,rgba(239,246,255,0.62),rgba(236,254,255,0.24),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({ text }) {
  return (
    <div className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-slate-700 sm:text-xs sm:tracking-[0.12em]">
      <span className="grid h-4 w-4 shrink-0 place-items-center text-emerald-600">
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
