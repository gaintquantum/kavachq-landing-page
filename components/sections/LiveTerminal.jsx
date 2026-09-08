"use client";

import {
  FiActivity,
  FiLayers,
  FiRefreshCw,
  FiGitBranch,
} from "react-icons/fi";

export default function LiveOperations() {
  const features = [
    {
      title: "Fast API response via Kafka async pipeline",
      desc: "scan_id is returned immediately, keeping scan requests asynchronous and preventing duplicate submissions.",
      icon: FiActivity,
      color: "text-violet-300 bg-violet-500/10",
    },
    {
      title: "3-tier priority queues",
      desc: "Critical · Standard · Background — prioritized processing for time-sensitive security findings.",
      icon: FiLayers,
      color: "text-amber-300 bg-amber-500/10",
    },
    {
      title: "Scan resume on disconnect",
      desc: "AES-256-GCM encrypted Redis checkpoints allow interrupted scans to resume from the last completed file batch.",
      icon: FiRefreshCw,
      color: "text-emerald-300 bg-emerald-500/10",
    },
    {
      title: "Git-diff differential scanning",
      desc: "Scan only files changed since the last commit SHA to reduce unnecessary scanning and compute.",
      icon: FiGitBranch,
      color: "text-cyan-300 bg-cyan-500/10",
    },
  ];

  return (
    <section
      id="live"
      className="bg-[#1f4a75] py-24 text-[#c8dced]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* =========================================================
              LEFT CONTENT
          ========================================================== */}
          <div>
            {/* Section Label */}
            <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-px w-4 bg-cyan-300" />
              Live Operations
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Real-time detection.
              <br />
              Zero-touch response.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#8eabc5]">
              WebSocket progress streams provide near real-time scan visibility.
              Resilient asynchronous processing allows scans to resume after
              agent disconnects, with encrypted checkpoints maintained in Redis.
            </p>

            {/* =========================================================
                FEATURE CARDS
            ========================================================== */}
            <div className="mt-10 flex flex-col gap-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-xl border border-cyan-400/[0.07] bg-[#091628]/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#091628]/70"
                  >
                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 ${item.color} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="text-xs leading-6 text-[#8eabc5]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              TERMINAL / LIVE SCANNER
          ========================================================== */}
          <div className="overflow-hidden rounded-xl border border-cyan-400/[0.14] bg-[#010a16] shadow-2xl shadow-cyan-950/20">

            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-cyan-400/8 bg-cyan-400/4 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <span className="ml-auto text-[11px] uppercase tracking-wider text-[#6b8faf]">
                kavachq-scanner v1.0 · DEMO
              </span>
            </div>

            {/* =========================================================
                DEMO DISCLAIMER
            ========================================================== */}
            <div className="border-b border-amber-400/10 bg-amber-400/4 px-5 py-3">
              <p className="text-[10px] leading-5 text-amber-200/70">
                DEMO TENANT · Synthetic organization, endpoints, files and
                findings shown for illustration only. No client or government
                infrastructure is represented.
              </p>
            </div>

            {/* =========================================================
                TERMINAL CONTENT
            ========================================================== */}
            <div className="space-y-1 p-5 text-xs leading-7">

              {/* Command */}
              <p>
                <span className="text-cyan-300">
                  scanner@kavachq:~$
                </span>{" "}
                <span className="text-[#c8dced]">
                  scan --org ORG_DEMO --depth FULL
                </span>
              </p>

              {/* Scanner Initialization */}
              <p className="text-[#2e4a66]">
                Initialising 7 scanner modules...
              </p>

              <p className="text-emerald-400">
                ✓ tree-sitter AST · Java/Python/Go/C++/JS
              </p>

              <p className="text-emerald-400">
                ✓ sslyze TLS · demo endpoints queued
              </p>

              <p className="text-emerald-400">
                ✓ Kafka scan-requests topic published
              </p>

              <p className="text-[#2e4a66]">
                ──────────────────────────────────
              </p>

              {/* =====================================================
                  FINDING 1
              ====================================================== */}
              <p>
                <span className="text-amber-300">
                  ⚠ [M1]
                </span>{" "}
                RSA-2048 ·{" "}
                <span className="text-white">
                  PaymentGateway.java:142
                </span>
              </p>

              <p className="pl-4 text-[#2e4a66]">
                method: RSAKey.generate(2048) · AST · HIGH
              </p>

              <p className="pl-4 text-emerald-400">
                ✓ QVS: 91 → CRITICAL · Demo SLA: 30 days
              </p>

              {/* =====================================================
                  FINDING 2
              ====================================================== */}
              <p>
                <span className="text-red-400">
                  ✗ [M2]
                </span>{" "}
                TLS 1.1 + Expired cert ·{" "}
                <span className="text-white">
                  api.demo.internal
                </span>
              </p>

              <p className="pl-4 text-[#2e4a66]">
                RSA-2048 · Certificate expired · DEMO FINDING
              </p>

              <p className="pl-4 text-emerald-400">
                ✓ PKI policy citation attached
              </p>

              {/* =====================================================
                  FINDING 3
              ====================================================== */}
              <p>
                <span className="text-amber-300">
                  ⚠ [M6]
                </span>{" "}
                Legacy PDF ·{" "}
                <span className="text-white">
                  Bank_Sandbox_01_Mainframe.pdf
                </span>
              </p>

              <p className="pl-4 text-[#2e4a66]">
                Document analysis: DES-56 on p.14 · HIGH
              </p>

              <p className="pl-4 text-emerald-400">
                ✓ QVS: 98 → CRITICAL · Demo plan triggered
              </p>

              {/* Terminal Prompt */}
              <p>
                <span className="text-cyan-300">
                  scanner@kavachq:~$
                </span>{" "}
                <span className="inline-block h-3 w-2 animate-pulse bg-cyan-300 align-middle" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 