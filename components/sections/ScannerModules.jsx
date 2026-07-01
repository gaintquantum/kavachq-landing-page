export default function ScannerModules() {
  const modules = [
    "Source Code Scanner",
    "TLS Scanner",
    "Binary Scanner",
    "Infrastructure Scanner",
    "Kubernetes Scanner",
    "Document Scanner",
    "Library Fingerprinting",
  ];

  return (
    <section
      id="modules"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Discovery
          <span className="gradient-text block">
            Modules
          </span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <div
              key={module}
              className="glass rounded-2xl p-6 transition hover:-translate-y-2"
            >
              <h3 className="font-semibold">
                {module}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}