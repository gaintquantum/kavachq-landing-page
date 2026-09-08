import {
  Binary,
  Boxes,
  Code2,
  Eye,
  Fingerprint,
  LockKeyhole,
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

export default function ScannerModules() {
  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-[#1f4a75] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(167,139,250,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
          CERT-IN · RBI · ISO 27001 · MeitY NQM Aligned
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
          Find Every R0SA and ECC Key
          <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-violet-200 bg-clip-text text-transparent">
            Before the Quantum Deadline Finds You.
          </span>
        </h2>

        <p className="mt-8 text-2xl leading-9 text-white/80">
          KAVACH-Q discovers RSA, ECC, and legacy cryptographic assets across
          your technology estate, scores them against NIST FIPS 203, 204, and
          205, and maps each finding to applicable CERT-IN, RBI, and ISO
          27001:2022 requirements.
        </p>

        <p className="mt-6 text-2xl leading-9 text-white/80">
          Every finding—from expired certificates and SHA-1 usage to hardcoded
          keys and unencrypted DPDPA-covered data—is risk-scored, mapped to the
          relevant compliance requirement, and included in an exportable,
          audit-ready report.
        </p>

        <p className="mt-6 text-2xl leading-9 text-white/80">
          Applications, APIs, certificates, infrastructure, containers,
          dependencies, binaries, and legacy systems—all visible through one
          centralized cryptographic inventory.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-300/30 bg-cyan-400/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-cyan-200">Discover</h3>

            <p className="mt-4 text-white/75">
              Every certificate, key, and algorithm—mapped into a
              Cryptographic Bill of Materials (CBOM).
            </p>
          </div>

          <div className="rounded-3xl border border-amber-300/30 bg-amber-400/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-amber-100">Assess</h3>

            <p className="mt-4 text-white/75">
              A 0–100 quantum-vulnerability score for each asset, prioritized
              against applicable CERT-IN and RBI requirements.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-300/30 bg-emerald-400/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-emerald-100">Prepare</h3>

            <p className="mt-4 text-white/75">
              A board-ready migration plan supported by signed,
              auditor-verifiable compliance evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}