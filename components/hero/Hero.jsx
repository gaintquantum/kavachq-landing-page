"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid Background */}
      <div className="hero-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Quantum-Safe Security Platform
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
              Secure Your Enterprise For The
              <span className="gradient-text block">
                Post-Quantum Era
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Discover cryptographic risks, calculate Quantum Vulnerability
              Scores (QVS), plan migrations, and achieve compliance with
              future-ready security standards.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105">
                Request Demo
              </button>

              <button className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:border-cyan-400">
                View Architecture
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">7+</h3>
                <p className="text-sm text-slate-400">Scanner Modules</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="text-sm text-slate-400">Crypto Visibility</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">QVS</h3>
                <p className="text-sm text-slate-400">
                  Risk Quantification Engine
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-center">
            <div className="glass w-full max-w-md rounded-3xl p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  Quantum Vulnerability Score
                </span>

                <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-300">
                  HIGH RISK
                </span>
              </div>

              <div className="text-center">
                <h2 className="text-8xl font-bold gradient-text">
                  78
                </h2>

                <p className="mt-2 text-slate-400">
                  Current QVS Score
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>RSA-2048</span>
                  <span className="text-red-400">Quantum Vulnerable</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>TLS Audit</span>
                  <span className="text-yellow-400">Review Needed</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>PQC Readiness</span>
                  <span className="text-green-400">In Progress</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}