"use client";

export default function LiveOperations() {
  const features = [
    {
      title: "<2s API response via Kafka async pipeline",
      desc: "scan_id returned instantly — no browser timeout, no duplicate submissions",
      icon: "⌁",
      color: "text-violet-300 bg-violet-500/10",
    },
    {
      title: "3-tier priority queues",
      desc: "Critical (80% capacity) · Standard (15%) · Background (5%)",
      icon: "☷",
      color: "text-amber-300 bg-amber-500/10",
    },
    {
      title: "Scan resume on disconnect",
      desc: "AES-256-GCM Redis checkpoint — restarts from last file batch in <5 min",
      icon: "↻",
      color: "text-emerald-300 bg-emerald-500/10",
    },
    {
      title: "Git-diff differential scanning",
      desc: "90% compute reduction — scan only files changed since last commit SHA",
      icon: "▣",
      color: "text-cyan-300 bg-cyan-500/10",
    },
  ];

  return (
    <section id="live" className="bg-[#1f4a75] py-24 text-[#c8dced]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-px w-4 bg-cyan-300" />
              Live Operations
            </div>

            <h2 className="font-syne text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Real-time detection.
              <br />
              Zero-touch response.
            </h2>

            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#6b8faf]">
              WebSocket progress streams every 2 seconds. Scan resumes
              automatically after agent disconnect — AES-256-GCM encrypted
              checkpoints in Redis. 100,000-file repo completed in under 4
              hours.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-md border border-cyan-400/[0.07] bg-[#091628]/50 p-5 transition hover:border-cyan-400/20"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-lg font-bold ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-6 text-[#6b8faf]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-cyan-400/[0.14] bg-[#010a16]">
            <div className="flex items-center gap-2 border-b border-cyan-400/8 bg-cyan-400/4 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-[#6b8faf]">
                kavachq-scanner v1.0 · LIVE
              </span>
            </div>

            <div className="space-y-1 p-5 font-mono text-xs leading-7">
              <p>
                <span className="text-cyan-300">scanner@kavachq:~$</span>{" "}
                <span className="text-[#c8dced]">
                  scan --org MINISTRY_FIN --depth FULL
                </span>
              </p>

              <p className="text-[#2e4a66]">Initialising 7 scanner modules...</p>
              <p className="text-emerald-400">
                ✓ tree-sitter AST · Java/Python/Go/C++/JS
              </p>
              <p className="text-emerald-400">
                ✓ sslyze TLS · 1,247 endpoints queued
              </p>
              <p className="text-emerald-400">
                ✓ Kafka scan-requests topic published
              </p>
              <p className="text-[#2e4a66]">
                ──────────────────────────────────
              </p>

              <p>
                <span className="text-amber-300">⚠ [M1]</span>{" "}
                RSA-2048 ·{" "}
                <span className="text-white">PaymentGateway.java:142</span>
              </p>
              <p className="pl-4 text-[#2e4a66]">
                method: RSAKey.generate(2048) · AST · HIGH
              </p>
              <p className="pl-4 text-emerald-400">
                ✓ QVS: 91 → CRITICAL · SLA: 30 days
              </p>

              <p>
                <span className="text-red-400">✗ [M2]</span>{" "}
                TLS 1.1 + Expired cert ·{" "}
                <span className="text-white">api.fin.gov.in</span>
              </p>
              <p className="pl-4 text-[#2e4a66]">
                RSA-2048 · Expiry: 2025-03-14 · EXPIRED
              </p>
              <p className="pl-4 text-emerald-400">
                ✓ CERT-IN PKI §5.1 citation attached
              </p>

              <p>
                <span className="text-amber-300">⚠ [M6]</span>{" "}
                Legacy PDF ·{" "}
                <span className="text-white">SBI_1998_Mainframe.pdf</span>
              </p>
              <p className="pl-4 text-[#2e4a66]">
                Claude Vision: DES-56 on p.14 · HIGH
              </p>
              <p className="pl-4 text-emerald-400">
                ✓ QVS: 98 → CRITICAL · Plan triggered
              </p>

              <p>
                <span className="text-cyan-300">scanner@kavachq:~$</span>{" "}
                <span className="inline-block h-3 w-2 animate-pulse bg-cyan-300 align-middle" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}