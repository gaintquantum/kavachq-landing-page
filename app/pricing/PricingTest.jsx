export default function PricingHeroGlobe() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Zoomed Globe Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[url('/Globe_test.png')]
          bg-size-[auto_520px]
          bg-position-[right_20px_center]
          bg-no-repeat
          opacity-100
          sm:bg-size-[auto_620px]
          lg:bg-size-[auto_720px]
        "
      />

      {/* Optional black overlay for better text readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-black via-black/80 to-transparent"
      />

      <div className="mx-auto flex min-h-90 max-w-6xl items-center justify-between gap-6 px-6 py-14 lg:px-8">
        <div className="relative z-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#aed5e9]">
            Pricing
          </p>

          <h1 className="mb-5 text-[34px] font-bold leading-[1.12] tracking-tight text-white sm:text-[46px]">
            Quantum-safe your
            <br />
            organization{" "}
            <span className="text-[#338bec]">
              today.
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-6 text-[#d7dde5] sm:text-base sm:leading-7">
            KAVACH-Q helps you discover, assess, remediate and comply — before
            quantum risk becomes a business risk.
          </p>
        </div>

        <div className="relative z-10 hidden w-52 shrink-0 pt-8 text-[#9bd3f2] lg:block">
          <p className="text-base leading-snug">
            A SAFER
            <br />
            DIGITAL INDIA
            <br />
            IN A QUANTUM WORLD
          </p>

          <div aria-hidden="true" className="my-3 flex h-1 w-16">
            <span className="flex-1 bg-green-600" />
            <span className="flex-1 bg-white" />
            <span className="flex-1 bg-orange-400" />
          </div>

          <small className="whitespace-nowrap text-[9px] text-[#b4c7d8]">
            SOVEREIGN &nbsp;|&nbsp; SECURE &nbsp;|&nbsp; RESILIENT
          </small>
        </div>
      </div>
    </section>
  );
}