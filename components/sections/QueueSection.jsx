const metrics = [
  { value: "6", label: "Kafka Topics" },
  { value: "8", label: "Queue Modules" },
  { value: "15", label: "Test Cases" },
  { value: "11", label: "Gap Fixes" },
  { value: "<2s", label: "API SLA" },
];

const cards = [
  {
    number: "01",
    title: "Kafka 3.5",
    text: "Durable event backbone for scan-requests, scan-results, qvs-scores, audit-events, and dead-letter pipelines.",
  },
  {
    number: "02",
    title: "Celery Workers",
    text: "Priority worker pools with retries, scheduling, fault recovery, timeout control, and async scan execution.",
  },
  {
    number: "03",
    title: "Redis + WebSocket",
    text: "Live progress state, cancellation flags, real-time dashboard streaming, and instant scan visibility.",
  },
];

const features = [
  "Priority Queues",
  "Dead Letter Queue",
  "Real-Time Progress",
  "Auto Scaling",
  "OpenTelemetry",
  "Audit Trail",
  "Kafka EOS",
  "Scheduled Scans",
];

export default function QueueSection() {
  return (
    <section
      id="queue"
      className="relative overflow-hidden border-t border-cyan-400/10 [#1f4a75] py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.18),transparent_45%)]" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Stage 2 · Queue
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Kafka Async Job Pipeline
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/75">
            The nervous system of KAVACH-Q — decoupling scan submission from
            execution, enabling national-scale parallel processing, real-time
            progress, fault recovery, and compliance-grade audit trails.
          </p>
        </div>

        <div className="mt-16 rounded-4xl border border-cyan-300/20 bg-white/6 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-[#06101f]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#06101f]/90"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-400/20" />

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.3em] text-cyan-300">
                    {card.number}
                  </span>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-100">
                    Active
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cyan-50/65">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-4xl border border-cyan-300/20 bg-[#06101f]/65 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="relative text-center">
                <div className="text-3xl font-black text-cyan-300 md:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-50/60">
                  {metric.label}
                </div>

                {index < metrics.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-cyan-300/40 to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="group rounded-2xl border border-cyan-300/10 bg-white/4 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-cyan-300/70 transition-all duration-300 group-hover:w-16" />
              <div className="text-sm font-semibold tracking-wide text-cyan-50">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}