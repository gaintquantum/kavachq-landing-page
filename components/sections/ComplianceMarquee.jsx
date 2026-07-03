"use client";

import {
  ShieldCheck,
  Landmark,
  BadgeCheck,
  FileCheck2,
} from "lucide-react";

const compliances = [
  {
    name: "CERT-IN",
    icon: ShieldCheck,
  },
  {
    name: "RBI Framework",
    icon: Landmark,
  },
  {
    name: "ISO 27001:2022",
    icon: BadgeCheck,
  },
  {
    name: "MeitY NQM · DPDPA",
    icon: FileCheck2,
  },
];

export default function ComplianceMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-t border-white/10 [#1f4a75] py-5">
<h2 className="inline-block rounded-full border border-cyan-400/30 bg-white/5 px-5 py-2 text-lg font-bold text-white mb-4 backdrop-blur-sm">
  Compliances
</h2>      <div className="flex w-max animate-[complianceMove_18s_linear_infinite] gap-4 px-4">
        {[...compliances, ...compliances, ...compliances].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.name}-${index}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md"
            >
              <Icon size={18} className="text-cyan-300" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes complianceMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}