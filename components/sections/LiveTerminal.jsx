"use client";
import { FiActivity, FiLayers, FiRefreshCw, FiGitBranch, FiAlertTriangle } from "react-icons/fi";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
const features = [
  { title: "Fast API response via Kafka async pipeline", desc: "scan_id is returned immediately, keeping scan requests asynchronous and preventing duplicate submissions.", icon: FiActivity, color: "text-violet-700 bg-violet-50" },
  { title: "3-tier priority queues", desc: "Critical · Standard · Background — prioritized processing for time-sensitive security findings.", icon: FiLayers, color: "text-amber-700 bg-amber-50" },
  { title: "Scan resume on disconnect", desc: "AES-256-GCM encrypted Redis checkpoints allow interrupted scans to resume from the last completed file batch.", icon: FiRefreshCw, color: "text-emerald-700 bg-emerald-50" },
  { title: "Git-diff differential scanning", desc: "Scan only files changed since the last commit SHA to reduce unnecessary scanning and compute.", icon: FiGitBranch, color: "text-cyan-700 bg-cyan-50" },
];
export default function LiveOperations() {
  return (
    <section id="live" aria-labelledby="live-heading" data-native className="scroll-mt-24 px-4 py-16 text-ink-soft sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid w-full max-w-325 items-center gap-10 xl:grid-cols-[48fr_52fr] xl:gap-12">
        <Reveal className="min-w-0">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-700">
            <span className="h-px w-4 bg-cyan-300" aria-hidden="true" />
            Live Operations
          </div>
          <h2 id="live-heading" className="text-[clamp(1.875rem,1.1rem+2vw,2.75rem)] font-black leading-[1.12] tracking-tight text-ink">
            <span className="block">Real-time detection.</span>
            <span className="block">Zero-touch response.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
            WebSocket progress streams provide near real-time scan visibility. Resilient asynchronous processing allows scans to resume after agent disconnects, with encrypted checkpoints maintained in Redis.
          </p>
          <RevealGroup as="ul" delay={0.1} className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-1">
            {features.map(({ title, desc, icon: Icon, color }) => (
              <RevealItem as="li" key={title} className="group flex h-full items-start gap-4 rounded-xl border border-cyan-200 bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-surface-muted motion-reduce:transform-none">
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-line ${color} transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none`}>
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[0.975rem] font-semibold leading-6 text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">{desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
        {/* Arbitrary radius keeps the global light-theme card override from flattening terminal colours. */}
        <Reveal as="figure" delay={0.1} className="relative w-full min-w-0 max-w-3xl overflow-hidden xl:max-w-none rounded-[0.875rem] border border-cyan-200 bg-surface-muted shadow-2xl shadow-cyan-950/20" aria-label="Simulated scanner output (demo data)">
          <div className="flex items-center gap-2 border-b border-cyan-200 bg-cyan-50 px-5 py-3.5">
            <span className="size-2.5 rounded-full bg-red-400" aria-hidden="true" />
            <span className="size-2.5 rounded-full bg-yellow-400" aria-hidden="true" />
            <span className="size-2.5 rounded-full bg-green-400" aria-hidden="true" />
            <span className="ml-auto flex items-center gap-2.5">
              <span className="hidden font-mono text-[11px] uppercase tracking-wider text-slate-500 sm:inline">kavachq-scanner v1.0 · DEMO</span>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">Simulated · Not live</span>
            </span>
          </div>
          <div className="flex items-start gap-2.5 border-b border-amber-200 bg-amber-50 px-5 py-3">
            <FiAlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-700" aria-hidden="true" />
            <p className="text-xs leading-5 text-amber-700">
              DEMO TENANT · Synthetic organization, endpoints, files and findings shown for illustration only. No client or government infrastructure is represented.
            </p>
          </div>
          <span className="pointer-events-none absolute inset-x-0 top-32 z-10 h-12 animate-scan-line bg-linear-to-b from-transparent via-cyan-300/20 to-transparent motion-reduce:hidden" style={{ "--scan-distance": "360px" }} aria-hidden="true" />
          <RevealGroup stagger={0.14} delay={0.35} className="space-y-0.5 overflow-x-auto p-5 font-mono text-[13px] leading-7 wrap-break-word sm:text-sm">
            <RevealItem as="p" y={6}><span className="text-cyan-700">scanner@kavachq:~$</span> <span className="text-ink-soft">scan --org ORG_DEMO --depth FULL</span></RevealItem>
            <RevealItem as="p" y={6} className="text-slate-500">Initialising 7 scanner modules...</RevealItem>
            <RevealItem as="p" y={6} className="text-emerald-700">✓ tree-sitter AST · Java/Python/Go/C++/JS</RevealItem>
            <RevealItem as="p" y={6} className="text-emerald-700">✓ sslyze TLS · demo endpoints queued</RevealItem>
            <RevealItem as="p" y={6} className="text-emerald-700">✓ Kafka scan-requests topic published</RevealItem>
            <RevealItem as="p" y={6} className="text-slate-500" aria-hidden="true">──────────────────────────────────</RevealItem>
            <RevealItem as="p" y={6}><span className="text-amber-700">⚠ [M1]</span> RSA-2048 · <span className="text-ink">PaymentGateway.java:142</span></RevealItem>
            <RevealItem as="p" y={6} className="pl-4 text-slate-500">method: RSAKey.generate(2048) · AST · HIGH</RevealItem>
            <RevealItem as="p" y={6} className="pl-4 text-emerald-700">✓ QVS: 91 → CRITICAL · Demo SLA: 30 days</RevealItem>
            <RevealItem as="p" y={6}><span className="text-red-700">✗ [M2]</span> TLS 1.1 + Expired cert · <span className="text-ink">api.demo.internal</span></RevealItem>
            <RevealItem as="p" y={6} className="pl-4 text-slate-500">RSA-2048 · Certificate expired · DEMO FINDING</RevealItem>
            <RevealItem as="p" y={6} className="pl-4 text-emerald-700">✓ PKI policy citation attached</RevealItem>
            <RevealItem as="p" y={6}><span className="text-amber-700">⚠ [M6]</span> Legacy PDF · <span className="text-ink">Bank_Sandbox_01_Mainframe.pdf</span></RevealItem>
            <RevealItem as="p" y={6} className="pl-4 text-slate-500">Document analysis: DES-56 on p.14 · HIGH</RevealItem>
            <RevealItem as="p" y={6} className="pl-4 text-emerald-700">✓ QVS: 98 → CRITICAL · Demo plan triggered</RevealItem>
            <RevealItem as="p" y={6}><span className="text-cyan-700">scanner@kavachq:~$</span> <span className="inline-block h-3.5 w-2 animate-pulse bg-cyan-300 align-middle motion-reduce:animate-none" aria-hidden="true" /></RevealItem>
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
