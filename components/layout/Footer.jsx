const footerLinks = [
  {
    title: "Platform",
    links: [
      ["Pipeline", "#pipeline"],
      ["QVS", "#qvs"],
      ["Scanner Modules", "#modules"],
      ["Deployment", "#deployment"],
    ],
  },
  {
    title: "Coverage",
    links: [
      ["Compliance", "#compliance"],
      ["Target Sectors", "#who"],
      ["Request Demo", "#cta"],
    ],
  },
];

const standards = ["CERT-IN", "RBI", "ISO 27001", "NIST PQC", "DPDPA 2023"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-100/10 bg-[#102f4f] px-6 py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <h2 className="bg-linear-to-r from-cyan-200 via-sky-300 to-emerald-200 bg-clip-text text-2xl font-black text-transparent">
              KAVACH-Q
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              GAINT's quantum-safe security platform for cryptographic
              discovery, QVS scoring, migration planning, and audit-ready
              compliance evidence.
            </p>
            <p className="mt-5 text-xs font-bold tracking-[0.24em] text-cyan-100/70">
              Built in India.for India.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black tracking-[0.2em] text-cyan-100">
                {group.title}
              </h3>
              <div className="mt-5 grid gap-3">
                {group.links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm text-slate-300 transition hover:text-cyan-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {standards.map((standard) => (
                <span
                  key={standard}
                  className="rounded-full border border-cyan-200/15 bg-white/5 px-3 py-1 text-center text-xs font-bold text-cyan-100"
                >
                  {standard}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-400">
              © 2026 KAVACH-Q. Quantum Safe Security Platform.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-center">
            <div>
              <h2 className="text-lg font-bold text-cyan-100">
                CIN: U62013TS2024PTCC186957
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Gaint Clout Technologies Private Limited Sy No 83/1, Plot No:
                25 30/C, Knowledge City Rd, Panmaktha, <span className="text-cyan-100 text-right">Hyderabad,Rai Durg,
                Telangana 500032</span>
              </p>
            </div>

            <a
              href="mailto:info@gaintclout.com"
              className="mt-4 inline-block text-sm font-semibold text-cyan-200 transition hover:text-white"
            >
              info@gaintclout.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
