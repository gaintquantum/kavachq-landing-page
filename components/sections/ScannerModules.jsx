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
      What KAVACH-Q Does
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
      Discover. Analyze.
      <span className="block bg-linear-to-r from-cyan-200 via-sky-300 to-violet-200 bg-clip-text text-transparent">
        Prepare for Quantum Security.
      </span>
    </h2>

    <p className="mt-8 text-2xl leading-9 text-white/80">
      KAVACH-Q helps organizations understand where cryptography exists
      across their technology landscape and identifies assets that may be
      vulnerable in a post-quantum world.
    </p>

    <p className="mt-6 text-2xl leading-9 text-white/80">
      The platform automatically discovers cryptographic implementations,
      evaluates security posture, highlights potential quantum-era risks,
      generates evidence-backed findings, and provides actionable guidance
      for future migration planning.
    </p>

    <p className="mt-6 text-2xl leading-9 text-white/80">
      From applications and APIs to certificates, infrastructure,
      containers, dependencies, binaries, and legacy systems,
      KAVACH-Q provides a centralized view of cryptographic exposure
      and organizational readiness.
    </p>

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-cyan-300/20 bg-white/5 p-8 backdrop-blur-xl">
        <h3 className="text-xl font-bold text-cyan-200">Discover</h3>
        <p className="mt-4 text-white/75">
          Identify cryptographic assets and security dependencies across
          enterprise environments.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-300/20 bg-white/5 p-8 backdrop-blur-xl">
        <h3 className="text-xl font-bold text-cyan-200">Assess</h3>
        <p className="mt-4 text-white/75">
          Evaluate cryptographic exposure and understand potential
          quantum-related risks.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-300/20 bg-white/5 p-8 backdrop-blur-xl">
        <h3 className="text-xl font-bold text-cyan-200">Prepare</h3>
        <p className="mt-4 text-white/75">
          Build a roadmap for future quantum-safe migration and
          compliance readiness.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}