export default function PricingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#02111c]! text-[#ffffff]!">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[url('/pricing-globe.png')] bg-size-[auto_310px] bg-position-[right_95px_top] bg-no-repeat opacity-60 sm:opacity-100" />
      <div className="mx-auto flex min-h-72 max-w-6xl items-center justify-between gap-6 px-6 py-12 sm:py-14 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#aed5e9]">Pricing</p>
          <h1 className="mb-5 text-[32px]! leading-[1.12] font-bold! tracking-tight text-[#ffffff]! sm:text-[42px]!">
            Quantum-safe your<br />organization <span className="text-[32px]! font-bold! text-[#338bec]! sm:text-[42px]!">today.</span>
          </h1>
          <p className="max-w-xl text-sm leading-6 text-[#e2e5e9] sm:text-base sm:leading-7">
            KAVACH-Q helps you discover, assess, remediate and comply — before quantum risk becomes a business risk.
          </p>
        </div>
        <div className="hidden w-48 shrink-0 pt-8 text-[#9bd3f2] lg:block">
          <p className="text-base leading-snug">A SAFER<br />DIGITAL INDIA<br />IN A QUANTUM WORLD</p>
          <div aria-hidden="true" className="my-3 flex h-1 w-16"><span className="flex-1 bg-green-600" /><span className="flex-1 bg-white" /><span className="flex-1 bg-orange-400" /></div>
          <small className="whitespace-nowrap text-[9px] text-[#b4c7d8]">SOVEREIGN &nbsp;|&nbsp; SECURE &nbsp;|&nbsp; RESILIENT</small>
        </div>
      </div>
    </section>
  );
}
