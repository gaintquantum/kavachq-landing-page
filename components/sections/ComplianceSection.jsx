export default function ComplianceSection() {
  const complianceItems = [
    "CERT-IN",
    "RBI",
    "ISO 27001",
    "DPDPA",
    "MeitY",
    "NIST PQC",
  ];

  return (
    <section id="compliance" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Compliance
          <span className="gradient-text block">Ready</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-slate-300">
          Built to support Indian and global security compliance requirements
          for quantum-safe cryptographic migration.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {complianceItems.map((item) => (
            <div key={item} className="glass rounded-2xl p-6 text-center">
              <h3 className="font-semibold text-cyan-300">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}