"use client";

export default function Shield3D() {
  return (
    <div className="relative mx-auto shield-root overflow-visible">
      <div className="absolute inset-0 flex items-center justify-center shield-offset">
        {/* Main glow */}
        <div className="shield-glow absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/3 rounded-full bg-red-50 blur-3xl" />

        {/* Animated rings */}
        <div className="scan-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/25" />
        <div className="scan-ring-fast absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/35" />
        <div className="scan-ring-reverse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />

        {/* Decorative orbit lines */}
        <div className="orbit-line orbit-one absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
        <div className="orbit-line orbit-two absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

        {/* Shield */}
        <div className="shield-float absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 240 300" className="shield-svg">
            <path
              d="M120 10 L220 55 V130 C220 205 175 260 120 290 C65 260 20 205 20 130 V55 Z"
              fill="rgba(3,18,34,0.95)"
              stroke="#00d4ff"
              strokeWidth="4"
            />

            <path
              d="M120 42 L190 75 V130 C190 185 160 225 120 250 C80 225 50 185 50 130 V75 Z"
              fill="rgba(0,212,255,0.05)"
              stroke="rgba(0,212,255,0.5)"
              strokeWidth="2"
            />

            <path
              d="M120 10 L220 55 V130 C220 205 175 260 120 290"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
            />
          </svg>

          {/* Inner QVS */}
          <div className="absolute left-1/2 inner-qvs-center flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full inner-qvs-ring border-cyan-400/80">
            <div className="inner-ring absolute h-24 w-24 rounded-full border border-cyan-300/40" />
            <div className="scanner-dot absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 scanner-dot-shadow" />

            <div className="text-center">
              <div className="pulse-score text-5xl font-black text-cyan-300">
                78
              </div>
              <div className="text-meta-xs uppercase text-cyan-100/70">
                Quantum Risk
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="status-switcher">
        <div className="status-card">
          <div className="status-state status-red">
            <div className="status-title text-2xl font-black text-red-600">
              RSA-2048
            </div>
            <div className="status-subtitle mt-2 uppercase tracking-[0.18em] text-red-300">
              Quantum Vulnerable · QVS 91
            </div>
          </div>

          <div className="status-state status-green">
            <div className="status-label uppercase tracking-[0.22em] text-xs text-cyan-200">
              Algorithm
            </div>
            <div className="status-title text-2xl font-black text-green-600 ">
              ML-KEM-768
            </div>
            <div className="status-subtitle mt-2 uppercase tracking-[0.18em] text-emerald-300">
              Migrated · PQC Safe
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <InfoCard
        className="card-pos-1 border-red-500/40"
        icon="⚠"
        iconClass="bg-red-500/15 text-red-400"
        title="RSA-2048"
        titleClass="text-red-400"
        subtitle="Quantum Vulnerable · QVS 91"
      />

      <InfoCard
        className="card-pos-2 border-emerald-500/40"
        icon="✓"
        iconClass="bg-emerald-500/15 text-emerald-400"
        title="ML-KEM-768"
        titleClass="text-emerald-400"
        subtitle="Post Quantum Ready"
      />

      <InfoCard
        className="card-pos-3 border-amber-500/40"
        icon="⌕"
        iconClass="bg-amber-500/15 text-amber-400"
        title="14,821"
        titleClass="text-amber-300"
        subtitle="Assets Scanned"
      />

      <InfoCard
        className="card-pos-4 border-cyan-500/40"
        icon="78"
        iconClass="bg-cyan-500/15 text-cyan-300"
        title="QVS Score"
        titleClass="text-cyan-300"
        subtitle="Enterprise Risk"
      />

      {/* Bottom metrics */}
      <div className="metrics-bar absolute bottom-0 ml-10 left-1/2 w-212.5 max-w-[95%] -translate-x-1/2 rounded-2xl border border-cyan-400/20 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Metric value="1,248" label="Repositories" />
          <Metric value="3,592" label="Servers" />
          <Metric value="842" label="Containers" />
          <Metric value="2,116" label="Documents" />
          <Metric value="98.7%" label="Coverage" />
        </div>
      </div>
    </div>
  );
}

function InfoCard({ className, icon, iconClass, title, titleClass, subtitle }) {
  return (
    <div
      className={`card-float absolute z-20 rounded-xl border bg-[#071426]/95 px-4 py-3 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-base font-bold ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <div className={`truncate text-xl font-extrabold ${titleClass}`}>
            {title}
          </div>

          <div className="mt-1 truncate text-meta-sm uppercase text-slate-400">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-xl font-bold text-cyan-300">{value}</div>

      <div className="mt-0 text-meta-s font-bold text-white">{label}</div>
    </div>
  );
}
