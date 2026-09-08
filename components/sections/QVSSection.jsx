"use client";

export default function PatentedScoring() {
  const riskTiers = [
    {
      label: "CRITICAL",
      action: "Immediate remediation",
      color: "text-red-300",
      border: "border-red-400/20",
      bg: "bg-red-500/5",
    },
    {
      label: "HIGH",
      action: "Priority remediation",
      color: "text-orange-300",
      border: "border-orange-400/20",
      bg: "bg-orange-500/5",
    },
    {
      label: "MEDIUM",
      action: "Planned remediation",
      color: "text-yellow-300",
      border: "border-yellow-400/20",
      bg: "bg-yellow-500/5",
    },
    {
      label: "LOW",
      action: "Monitor & schedule",
      color: "text-emerald-300",
      border: "border-emerald-400/20",
      bg: "bg-emerald-500/5",
    },
    {
      label: "NEGLIGIBLE",
      action: "Monitor",
      color: "text-cyan-300",
      border: "border-cyan-400/20",
      bg: "bg-cyan-500/5",
    },
  ];

  const assessmentFactors = [
    {
      title: "Cryptographic Posture",
      text: "Evaluates the security characteristics and resilience of cryptographic assets against emerging quantum threats.",
      color: "cyan",
    },
    {
      title: "Security Exposure",
      text: "Considers how cryptographic assets are exposed across systems, services, infrastructure and external interfaces.",
      color: "blue",
    },
    {
      title: "Data Sensitivity",
      text: "Accounts for the sensitivity and long-term value of information protected by cryptographic assets.",
      color: "violet",
    },
    {
      title: "Environmental Context",
      text: "Considers the operational and business context surrounding each cryptographic asset.",
      color: "emerald",
    },
    {
      title: "Migration Complexity",
      text: "Considers the practical complexity and effort involved in transitioning affected assets.",
      color: "amber",
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
      text: "Evaluate cryptographic, exposure, data and environmental context using the QVS methodology.",
      color: "violet",
    },
    {
      step: "Prioritise",
      title: "Take Action",
      text: "Classify findings by risk and generate migration priorities with clear remediation guidance.",
      color: "emerald",
    },
  ];

  return (
    <section
      id="qvs"
      className="relative scroll-mt-20 overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-24 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="absolute bottom-24 right-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            The QVS Assessment Model —
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

        {/* =========================================================
            QVS ASSESSMENT MODEL
        ========================================================== */}
        <div className="mt-16 rounded-3xl border border-cyan-400/15 bg-[#071426]/20 p-6 backdrop-blur-xl md:p-10">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-8 md:p-10">
            {/* Section Heading */}
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                QVS Assessment Model
              </p>

              <h3 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Multi-factor quantum risk assessment
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
                QVS combines cryptographic, exposure, data and environmental
                signals through a proprietary weighted methodology to produce
                a normalized risk score from 0 to 100.
              </p>
            </div>

            {/* =====================================================
                ASSESSMENT FACTORS
            ====================================================== */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {assessmentFactors.map((factor, index) => (
                <div
                  key={factor.title}
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    factor.color === "cyan"
                      ? "border-cyan-300/25 bg-cyan-400/10 hover:bg-cyan-400/15"
                      : factor.color === "blue"
                        ? "border-blue-300/25 bg-blue-400/10 hover:bg-blue-400/15"
                        : factor.color === "violet"
                          ? "border-violet-300/25 bg-violet-400/10 hover:bg-violet-400/15"
                          : factor.color === "emerald"
                            ? "border-emerald-300/25 bg-emerald-400/10 hover:bg-emerald-400/15"
                            : "border-amber-300/25 bg-amber-400/10 hover:bg-amber-400/15"
                  }`}
                >
                  {/* Number */}
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black ${
                      factor.color === "cyan"
                        ? "bg-cyan-400/15 text-cyan-300"
                        : factor.color === "blue"
                          ? "bg-blue-400/15 text-blue-300"
                          : factor.color === "violet"
                            ? "bg-violet-400/15 text-violet-300"
                            : factor.color === "emerald"
                              ? "bg-emerald-400/15 text-emerald-300"
                              : "bg-amber-400/15 text-amber-300"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h4 className="mt-5 text-lg font-black text-white">
                    {factor.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {factor.text}
                  </p>
                </div>
              ))}
            </div>

            {/* =====================================================
                PROPRIETARY QVS ENGINE
            ====================================================== */}
            <div className="mt-10">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                {/* Input */}
                <div className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center md:w-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Assessment Context
                  </p>

                  <p className="mt-1 font-bold text-slate-200">
                    Cryptographic + Environment Signals
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden text-2xl font-black text-cyan-400 md:block">
                  →
                </div>

                <div className="text-2xl font-black text-cyan-400 md:hidden">
                  ↓
                </div>

                {/* Proprietary Engine */}
                <div className="w-full rounded-xl border border-violet-400/20 bg-violet-500/10 px-6 py-4 text-center md:w-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
                    Proprietary Engine
                  </p>

                  <p className="mt-1 font-bold text-white">
                    Weighted Risk Methodology
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden text-2xl font-black text-cyan-400 md:block">
                  →
                </div>

                <div className="text-2xl font-black text-cyan-400 md:hidden">
                  ↓
                </div>

                {/* Output */}
                <div className="w-full rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-6 py-4 text-center md:w-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    Output
                  </p>

                  <p className="mt-1 font-bold text-white">
                    QVS · 0–100
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              QVS ASSESSMENT PIPELINE
          ========================================================== */}
          <div className="mt-10">
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
              QVS Assessment Pipeline
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {flow.map((item) => (
                <div
                  key={item.step}
                  className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    item.color === "cyan"
                      ? "border-cyan-400/20 bg-cyan-500/10 hover:bg-cyan-500/15"
                      : item.color === "violet"
                        ? "border-violet-400/20 bg-violet-500/10 hover:bg-violet-500/15"
                        : "border-emerald-400/20 bg-emerald-500/10 hover:bg-emerald-500/15"
                  }`}
                >
                  {/* Step */}
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

                  {/* Title */}
                  <h4 className="mt-3 text-2xl font-black text-white">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            RISK TIERS
        ========================================================== */}
        <div className="mt-12">
          <h3 className="text-center text-3xl font-black text-white">
            Risk Tiers & Response Priority
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-400">
            QVS findings are grouped into risk tiers to help security teams
            prioritize remediation and migration activities.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {riskTiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-3xl border ${tier.border} ${tier.bg} p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Tier */}
                <h4 className={`text-xl font-black ${tier.color}`}>
                  {tier.label}
                </h4>

                {/* Action */}
                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-300">
                  {tier.action}
                </p>

                {/* Priority Indicator */}
                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-white">
                  Risk Priority
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}