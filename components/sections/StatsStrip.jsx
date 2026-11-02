"use client";

import { BookOpenCheck, CalendarClock, Landmark, ShieldCheck } from "lucide-react";

const stats = [
  {
    value: "₹6,003.65 Cr",
    label: "National Quantum Mission Outlay",
    detail: "Government of India · 2023–24 to 2030–31",
    tone: "cyan",
    icon: Landmark,
    source: "https://dst.gov.in/national-quantum-mission-nqm",
  },
  {
    value: "2030–31",
    label: "NQM Programme Period",
    detail: "India’s national quantum ecosystem initiative",
    tone: "emerald",
    icon: CalendarClock,
    source: "https://dst.gov.in/national-quantum-mission-nqm",
  },
  {
    value: "203 · 204 · 205",
    compactValue: true,
    label: "Finalized NIST PQC Standards",
    detail: "ML-KEM · ML-DSA · SLH-DSA",
    tone: "blue",
    icon: ShieldCheck,
    source: "https://csrc.nist.gov/projects/post-quantum-cryptography",
  },
  {
    value: "CBOM + QBOM",
    compactValue: true,
    label: "CERT-In Technical Guidance",
    detail: "Cryptographic and quantum asset visibility",
    tone: "violet",
    icon: BookOpenCheck,
    source:
      "https://www.cert-in.org.in/PDF/TechnicalGuidelines-on-SBOM,QBOM&CBOM,AIBOM_and_HBOM_ver2.0.pdf",
  },
];

export default function StatsStrip() {
  return (
    <section
      aria-label="Quantum security standards and policy context"
      data-native
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-5 py-10 text-slate-950 transition-colors duration-500 dark:border-cyan-100/10 dark:bg-[#1f4a75] dark:text-white sm:px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(16,185,129,0.12),transparent_26%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(16,185,129,0.10),transparent_26%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-400/25 to-transparent"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const tone = getTone(item.tone);
          const Icon = item.icon;
          return (
            <article
              key={item.label}
              className={`group relative flex min-h-68 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.11)] dark:border-cyan-100/15 dark:bg-slate-950/40 dark:hover:bg-slate-950/55 ${tone.hoverBorder}`}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`}
              />
              <div
                aria-hidden="true"
                className={`absolute -right-14 -top-14 size-32 rounded-full opacity-15 blur-2xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-25 ${tone.glow}`}
              />
              <div
                aria-hidden="true"
                className="absolute right-6 top-6 text-[2.75rem] font-black leading-none text-slate-950/8 transition-colors duration-300 group-hover:text-slate-950/12 dark:text-white/8 dark:group-hover:text-white/12"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="relative flex min-w-0 flex-1 flex-col">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl border ${tone.iconBox}`}
                >
                  <Icon
                    className={`size-6 ${tone.icon}`}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-6">
                  <h3
                    className={`${item.compactValue ? "text-[1.55rem] xl:text-[1.75rem]" : "text-[1.75rem] xl:text-[1.875rem]"} font-black leading-tight tracking-tight ${tone.value}`}
                  >
                    {item.value}
                  </h3>
                  <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-slate-700 dark:text-cyan-50/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-white/55">
                    {item.detail}
                  </p>
                </div>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Official source for ${item.label} (opens in a new tab)`}
                  className="mt-auto w-fit pt-4 text-xs font-semibold text-cyan-700 underline decoration-cyan-500/30 underline-offset-4 transition-colors hover:text-cyan-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:text-cyan-200 dark:hover:text-cyan-100"
                >
                  Official source
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function getTone(tone) {
  const tones = {
    cyan: {
      bar: "bg-cyan-400",
      glow: "bg-cyan-400",
      hoverBorder: "hover:border-cyan-300 dark:hover:border-cyan-200/40",
      icon: "text-cyan-700 dark:text-cyan-200",
      iconBox:
        "border-cyan-500/25 bg-cyan-100 dark:border-cyan-300/30 dark:bg-cyan-300/10",
      value: "text-cyan-700 dark:text-cyan-200",
    },

    blue: {
      bar: "bg-sky-400",
      glow: "bg-sky-400",
      hoverBorder: "hover:border-sky-300 dark:hover:border-sky-200/40",
      icon: "text-sky-700 dark:text-sky-200",
      iconBox:
        "border-sky-500/25 bg-sky-100 dark:border-sky-300/30 dark:bg-sky-300/10",
      value: "text-sky-700 dark:text-sky-200",
    },

    emerald: {
      bar: "bg-emerald-400",
      glow: "bg-emerald-400",
      hoverBorder: "hover:border-emerald-300 dark:hover:border-emerald-200/40",
      icon: "text-emerald-700 dark:text-emerald-200",
      iconBox:
        "border-emerald-500/25 bg-emerald-100 dark:border-emerald-300/30 dark:bg-emerald-300/10",
      value: "text-emerald-700 dark:text-emerald-200",
    },

    violet: {
      bar: "bg-violet-400",
      glow: "bg-violet-400",
      hoverBorder: "hover:border-violet-300 dark:hover:border-violet-200/40",
      icon: "text-violet-700 dark:text-violet-200",
      iconBox:
        "border-violet-500/25 bg-violet-100 dark:border-violet-300/30 dark:bg-violet-300/10",
      value: "text-violet-700 dark:text-violet-200",
    },
  };

  return tones[tone] ?? tones.cyan;
}
