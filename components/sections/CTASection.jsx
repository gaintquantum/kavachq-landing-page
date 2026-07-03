export default function CTASection() {
  const stats = [
    ["7", "Scanner Modules"],
    ["QVS", "Quantum Risk Scoring"],
    ["24h", "Compliance Reporting"],
  ];

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
    <section
      id="cta"
      className="relative scroll-mt-20 overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-position-[44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_12%_80%,rgba(16,185,129,0.1),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-cyan-100/15 bg-slate-950/70 shadow-[0_30px_100px_rgba(2,8,23,0.32)] backdrop-blur-xl">
          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-300" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                  Start Today
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                India's quantum clock
                <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
                  is ticking.
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                Start your crypto inventory today. KAVACH-Q gives you a complete
                cryptographic posture report, QVS scores for every asset, and a
                CERT-IN aligned remediation roadmap.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={demoRequestHref}
                  className="group inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-sm font-black text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  Request a Demo
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#deployment"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-200/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-cyan-200/45 hover:bg-cyan-300/10"
                >
                  View Deployment Flow
                </a>
              </div>
            </div>

            <div className="grid content-start gap-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-cyan-100/15 bg-white/4.5 p-6 transition duration-300 hover:border-cyan-200/30 hover:bg-white/6.5"
                >
                  <div className="text-4xl font-black tracking-tight text-cyan-200">
                    {value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-300">
                    {label}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">
                CERT-IN • RBI • ISO 27001 • NIST PQC • DPDPA 2023
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 px-7 py-6 text-center md:px-10 lg:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-100/75">
              Built in India.for India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
