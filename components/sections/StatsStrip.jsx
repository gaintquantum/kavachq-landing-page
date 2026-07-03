"use client";

export default function StatsStrip() {
  const stats = [
    { value: "6", label: "Pipeline Stages", tone: "cyan" },
    { value: "7", label: "Scanner Modules", tone: "blue" },
    { value: ">=95%", label: "Detection Accuracy", tone: "emerald" },
    { value: "QVS", label: "Quantum Risk Score", tone: "violet" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-cyan-100/10 bg-[#1f4a75] px-6 py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(16,185,129,0.1),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/25 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <article
            key={item.label}
            className="group relative min-h-44 overflow-hidden rounded-2xl border border-cyan-100/15 bg-slate-950/64 p-6 shadow-[0_20px_70px_rgba(2,8,23,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-slate-950/76"
          >
            <div className={`absolute inset-x-0 top-0 h-1 ${getTone(item.tone).bar}`} />
            <div className={`absolute -right-14 -top-14 h-32 w-32 rounded-full blur-2xl transition duration-300 ${getTone(item.tone).glow}`} />

            <div className="absolute right-5 top-5 text-6xl font-black leading-none text-white/[0.035] transition duration-300 group-hover:text-white/6">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div className={`mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl border text-xs font-black tracking-[0.18em] ${getTone(item.tone).badge}`}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className={`text-4xl font-black tracking-tight md:text-5xl ${getTone(item.tone).value}`}>
                  {item.value}
                </h3>

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-cyan-50/70">
                  {item.label}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function getTone(tone) {
  const tones = {
    cyan: {
      bar: "bg-cyan-300",
      glow: "bg-cyan-300/20 group-hover:bg-cyan-300/30",
      badge: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
      value: "text-cyan-200",
    },
    blue: {
      bar: "bg-sky-300",
      glow: "bg-sky-300/20 group-hover:bg-sky-300/30",
      badge: "border-sky-300/30 bg-sky-300/10 text-sky-200",
      value: "text-sky-200",
    },
    emerald: {
      bar: "bg-emerald-300",
      glow: "bg-emerald-300/18 group-hover:bg-emerald-300/28",
      badge: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
      value: "text-emerald-200",
    },
    violet: {
      bar: "bg-violet-300",
      glow: "bg-violet-300/20 group-hover:bg-violet-300/30",
      badge: "border-violet-300/30 bg-violet-300/10 text-violet-200",
      value: "text-violet-200",
    },
  };

  return tones[tone] ?? tones.cyan;
}
