import {
  Binary,
  Boxes,
  ChevronDown,
  Code2,
  Eye,
  Fingerprint,
  Gauge,
  LockKeyhole,
  Route,
  ScanSearch,
  Server,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Source Code Review",
    desc: "KAVACH-Q will analyze application source code to discover cryptographic usage, risky algorithms, weak implementation patterns and evidence required for security review.",
  },
  {
    icon: LockKeyhole,
    title: "TLS & Certificate Analysis",
    desc: "It will inspect exposed endpoints, certificates, expiry status, issuer chains, TLS configuration and weak cryptographic protocols used in live services.",
  },
  {
    icon: Binary,
    title: "Binary & Runtime Inspection",
    desc: "It will check compiled applications and runtime environments to detect embedded crypto usage, hardcoded keys and hidden cryptographic patterns.",
  },
  {
    icon: Server,
    title: "Infrastructure & API Review",
    desc: "It will review servers, APIs, infrastructure services and configurations to understand cryptographic exposure and migration readiness.",
  },
  {
    icon: Boxes,
    title: "Container & Kubernetes Checks",
    desc: "It will scan container workloads, Kubernetes deployments, secrets and environment configurations for crypto assets and security risks.",
  },
  {
    icon: Eye,
    title: "Legacy Document Discovery",
    desc: "It will extract cryptographic references from old documents, scanned records, architecture files and audit materials that normal scanners may miss.",
  },
  {
    icon: Fingerprint,
    title: "Library & Dependency Mapping",
    desc: "It will map libraries, dependencies and SBOM data to cryptographic risk categories for faster software supply-chain review.",
  },
];

const outcomes = [
  {
    icon: ScanSearch,
    title: "Discover",
    accent: "cyan",
    desc: "Find every certificate, key, and algorithm across applications, APIs, infrastructure, containers, dependencies, binaries, and legacy systems—then map them into a centralized Cryptographic Bill of Materials (CBOM).",
  },
  {
    icon: Gauge,
    title: "Assess",
    accent: "amber",
    desc: "Assign a 0–100 quantum-vulnerability score to each asset, including expired certificates, SHA-1 usage, hardcoded keys, and unencrypted DPDPA-covered data, prioritized against applicable CERT-IN and RBI requirements.",
  },
  {
    icon: Route,
    title: "Prepare",
    accent: "emerald",
    desc: "Build a board-ready migration plan mapped to NIST FIPS 203, 204, and 205, with exportable, signed, audit-ready, and auditor-verifiable evidence for applicable ISO 27001:2022 requirements.",
  },
];

const cardTone = {
  cyan: {
    card: "border-cyan-200 hover:border-cyan-300",
    icon: "border-cyan-200 bg-cyan-50 text-cyan-700",
    label: "text-cyan-800",
  },
  amber: {
    card: "border-amber-200 hover:border-amber-300",
    icon: "border-amber-200 bg-amber-50 text-amber-700",
    label: "text-amber-800",
  },
  emerald: {
    card: "border-emerald-200 hover:border-emerald-300",
    icon: "border-emerald-200 bg-emerald-50 text-emerald-700",
    label: "text-emerald-800",
  },
};

export default function ScannerModules() {
  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-white px-5 py-16 text-slate-950 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(167,139,250,0.12),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-[75rem]">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 sm:text-sm">
            CERT-IN · RBI · ISO 27001 · MeitY NQM Aligned
          </p>

          <h2 className="mx-auto mt-4 max-w-[74rem] text-[clamp(2rem,4vw,3rem)] font-black leading-[1.12] tracking-tight text-slate-950">
            <span className="block">Find Every RSA and ECC Key</span>
            <span className="block bg-linear-to-r from-cyan-700 via-blue-600 to-violet-700 bg-clip-text text-transparent">
              Before the Quantum Deadline Finds You.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            KAVACH-Q discovers RSA, ECC, and legacy cryptographic assets across
            your technology estate, scores each finding, and maps the results
            to applicable post-quantum standards and compliance requirements.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => {
            const Icon = item.icon;
            const tone = cardTone[item.accent];
            return (
              <article
                key={item.title}
                className={`rounded-3xl border bg-white p-6 text-left transition-colors sm:p-7 ${tone.card} ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl border ${tone.icon}`}
                >
                  <Icon
                    className="size-6"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <h3 className={`mt-6 text-2xl font-black tracking-tight ${tone.label}`}>
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>

        <details className="group mt-6 rounded-2xl border border-slate-200 bg-white/90">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4285F4] sm:px-6 [&::-webkit-details-marker]:hidden">
            View detailed cryptographic discovery coverage
            <ChevronDown
              className="size-5 shrink-0 text-cyan-700 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="grid gap-px border-t border-slate-200 bg-slate-200 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="flex gap-4 bg-white p-5 sm:p-6"
                >
                  <Icon
                    className="mt-0.5 size-5 shrink-0 text-cyan-700"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {capability.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {capability.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </details>
      </div>
    </section>
  );
}
