export default function LiveTerminal() {
  const logs = [
    "$ kavachq scan --target enterprise-repo",
    "✓ Repository cloned successfully",
    "✓ RSA-2048 usage detected",
    "✓ TLS configuration analyzed",
    "✓ Crypto assets indexed",
    "✓ QVS calculated: 78 HIGH",
    "✓ Migration report generated",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-bold">
              Live Scan
              <span className="gradient-text block">Terminal</span>
            </h2>

            <p className="mt-6 text-slate-300">
              Real-time visibility into cryptographic discovery, queue
              execution, risk scoring, and migration reporting.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60">
            <div className="flex gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-3 p-6 font-mono text-sm text-green-400">
              {logs.map((log) => (
                <p key={log}>{log}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}