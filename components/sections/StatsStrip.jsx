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
    label: "Finalized NIST PQC Standards",
    detail: "ML-KEM · ML-DSA · SLH-DSA",
    tone: "blue",
    icon: ShieldCheck,
    source: "https://csrc.nist.gov/projects/post-quantum-cryptography",
  },
  {
    value: "CBOM + QBOM",
    label: "CERT-In Technical Guidance",
    detail: "Cryptographic and quantum asset visibility",
    tone: "violet",
    icon: BookOpenCheck,
    source:
      "https://www.cert-in.org.in/PDF/TechnicalGuidelines-on-SBOM%2CQBOM%26CBOM%2CAIBOM_and_HBOM_ver2.0.pdf",
  },
];

export default function StatsStrip() {
  return (
    <section
      aria-label="Quantum security standards and policy context"
      className="
        relative overflow-hidden border-y border-slate-200
        bg-slate-50 px-6 py-12 text-slate-950
        transition-colors duration-500
        dark:border-cyan-100/10 dark:bg-[#1f4a75] dark:text-white
      "
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(16,185,129,0.12),transparent_26%)]
          dark:bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(16,185,129,0.10),transparent_26%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-px
          bg-linear-to-r from-transparent via-cyan-400/45 to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 h-px
          bg-linear-to-r from-transparent via-cyan-400/25 to-transparent
        "
      />

      <div
        className="
          relative mx-auto grid max-w-7xl
          grid-cols-1 gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {stats.map((item, index) => {
          const tone = getTone(item.tone);
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="
                group relative min-h-60 overflow-hidden rounded-2xl
                border border-slate-200
                bg-white/75 p-6 shadow-xl
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:shadow-2xl

                dark:border-cyan-100/15
                dark:bg-slate-950/40
                dark:hover:border-cyan-200/35
                dark:hover:bg-slate-950/55
              "
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`}
              />

              {/* Colored glow */}
              <div
                aria-hidden="true"
                className={`
                  absolute -right-14 -top-14
                  size-32 rounded-full blur-2xl
                  opacity-20 transition-all duration-300
                  group-hover:scale-125 group-hover:opacity-30
                  ${tone.glow}
                `}
              />

              {/* Watermark number */}
              <div
                aria-hidden="true"
                className="
                  absolute right-5 top-5
                  text-6xl font-black leading-none
                  text-slate-950/5 transition-colors duration-300
                  group-hover:text-slate-950/10
                  dark:text-white/5
                  dark:group-hover:text-white/10
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative flex h-full flex-col">
                <div
                  className={`
                    flex size-11 items-center justify-center
                    rounded-xl border
                    ${tone.iconBox}
                  `}
                >
                  <Icon className={`size-5 ${tone.icon}`} strokeWidth={1.8} />
                </div>

                <div className="mt-8">
                  <h3
                    className={`
                      text-2xl font-black tracking-tight
                      sm:text-3xl
                      ${tone.value}
                    `}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-3 text-xs font-bold uppercase
                      tracking-[0.14em]
                      text-slate-700
                      dark:text-cyan-50/80
                    "
                  >
                    {item.label}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-white/55">
                    {item.detail}
                  </p>
                </div>

                <a
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-auto pt-5 text-xs font-semibold
                    text-cyan-700 underline decoration-cyan-500/30
                    underline-offset-4 transition-colors
                    hover:text-cyan-600
                    dark:text-cyan-200
                    dark:hover:text-cyan-100
                  "
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
      icon: "text-cyan-700 dark:text-cyan-200",
      iconBox:
        "border-cyan-500/25 bg-cyan-100 dark:border-cyan-300/30 dark:bg-cyan-300/10",
      value: "text-cyan-700 dark:text-cyan-200",
    },

    blue: {
      bar: "bg-sky-400",
      glow: "bg-sky-400",
      icon: "text-sky-700 dark:text-sky-200",
      iconBox:
        "border-sky-500/25 bg-sky-100 dark:border-sky-300/30 dark:bg-sky-300/10",
      value: "text-sky-700 dark:text-sky-200",
    },

    emerald: {
      bar: "bg-emerald-400",
      glow: "bg-emerald-400",
      icon: "text-emerald-700 dark:text-emerald-200",
      iconBox:
        "border-emerald-500/25 bg-emerald-100 dark:border-emerald-300/30 dark:bg-emerald-300/10",
      value: "text-emerald-700 dark:text-emerald-200",
    },

    violet: {
      bar: "bg-violet-400",
      glow: "bg-violet-400",
      icon: "text-violet-700 dark:text-violet-200",
      iconBox:
        "border-violet-500/25 bg-violet-100 dark:border-violet-300/30 dark:bg-violet-300/10",
      value: "text-violet-700 dark:text-violet-200",
    },
  };

  return tones[tone] ?? tones.cyan;
}