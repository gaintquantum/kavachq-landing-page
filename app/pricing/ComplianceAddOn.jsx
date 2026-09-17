import {
  ArrowRight,
  Building2,
  FileCheck2,
  LockKeyhole,
  Plus,
  ShieldCheck,
  Umbrella,
} from "lucide-react";

const addons = [
  {
    title: "RBI IT Framework",
    subtitle: "For Banks & NBFCs",
    icon: Building2,
  },
  {
    title: "IRDAI Compliance",
    subtitle: "For Insurance",
    icon: Umbrella,
  },
  {
    title: "CERT-IN / DST / NQM",
    subtitle: "For Government & strategic organizations",
    icon: FileCheck2,
  },
  {
    title: "DPDPA",
    subtitle: "For data-protection mapping",
    icon: LockKeyhole,
  },
];

export default function ComplianceAddons() {
  return (
    <section className="rounded-2xl border border-violet-200 bg-[#f3edff]! p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e5d9fb] text-violet-700">
          <ShieldCheck className="h-7 w-7" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-950">
            Compliance Add-ons
          </h3>

          <p className="mt-1 text-sm leading-5 text-[#486b93]">
            Choose the compliance package for your industry.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {addons.map(({ title, subtitle, icon: Icon }) => (
          <div
            key={title}
            className="flex min-h-24 items-center gap-3 rounded-xl border border-violet-200 bg-[#fcfaff] px-3 py-4 text-left"
          >
            <Icon className="h-7 w-7 shrink-0 text-blue-600" />

            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-blue-700">{title}</div>

              <div className="mt-1 text-xs leading-4 text-[#365778]">
                {subtitle}
              </div>
            </div>

            <div aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-500 text-blue-600">
              <Plus className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-2.5 inline-flex items-center gap-2 rounded border border-blue-600 px-5 py-1.5 text-xs font-semibold text-blue-700"
      >
        Add Compliance Pack
        <ArrowRight className="h-4 w-4" />
      </div>
    </section>
  );
}
