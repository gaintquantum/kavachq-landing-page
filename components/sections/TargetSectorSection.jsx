"use client";

import {
  BadgeCheck,
  Landmark,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

const sectors = [
  {
    title: "Central & State Government",
    label: "Government",
    description:
      "NIC-hosted portals, ministry APIs, Aadhaar-linked services, and classified document systems, including legacy documents only readable through vision-assisted analysis.",
    icon: Landmark,
    tone: "cyan",
    points: [
      "CERT-IN and MeitY regulatory alignment",
      "Private deployment and data residency controls",
      "Legacy document and configuration discovery",
    ],
  },
  {
    title: "BFSI — Banks, Insurance, Finance",
    label: "Regulated Finance",
    description:
      "RBI-regulated banks, SEBI-registered firms, insurance companies, and payment processors with clause-level reporting for regulatory review.",
    icon: BadgeCheck,
    tone: "amber",
    points: [
      "RBI cyber security framework coverage",
      "Repository, API, TLS, and SBOM scanning",
      "DPDPA 2023 encryption checks",
    ],
  },
  {
    title: "Critical Infrastructure",
    label: "National Assets",
    description:
      "Power grids, telecom networks, water treatment, railways, and defence contractors where source access may be partial or unavailable.",
    icon: RadioTower,
    tone: "rose",
    points: [
      "Runtime, firmware, and binary inspection",
      "SCADA and legacy component visibility",
      "Controlled scanning with no data exfiltration",
    ],
  },
];

export default function TargetSectorsSection() {
  return (
    <section
      id="who"
      className="relative overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-position-[44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(251,191,36,0.1),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
              <span className="h-px w-6 bg-cyan-300" />
              Target Sectors
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Built for India's most
              <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
                critical institutions.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/78 lg:justify-self-end">
            KAVACH-Q focuses on sectors where cryptographic failure has national,
            regulatory, or public-service impact, from government systems to
            finance and infrastructure.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {sectors.map((sector) => (
            <SectorCard key={sector.title} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCard({ sector }) {
  const Icon = sector.icon;
  const tone = getTone(sector.tone);

  return (
    <article className="group relative flex min-h-107.5 flex-col overflow-hidden rounded-3xl border border-cyan-100/15 bg-slate-950/68 p-7 shadow-[0_24px_80px_rgba(2,8,23,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-slate-950/82">
      <div className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`} />
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl ${tone.glow}`} />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border shadow-lg ring-1 ring-white/10 ${tone.iconBox}`}
        >
          <Icon className={`h-7 w-7 ${tone.icon}`} strokeWidth={1.8} />
        </div>

        <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${tone.badge}`}>
          {sector.label}
        </span>
      </div>

      <h3 className="relative mt-8 text-2xl font-black tracking-tight text-white">
        {sector.title}
      </h3>

      <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-300">
        {sector.description}
      </p>

      <ul className="relative mt-7 space-y-3 border-t border-white/10 pt-6">
        {sector.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
            <ShieldCheck className={`mt-0.5 h-4 w-4 shrink-0 ${tone.check}`} strokeWidth={2} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function getTone(tone) {
  const tones = {
    cyan: {
      bar: "bg-cyan-300",
      icon: "text-cyan-200",
      iconBox: "border-cyan-300/35 bg-cyan-300/15 shadow-cyan-300/20",
      badge: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
      check: "text-cyan-200",
      glow: "bg-cyan-300/18",
    },
    amber: {
      bar: "bg-amber-300",
      icon: "text-amber-200",
      iconBox: "border-amber-300/35 bg-amber-300/15 shadow-amber-300/20",
      badge: "border-amber-300/25 bg-amber-300/10 text-amber-100",
      check: "text-amber-200",
      glow: "bg-amber-300/16",
    },
    rose: {
      bar: "bg-rose-300",
      icon: "text-rose-200",
      iconBox: "border-rose-300/35 bg-rose-300/15 shadow-rose-300/20",
      badge: "border-rose-300/25 bg-rose-300/10 text-rose-100",
      check: "text-rose-200",
      glow: "bg-rose-300/16",
    },
  };

  return tones[tone] ?? tones.cyan;
}
