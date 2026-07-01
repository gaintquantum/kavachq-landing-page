export default function QVSSection() {
  return (
    <section
      id="qvs"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl p-10">
          <h2 className="text-5xl font-bold">
            Quantum Vulnerability
            <span className="gradient-text block">
              Score (QVS)
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-slate-300">
            QVS calculates the overall quantum
            risk posture of an organization by
            analyzing cryptographic assets,
            exposure, dependency risk, and
            migration readiness.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold">
                LOW
              </h3>

              <p className="mt-2 text-slate-400">
                QVS 0 - 30
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-400">
                MEDIUM
              </h3>

              <p className="mt-2 text-slate-400">
                QVS 31 - 70
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-400">
                HIGH
              </h3>

              <p className="mt-2 text-slate-400">
                QVS 71 - 100
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}