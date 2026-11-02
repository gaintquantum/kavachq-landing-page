import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const themes = {
  blue: { card: "border-sky-200 from-[#edf7ff] to-[#f8fbff]", accent: "bg-sky-500", header: "bg-[#dceeff]", text: "text-[#60A5FA]", button: "border-brand bg-brand text-white! hover:border-[#3574db] hover:bg-[#3574db]" },
  green: { card: "border-emerald-200 from-[#e9f8ef] to-[#f6fcf9]", accent: "bg-emerald-500", header: "bg-[#d7f1e2]", text: "text-[#34D399]", button: "border-emerald-700 bg-emerald-700 text-white! hover:border-emerald-800 hover:bg-emerald-800" },
  enterprise: { card: "border-blue-500 from-[#e5efff] to-[#f3f7ff] ring-2 ring-blue-400/35 shadow-[0_18px_48px_-16px_rgba(37,99,235,0.4)]", accent: "bg-blue-600", header: "bg-[#075ec5] text-[#ffffff]", text: "text-[#60A5FA]", button: "border-[#075ec5] bg-[#075ec5] text-[#ffffff]! hover:bg-[#064fa7]" },
  purple: { card: "border-violet-200 from-[#f0eaff] to-[#fbf9ff]", accent: "bg-violet-500", header: "bg-[#e7dcfc]", text: "text-[#A78BFA]", button: "border-[#4820cb] bg-[#4820cb] text-[#ffffff]! hover:bg-[#3919a5]" },
};

export default function PricingCard({ name, subtitle, price, pricePrefix, features, buttonText, theme = "blue", popular = false }) {
  const style = themes[theme] || themes.blue;
  return (
    <article className={`pricing-plan-card relative flex h-full min-w-0 flex-col rounded-2xl border bg-black! p-4 text-white! transition-shadow duration-200 ${style.card}`}>
      <div aria-hidden="true" className={`absolute inset-x-4 top-0 h-1 rounded-b-full ${style.accent}`} />
      {popular && <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0063d7] px-4 py-1 text-[11px] font-semibold text-[#ffffff] shadow-md">Most Popular</span>}
      <div className="pricing-card-header mb-3 mt-1 rounded-xl bg-black! px-2 py-3 text-white!">
        <h3 className="text-xl leading-tight font-bold tracking-tight text-white!">{name}</h3>
        <p className="mt-2 min-h-10 text-sm leading-5 text-white!">{subtitle}</p>
      </div>
      <div className="mb-4 flex flex-col justify-start border-b border-white/20 pb-4 text-white!">
        <div className="flex flex-wrap items-baseline gap-x-1.5 leading-tight">
          {pricePrefix && <small className="text-base font-semibold">{pricePrefix}</small>}
          <strong className="text-[34px] font-bold tracking-tight">{price}</strong>
        </div>
        <span className="mt-1 text-sm text-white!">/ year</span>
      </div>
      <ul className="mb-5 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-white!">
            <ShieldCheck aria-hidden="true" size={17} strokeWidth={2.25} className={`mt-0.5 shrink-0 ${style.text}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`group mt-auto flex min-h-12 items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-center text-[13px] leading-5 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${style.button}`}>{buttonText}<ArrowRight size={17} className="shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" /></Link>
    </article>
  );
}
