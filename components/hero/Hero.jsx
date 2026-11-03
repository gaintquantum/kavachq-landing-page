"use client";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import AtomBackground from "./AtomBackground";
import { demoRequestHref } from "@/lib/demoRequest";
const ease = [0.22, 1, 0.36, 1];
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
// Headline stays opaque from first paint (it is the LCP element); it only slides into place.
const headline = { hidden: { opacity: 1, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
export default function Hero() {
  const heroRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reduce = useReducedMotion();
  function handlePointerMove(event) {
    if (reduce) return;
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
    <section ref={heroRef} onPointerMove={handlePointerMove} onPointerLeave={resetPointer} style={{ "--mouse-x": "65%", "--mouse-y": "45%" }} aria-labelledby="hero-heading" data-native
      className="relative min-h-svh overflow-hidden pt-24 text-white sm:pt-28 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_72%_50%,#0b2a5c_0%,#04122e_45%,#020617_100%)] max-lg:bg-[radial-gradient(ellipse_at_50%_50%,#0b2a5c_0%,#04122e_50%,#020617_100%)]" aria-hidden="true">
        <AtomBackground mouseRef={mouseRef} />
        {/* Keeps copy legible where it overlaps the atom */}
        <div className="absolute inset-0 bg-[#020617]/65 lg:bg-transparent lg:bg-linear-to-r lg:from-[#020617]/90 lg:via-[#020617]/40 lg:via-45% lg:to-transparent" />
      </div>
      {/* Soft spotlight that follows the pointer */}
      <div className="pointer-events-none absolute inset-0 z-1 hidden bg-[radial-gradient(520px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.08),transparent_60%)] md:block" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-448 px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid min-h-[calc(100svh-96px)] items-center gap-8 pb-24 pt-8 sm:pb-16 sm:pt-10 lg:grid-cols-[48fr_52fr] lg:gap-6 lg:py-0">
          <motion.div className="relative z-30 mx-auto max-w-172 text-center lg:mx-0 lg:text-left" initial={"hidden"} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}>
            <motion.div variants={item} className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 backdrop-blur-sm sm:px-4">
                <ShieldCheck className="size-3.5 text-sky-300" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-200 sm:text-xs sm:tracking-[0.2em]">ISO/IEC 27001:2022</span>
              </div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 backdrop-blur-sm py-1.5 sm:px-4">
                <span className="relative flex size-2 shrink-0" aria-hidden="true"><span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400" /><span className="relative size-2 rounded-full bg-emerald-500" /></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200 sm:text-xs sm:tracking-[0.2em]">GAINT · National PQC Platform · 2026</span>
              </div>
            </motion.div>
            <motion.h1 variants={headline} id="hero-heading" className="hero-headline text-balance font-display leading-[1.08] tracking-[-0.04em] text-white">
              Secure Your Enterprise for the <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">Quantum Era</span>
            </motion.h1>
            <motion.p variants={item} className="mx-auto mt-5 max-w-160 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
              KAVACH-Q discovers vulnerable cryptography, calculates Quantum Vulnerability Scores, and helps enterprises migrate to post-quantum-safe algorithms with audit-ready compliance.
            </motion.p>
            <motion.div variants={item} className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <a href={demoRequestHref} className="visit-kavachq-button group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-6 text-center font-bold text-white shadow-[0_10px_32px_rgba(56,152,255,0.45)] transition hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_14px_34px_rgba(66,133,244,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] motion-reduce:transform-none">
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100 motion-reduce:hidden" aria-hidden="true" />
                Request a Demo<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#repository-risk-scanner" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-center font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] motion-reduce:transform-none">
                Scan Your Repository
              </a>
              <a href="/faqs" className="inline-flex h-12 items-center justify-center gap-1 rounded-xl px-3 text-sm font-bold text-sky-300 underline-offset-4 transition hover:text-sky-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
                Learn about KAVACH-Q<ArrowRight className="size-3.5" aria-hidden="true" />
              </a>
            </motion.div>
            <motion.div variants={item} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
              {["CERT-IN Aligned", "RBI Framework", "ISO 27001:2022", "NIST FIPS 203/204/205"].map((t) => <TrustChip key={t} text={t} />)}
            </motion.div>
          </motion.div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
function TrustChip({ text }) {
  return (
    <div className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-slate-200 backdrop-blur-sm transition hover:border-emerald-300/40 hover:bg-emerald-400/10 sm:text-xs sm:tracking-[0.12em]">
      <ShieldCheck className="size-4 shrink-0 text-emerald-400" strokeWidth={1.9} aria-hidden="true" />
      <span className="min-w-0 leading-relaxed">{text}</span>
    </div>
  );
}
