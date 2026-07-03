import {
  Binary,
  Boxes,
  Code2,
  Eye,
  Fingerprint,
  LockKeyhole,
  Server,
} from "lucide-react";

const modules = [
  {
    id: "M1",
    title: "Source Code Scanner",
    desc: "Discovers cryptographic usage across application source code and identifies risky algorithms with evidence-based classification.",
    tags: ["Code Analysis", "Crypto Discovery", "Risk Evidence"],
    icon: Code2,
    tone: "cyan",
  },
  {
    id: "M2",
    title: "TLS & Certificate Discovery",
    desc: "Identifies exposed certificates, TLS configurations, expiry risks, issuer chains and weak cryptographic protocols across endpoints.",
    tags: ["TLS Review", "Certificates", "Endpoint Security"],
    icon: LockKeyhole,
    tone: "violet",
  },
  {
    id: "M3",
    title: "Binary & Runtime Scanner",
    desc: "Inspects compiled applications and runtime environments to detect embedded cryptographic patterns and hardcoded key risks.",
    tags: ["Binary Review", "Runtime Checks", "Key Risk"],
    icon: Binary,
    tone: "amber",
  },
  {
    id: "M4",
    title: "Infrastructure & API Scanner",
    desc: "Reviews infrastructure, servers, APIs and service configurations for cryptographic exposure and migration readiness.",
    tags: ["Infrastructure", "APIs", "Readiness"],
    icon: Server,
    tone: "emerald",
  },
  {
    id: "M5",
    title: "Kubernetes & Container Scanner",
    desc: "Checks containerized workloads, secrets and deployment environments for cryptographic assets and configuration risks.",
    tags: ["Containers", "Kubernetes", "Secrets"],
    icon: Boxes,
    tone: "cyan",
  },
  {
    id: "M6",
    title: "Legacy Document Scanner",
    desc: "Extracts cryptographic references from legacy documents, scanned records and architecture files that normal scanners may miss.",
    tags: ["Legacy Docs", "Evidence Review", "Audit Support"],
    icon: Eye,
    tone: "rose",
    featured: true,
  },
  {
    id: "M7",
    title: "Library Fingerprinting",
    desc: "Maps dependency and library usage to cryptographic risk categories for faster software supply-chain review.",
    tags: ["Dependencies", "SBOM", "Supply Chain"],
    icon: Fingerprint,
    tone: "violet",
  },
];

export default function ScannerModules() {
  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-position-[44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(167,139,250,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            Stage 1 · Seven Modules
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Every crypto surface.
            <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-violet-200 bg-clip-text text-transparent">
              No blindspots.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/78">
            Seven independent scanner modules write to the same CryptoAsset
            schema — one document per finding, with confidence score, audit
            trail, and quantum vulnerability classification.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module }) {
  const Icon = module.icon;
  const tone = getTone(module.tone);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-cyan-100/15 bg-white-1/3 p-6 shadow-[0_22px_70px_rgba(2,8,23,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 ${
        module.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`} />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-lg ring-1 ring-white/10 ${tone.iconBox}`}
          >
            <Icon className={`h-7 w-7 ${tone.icon}`} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${tone.kicker}`}>
              {module.id}
            </p>

            <h3 className="mt-2 text-xl font-black tracking-tight text-white">
              {module.title}
            </h3>
          </div>
        </div>

        <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">
          {module.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {module.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-bold ${tone.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function getTone(tone) {
  const tones = {
    cyan: {
      bar: "bg-cyan-300",
      icon: "text-cyan-200",
      iconBox: "border-cyan-300/35 bg-cyan-300/15 shadow-cyan-300/20",
      kicker: "text-cyan-100/75",
      tag: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
    },
    violet: {
      bar: "bg-violet-300",
      icon: "text-violet-200",
      iconBox: "border-violet-300/35 bg-violet-300/15 shadow-violet-300/20",
      kicker: "text-violet-100/75",
      tag: "border-violet-300/20 bg-violet-300/10 text-violet-100",
    },
    amber: {
      bar: "bg-amber-300",
      icon: "text-amber-200",
      iconBox: "border-amber-300/35 bg-amber-300/15 shadow-amber-300/20",
      kicker: "text-amber-100/75",
      tag: "border-amber-300/20 bg-amber-300/10 text-amber-100",
    },
    emerald: {
      bar: "bg-emerald-300",
      icon: "text-emerald-200",
      iconBox: "border-emerald-300/35 bg-emerald-300/15 shadow-emerald-300/20",
      kicker: "text-emerald-100/75",
      tag: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
    },
    rose: {
      bar: "bg-rose-300",
      icon: "text-rose-200",
      iconBox: "border-rose-300/35 bg-rose-300/15 shadow-rose-300/20",
      kicker: "text-rose-100/75",
      tag: "border-rose-300/20 bg-rose-300/10 text-rose-100",
    },
  };

  return tones[tone] ?? tones.cyan;
}
