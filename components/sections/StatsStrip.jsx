"use client";

export default function StatsStrip() {
  const stats = [
    { value: "6", label: "pipeline Stages" },
    { value: "7", label: "Scanner Modules" },
    { value: ">=95%", label: "Detection Accuracy" },
    { value: "QVS", label: "Quantum Risk Score" },
  ];

  return (
    <section className="border-y border-cyan-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 shadow-[0_0_32px_rgba(34,211,238,0.22)]">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm shadow-cyan-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Top Number */}
            <div className="absolute right-4 top-3 text-5xl font-black text-slate-100">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Accent Bar */}
            <div
              className={`mb-4 h-1 w-16 rounded-full ${
                index === 0
                  ? "bg-cyan-500"
                  : index === 1
                    ? "bg-blue-500"
                    : index === 2
                      ? "bg-emerald-500"
                      : "bg-violet-500"
              }`}
            />

            {/* Value */}
            <h3
              className={`text-4xl font-bold ${
                index === 0
                  ? "text-cyan-600"
                  : index === 1
                    ? "text-blue-600"
                    : index === 2
                      ? "text-emerald-600"
                      : "text-violet-600"
              }`}
            >
              {item.value}
            </h3>

            {/* Label */}
            <p className="mt-3 text-sm font-medium text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
