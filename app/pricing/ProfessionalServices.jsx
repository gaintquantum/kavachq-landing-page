import Link from "next/link";
import {
  ArrowRight,
  Settings,
} from "lucide-react";

const services = [
  ["Initial Discovery & Onboarding", "From ₹3 Lakh"],
  ["PQC Assessment", "₹5 – 15 Lakh"],
  ["Migration Support", "Custom"],
  ["Compliance / CBOM Reporting", "From ₹2 Lakh"],
  ["PQC Validation / VAPT Support", "Custom"],
  ["Security Team Training", "From ₹1 Lakh / cohort"],
  ["Dedicated Security Architect", "Custom"],
];

export default function ProfessionalServices() {
  return (
    <section className="rounded-2xl border border-sky-200 bg-[#edf6ff]! p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9ebff] text-blue-600">
          <Settings className="h-7 w-7" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-950">
            Professional Services
          </h3>

          <p className="mt-1 text-sm leading-5 text-[#486b93]">
            Expert support for a faster, safer migration
            journey.
          </p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-[#f2f5f9]">
        {services.map(([name, price], index) => (
          <div
            key={name}
            className={`grid grid-cols-[minmax(0,1fr)_110px] gap-2 px-3 py-2 text-xs leading-5 even:bg-[#fafcfe] sm:grid-cols-[minmax(0,1fr)_145px] sm:px-4 ${
              index !== services.length - 1
                ? "border-b border-slate-200"
                : ""
            }`}
          >
            <span className="text-slate-700">
              {name}
            </span>

            <span className="border-l border-slate-200 pl-3 font-semibold text-slate-900">
              {price}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className="mt-2.5 inline-flex items-center gap-2 rounded border border-blue-600 px-5 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
      >
        Discuss Your Requirements
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
