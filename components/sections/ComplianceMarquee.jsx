"use client";
import { BadgeCheck, FileCheck2, Landmark, ShieldCheck } from "lucide-react";
const compliances = [{ name: "CERT-IN", icon: ShieldCheck }, { name: "RBI Framework", icon: Landmark }, { name: "ISO 27001:2022", icon: BadgeCheck }, { name: "MeitY NQM · DPDPA", icon: FileCheck2 }];
// Infinite marquee (list repeated 3×; copies are hidden from assistive tech). Pauses on hover.
export default function ComplianceMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-t border-line py-5">
      <p className="mb-4 inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 font-display text-base text-ink">Compliances</p>
      <div className="group relative mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <ul className="flex w-max animate-[complianceMove_18s_linear_infinite] gap-4 px-4 group-hover:[animation-play-state:paused]">
          {[...compliances, ...compliances, ...compliances].map(({ name, icon: Icon }, index) => (
            <li key={`${name}-${index}`} aria-hidden={index >= compliances.length || undefined}
              className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink shadow-card">
              <Icon size={18} className="text-cyan-700" aria-hidden="true" />{name}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @keyframes complianceMove {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
