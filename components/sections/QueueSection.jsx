import { Activity, CalendarClock, FileCheck2, Gauge, Layers3, ListFilter, MonitorCheck, RadioTower, RefreshCw, RotateCcw, Waypoints } from "lucide-react";
const metrics = [
  { value: "24/7", label: "Continuous Processing" },
  { value: "Real-Time", label: "Progress Visibility" },
  { value: "Automatic", label: "Failure Recovery" },
  { value: "End-to-End", label: "Audit Traceability" },
  { value: "<2s", label: "API Response Target" },
];
const cards = [
  { number: "01", title: "Scalable Processing", text: "Processes security scans in parallel across growing enterprise environments without interrupting ongoing operations.", tone: "cyan", icon: Layers3 },
  { number: "02", title: "Resilient Operations", text: "Automatically manages priorities, retries, schedules, timeouts, and recovery to keep critical security workflows running.", tone: "violet", icon: RefreshCw },
  { number: "03", title: "Live Operational Visibility", text: "Provides real-time scan progress, status updates, controlled cancellation, and immediate visibility through the dashboard.", tone: "blue", icon: Activity },
];
const features = [
  { title: "Workload Prioritization", text: "Routes critical security work through priority-aware processing.", icon: ListFilter },
  { title: "Failed Job Recovery", text: "Retries interrupted jobs while preserving workflow continuity.", icon: RotateCcw },
  { title: "Real-Time Progress", text: "Surfaces scan progress and workflow status changes.", icon: Gauge },
  { title: "Elastic Processing", text: "Distributes work across available processing capacity.", icon: Waypoints },
  { title: "Operational Monitoring", text: "Centralizes queue, worker, and job-level visibility.", icon: MonitorCheck },
  { title: "Verifiable Audit Trail", text: "Records processing events for compliance evidence.", icon: FileCheck2 },
  { title: "Reliable Event Processing", text: "Coordinates asynchronous workflow events and handoffs.", icon: RadioTower },
  { title: "Scheduled Assessments", text: "Supports planned assessment windows and queued execution.", icon: CalendarClock },
];
const tones = {
  cyan: { card: "border-cyan-200 hover:border-cyan-300", iconBox: "border-cyan-200 bg-cyan-50 text-cyan-700", number: "text-cyan-700", badge: "border-cyan-200 bg-cyan-50 text-cyan-800" },
  violet: { card: "border-violet-200 hover:border-violet-300", iconBox: "border-violet-200 bg-violet-50 text-violet-700", number: "text-violet-700", badge: "border-violet-200 bg-violet-50 text-violet-800" },
  blue: { card: "border-blue-200 hover:border-blue-300", iconBox: "border-blue-200 bg-blue-50 text-blue-700", number: "text-blue-700", badge: "border-blue-200 bg-blue-50 text-blue-800" },
};
export default function QueueSection() {
  return (
    <section id="queue" aria-labelledby="queue-heading" className="relative overflow-hidden border-t border-cyan-100 bg-white px-4 pb-14 pt-16 text-slate-950 sm:px-8 lg:px-10 lg:pb-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(139,92,246,0.08),transparent_28%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1240px]">
        <header className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5">
            <span className="size-2 rounded-full bg-cyan-500" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-800">Stage 2 · Process</span>
          </div>
          <h2 id="queue-heading" className="mt-5 text-[clamp(2rem,1.25rem+3vw,3.25rem)] font-black leading-[1.1] tracking-tight text-slate-950">Secure Processing Pipeline</h2>
          <p className="mx-auto mt-4 max-w-[40rem] text-base leading-7 text-slate-600 sm:text-[1.0625rem]">
            The operational backbone of KAVACH-Q—enabling scalable security assessments, real-time progress visibility, automatic recovery, and compliance-ready audit traceability.
          </p>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map(({ number, title, text, tone, icon: Icon }) => {
            const t = tones[tone];
            return (
              <article key={title} className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.10)] motion-reduce:transform-none ${t.card}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl border ${t.iconBox}`}>
                    <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className={`text-sm font-black tracking-[0.2em] ${t.number}`} aria-hidden="true">{number}</span>
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-center text-[9px] leading-3 lg:whitespace-nowrap font-bold uppercase tracking-[0.14em] ${t.badge}`}>Operational capability</span>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-black leading-snug tracking-tight text-slate-950 lg:text-[1.375rem]">{title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-600 lg:text-[0.95rem]">{text}</p>
              </article>
            );
          })}
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-y-5 rounded-2xl border border-slate-200 bg-white/90 px-3 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:px-6 lg:grid-cols-5 lg:gap-0">
          {metrics.map(({ value, label }, i) => (
            <div key={label} className={`relative flex flex-col-reverse items-center justify-end px-2 text-center lg:px-4 ${i === metrics.length - 1 ? "col-span-2 lg:col-span-1" : ""} ${i < metrics.length - 1 ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-10 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-slate-200" : ""}`}>
              <dt className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.15em] text-slate-600">{label}</dt>
              <dd className="text-xl font-black leading-none tracking-tight text-cyan-800 sm:text-2xl xl:text-[1.75rem]">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, text, icon: Icon }) => (
            <article key={title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_12px_28px_rgba(8,145,178,0.10)] motion-reduce:transform-none">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-[0.975rem] font-black leading-snug text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
