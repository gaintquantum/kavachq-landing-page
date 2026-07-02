"use client";

export default function Navbar() {
  const demoRequestBody = encodeURIComponent(`Dear KAVACH-Q Team,

I would like to request a technical demonstration of the KAVACH-Q platform for our organization.

Organization Name:
Industry:
Contact Person:
Designation:
Phone Number:
Email Address:
Estimated Assets/Repositories:

We are interested in understanding:
- Cryptographic Discovery & Inventory
- Quantum Vulnerability Scoring (QVS)
- PQC Migration Planning
- Compliance & Reporting

Preferred Demo Date:

Regards,`);

  const demoRequestHref = `mailto:gaintquantum@gmail.com?subject=${encodeURIComponent(
    "KAVACH-Q Enterprise Demo Request"
  )}&body=${demoRequestBody}`;

  return (
    <header className="fixed left-10 right-0 top-5 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between rounded-full border border-cyan-400/20 bg-transparent px-8 shadow-[0_0_40px_rgba(6,182,212,0.12)] backdrop-blur-2xl">
          <a href="#" className="flex items-center">
            <img
              src="/KAVACH-Q logo with TM.png"
              alt="KAVACH-Q"
              className="h-18 w-18"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#pipeline"
              className="text-m font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            >
              Pipeline
            </a>

            <a
              href="#qvs"
              className="text-m font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            >
              QVS
            </a>

            <a
              href="#modules"
              className="text-m font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            >
              Modules
            </a>

            <a
              href="#compliance"
              className="text-m font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            >
              Compliance
            </a>

            <a
              href="#deployment"
              className="text-m font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            >
              Deployment
            </a>
          </nav>

          <a
            href={demoRequestHref}
            className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:text-white"
          >
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}
