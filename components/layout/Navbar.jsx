"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-2xl font-bold tracking-wider">
          <img src="/kavachLogo.png" alt="KAVACH-Q" className="h-16 w-16  " />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#pipeline"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Pipeline
          </a>

          <a
            href="#qvs"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            QVS
          </a>

          <a
            href="#modules"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Modules
          </a>

          <a
            href="#compliance"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Compliance
          </a>

          <a
            href="#deployment"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Deployment
          </a>
        </nav>

        <button className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20">
          Request Demo
        </button>
      </div>
    </header>
  );
}
