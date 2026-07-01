export default function StatsStrip() {
  const stats = [
    {
      value: "7+",
      label: "Scanner Modules",
    },
    {
      value: "6",
      label: "Migration Stages",
    },
    {
      value: "100%",
      label: "Crypto Asset Visibility",
    },
    {
      value: "QVS",
      label: "Quantum Risk Score",
    },
  ];

  return (
    <section className="border-y border-cyan-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-cyan-100 bg-white p-6 text-center shadow-sm shadow-cyan-900/5"
          >
            <h3 className="text-4xl font-bold gradient-text">
              {item.value}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
