export default function PipelineSection() {
  const stages = [
    "Scan",
    "Queue",
    "Score",
    "Plan",
    "Execute",
    "Comply",
  ];

  return (
    <section
      id="pipeline"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Security Migration
          <span className="gradient-text block">
            Pipeline
          </span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stages.map((stage, index) => (
            <div
              key={stage}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="mb-4 text-3xl font-bold text-cyan-400">
                0{index + 1}
              </div>

              <h3 className="font-semibold">
                {stage}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}