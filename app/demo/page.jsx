export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-32 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold">
          Book a <span className="gradient-text">KAVACH-Q Demo</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          See how KAVACH-Q discovers cryptographic assets, calculates QVS, and creates a post-quantum migration plan.
        </p>

        <div className="glass mx-auto mt-10 max-w-2xl rounded-3xl p-8 text-left">
          <input className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 p-4" placeholder="Full Name" />
          <input className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 p-4" placeholder="Work Email" />
          <input className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 p-4" placeholder="Company Name" />

          <button className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
            Request Demo
          </button>
        </div>
      </div>
    </main>
  );
}