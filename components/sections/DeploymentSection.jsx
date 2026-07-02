"use client";

export default function DeploymentSection() {
  const steps = [
    {
      no: "01",
      title: "Download Agent",
      description:
        "Signed Go binary, SHA-256 verified, <20MB. Single executable — no runtime dependencies. Runs on Linux and Windows Server inside your network perimeter.",
      icon: "↓",
    },
    {
      no: "02",
      title: "mTLS Registration",
      description:
        "Agent registers via mutual TLS with institution-specific client certificate. All comms HMAC-SHA256 signed with per-request nonces, 60-second TTL. Zero implicit trust.",
      icon: "🔒",
    },
    {
      no: "03",
      title: "Scan & Score",
      description:
        "All 7 scanner modules run against internal targets. QVS scores computed in real time. CRITICAL findings trigger CISO alerts within 4 hours. Coverage report flags <98% gaps.",
      icon: "◉",
    },
    {
      no: "04",
      title: "Migrate & Report",
      description:
        "CAB-approved liboqs PQC artifacts applied by agent inside your perimeter. CI/CD gates block new vulnerable crypto in every PR. Signed compliance reports within 24 hours.",
      icon: "✓",
    },
  ];

  return (
    <section id="deploy" className="bg-[#020915] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-px w-4 bg-cyan-300" />
            Secure Deployment
          </div>

          <h2 className="font-syne text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Built for air-gapped
            <br />
            government networks.
          </h2>

          <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-[#6b8faf]">
            The KAVACH-Q on-premise agent is a single Go binary under 20MB.
            No data leaves the institution perimeter. mTLS authentication
            with nonce-based HMAC-SHA256 request signing. Deployable inside
            NIC infrastructure today.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-px bg-cyan-400/5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.no}
              className="relative bg-[#06101f] p-8 transition-all duration-300 hover:bg-[#091628]"
            >
              {/* Number Circle */}
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-500/5 text-lg font-black text-cyan-300">
                {step.no}
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-cyan-400/20 xl:block">
                  →
                </div>
              )}

              <h3 className="mb-3 font-syne text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="text-sm leading-7 text-[#6b8faf]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}