export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="glass rounded-3xl p-12">
          <h2 className="text-5xl font-bold">
            Start Your
            <span className="gradient-text block">Quantum-Safe Journey</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Detect vulnerable cryptography, score enterprise risk, and plan
            post-quantum migration with KAVACH-Q.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
              Request Demo
            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}