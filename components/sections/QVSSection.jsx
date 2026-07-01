import {
  Activity,
  DatabaseZap,
  Gauge,
  GitBranch,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

const inputs = [
  {
    icon: DatabaseZap,
    label: "Asset Exposure",
    text: "Internet-facing endpoints, repositories, containers, certificates, and documents.",
  },
  {
    icon: GitBranch,
    label: "Dependency Reach",
    text: "Where vulnerable algorithms sit in service graphs, build chains, and shared libraries.",
  },
  {
    icon: Activity,
    label: "Migration Load",
    text: "Operational effort, policy impact, rollout complexity, and readiness signals.",
  },
];

const tiers = [
  {
    label: "Low",
    range: "0-30",
    text: "Monitor and include in the next planned crypto refresh.",
    className: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  },
  {
    label: "Medium",
    range: "31-70",
    text: "Prioritise remediation windows and track owner acceptance.",
    className: "border-amber-300/25 bg-amber-300/10 text-amber-100",
  },
  {
    label: "High",
    range: "71-100",
    text: "Escalate for migration planning, compensating controls, and executive visibility.",
    className: "border-rose-300/25 bg-rose-300/10 text-rose-100",
  },
];

export default function QVSSection() {
  return (
    <section id="qvs" className="relative overflow-hidden bg-[#073b64] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(110,231,183,0.12),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">
            <Gauge className="h-4 w-4" />
            Risk Scoring
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
            Quantum Vulnerability
            <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
              Score (QVS)
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">
            QVS turns cryptographic findings into decision-ready risk levels by
            combining asset exposure, dependency reach, migration effort, and
            operational readiness into one clear score.
          </p>

          <div className="mt-8 rounded-2xl border border-cyan-100/15 bg-slate-950/60 p-6 shadow-[0_22px_70px_rgba(2,8,23,0.24)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10">
                <ShieldCheck className="h-6 w-6 text-cyan-100" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/75">
                  Scoring Model
                </p>
                <p className="mt-1 text-xl font-black text-white">
                  Findings x Exposure x Migration Load
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {inputs.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon className="h-5 w-5 text-cyan-100" />
                    <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-cyan-100/15 bg-slate-950/70 p-6 shadow-[0_22px_70px_rgba(2,8,23,0.24)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/75">
                  Current Example
                </p>
                <h3 className="mt-2 text-5xl font-black text-cyan-200">78</h3>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-300/25 bg-rose-300/10">
                <TriangleAlert className="h-8 w-8 text-rose-200" />
              </div>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-linear-to-r from-emerald-300 via-amber-300 to-rose-400" />
            </div>

            <div className="mt-3 flex justify-between text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-2xl border p-5 ${tier.className}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  QVS {tier.range}
                </p>
                <h3 className="mt-3 text-2xl font-black">{tier.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {tier.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
