import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const themes = {
  blue: { card: "border-sky-200 from-[#edf7ff] to-[#f8fbff]", accent: "bg-sky-500", header: "bg-[#dceeff]", text: "text-[#0959b6]", button: "border-[#0959b6]/50 text-[#0959b6] hover:bg-blue-100/60" },
  green: { card: "border-emerald-200 from-[#e9f8ef] to-[#f6fcf9]", accent: "bg-emerald-500", header: "bg-[#d7f1e2]", text: "text-[#078044]", button: "border-[#078044]/50 text-[#078044] hover:bg-emerald-100/60" },
  enterprise: { card: "border-blue-500 from-[#e5efff] to-[#f3f7ff] ring-2 ring-blue-400/35 shadow-[0_18px_48px_-16px_rgba(37,99,235,0.4)]", accent: "bg-blue-600", header: "bg-[#075ec5] text-[#ffffff]", text: "text-[#0959b6]", button: "border-[#075ec5] bg-[#075ec5] text-[#ffffff]! hover:bg-[#064fa7]" },
  purple: { card: "border-violet-200 from-[#f0eaff] to-[#fbf9ff]", accent: "bg-violet-500", header: "bg-[#e7dcfc]", text: "text-[#4521b5]", button: "border-[#4820cb] bg-[#4820cb] text-[#ffffff]! hover:bg-[#3919a5]" },
};

export default function PricingCard({ name, subtitle, price, pricePrefix, features, buttonText, theme = "blue", popular = false }) {
  const style = themes[theme] || themes.blue;
  return (
    <article className={`relative flex h-full min-w-0 flex-col rounded-2xl border bg-linear-to-br p-5 shadow-sm transition-shadow duration-200 focus-within:shadow-lg ${style.card}`}>
      <div aria-hidden="true" className={`absolute inset-x-5 top-0 h-1 rounded-b-full ${style.accent}`} />
      {popular && <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0063d7] px-5 py-1.5 text-xs font-semibold text-[#ffffff] shadow-md">Most Popular</span>}
      <div className={`-mx-1 mb-5 mt-2 rounded-xl px-4 py-5 ${style.header}`}>
        <h3 className={`text-[22px] leading-tight font-bold tracking-tight ${popular ? "text-[#ffffff]" : style.text}`}>{name}</h3>
        <p className={`mt-2 min-h-10 text-sm leading-5 ${popular ? "text-[#e0edff]" : "text-[#354153]"}`}>{subtitle}</p>
      </div>
      <div className="mb-6 flex min-h-20 flex-col justify-start border-b border-slate-300/60 pb-5 text-[#071827]">
        <div className="flex flex-wrap items-baseline gap-x-1.5 leading-tight">
          {pricePrefix && <small className="text-base font-semibold">{pricePrefix}</small>}
          <strong className="text-[34px] font-bold tracking-tight">{price}</strong>
        </div>
        <span className="mt-1 text-sm text-slate-600">/ year</span>
      </div>
      <ul className="mb-7 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-[#354052]">
            <ShieldCheck aria-hidden="true" size={16} strokeWidth={2.5} className={`mt-0.5 shrink-0 ${style.text}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`group mt-auto flex min-h-14 items-center justify-center gap-2 rounded-lg border px-3 py-3 text-center text-[13px] leading-5 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${style.button}`}>{buttonText}<ArrowRight size={17} className="shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" /></Link>
    </article>
  );
}
