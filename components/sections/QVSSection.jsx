"use client";

export default function PatentedScoring() {
  const tiers = [
    {
      range: "85–100",
      label: "CRITICAL",
      action: "Block CI/CD · CISO alert within 4 hrs",
      sla: "30 days",
      color: "text-red-300",
      border: "border-red-400/20",
      bg: "bg-red-500/5",
    },
    {
      range: "65–84",
      label: "HIGH",
      action: "Current sprint · weekly check",
      sla: "90 days",
      color: "text-orange-300",
      border: "border-orange-400/20",
      bg: "bg-orange-500/5",
    },
    {
      range: "40–64",
      label: "MEDIUM",
      action: "Next migration cycle · monthly review",
      sla: "6 months",
      color: "text-yellow-300",
      border: "border-yellow-400/20",
      bg: "bg-yellow-500/5",
    },
    {
      range: "20–39",
      label: "LOW",
      action: "Future refresh · quarterly review",
      sla: "12 months",
      color: "text-emerald-300",
      border: "border-emerald-400/20",
      bg: "bg-emerald-500/5",
    },
    {
      range: "0–19",
      label: "NEGLIGIBLE",
      action: "PQC-safe or non-critical · monitor",
      sla: "—",
      color: "text-cyan-300",
      border: "border-cyan-400/20",
      bg: "bg-cyan-500/5",
    },
  ];

  const flow = [
    {
      step: "Discover",
      title: "Scan Everything",
      text: "Repositories, certificates, binaries, infrastructure, containers and cryptographic assets across the enterprise.",
      color: "cyan",
    },
    {
      step: "Analyse",
      title: "Calculate Risk",
      text: "Evaluate exposure, migration effort, data sensitivity and operational impact using the QVS methodology.",
      color: "violet",
    },
    {
      step: "Prioritise",
      title: "Take Action",
      text: "Automatically classify findings into risk tiers and generate migration priorities with clear remediation timelines.",
      color: "emerald",
    },
  ];

  return (
    <section
      id="qvs-formula"
      className="relative overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            The QVS Formula —
            <span className="block bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              quantum risk in one number.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Every cryptographic asset receives a Quantum Vulnerability Score
            between 0 and 100 — computed using a proprietary scoring methodology
            and environment-aware risk multipliers. Provisional patent filed
            with IP India before any external demo.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-cyan-400/15 bg-[#071426]/90 p-8 backdrop-blur-xl">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-8 text-center">
            <h3 className="text-3xl font-black text-cyan-300 md:text-5xl">
              QVS = Proprietary Quantum Risk Intelligence
            </h3>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {flow.map((item) => (
              <div
                key={item.step}
                className={`rounded-2xl border p-6 ${
                  item.color === "cyan"
                    ? "border-cyan-400/15 bg-cyan-500/5"
                    : item.color === "violet"
                    ? "border-violet-400/15 bg-violet-500/5"
                    : "border-emerald-400/15 bg-emerald-500/5"
                }`}
              >
                <div
                  className={`text-sm font-bold uppercase tracking-[0.25em] ${
                    item.color === "cyan"
                      ? "text-cyan-300"
                      : item.color === "violet"
                      ? "text-violet-300"
                      : "text-emerald-300"
                  }`}
                >
                  {item.step}
                </div>

                <h4 className="mt-3 text-2xl font-black text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-3xl font-black text-white">
            Risk Tiers & Mandated SLAs
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-3xl border ${tier.border} ${tier.bg} p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <p className={`text-2xl font-black ${tier.color}`}>
                  {tier.range}
                </p>

                <h4 className={`mt-3 text-xl font-black ${tier.color}`}>
                  {tier.label}
                </h4>

                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-300">
                  {tier.action}
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-white">
                  {tier.sla}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-12 rounded-3xl border border-violet-400/20 bg-violet-500/5 p-6 text-center backdrop-blur-xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
            Patent Status
          </p>

          <p className="mt-3 text-lg font-semibold text-white">
            Provisional Patent Filed with IP India
          </p>

          <p className="mt-2 text-slate-300">
            Proprietary Quantum Vulnerability Scoring methodology designed for
            large-scale cryptographic risk assessment and prioritisation.
          </p>
        </div> */}
      </div>
    </section>
  );
}