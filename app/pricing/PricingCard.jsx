import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

// data-native opts the card out of the global light-theme colour resets so these classes apply as written.
export default function PricingCard({ name, subtitle, price, pricePrefix, features, buttonText, popular = false }) {
  const amount = price.replace(/^₹\s*/, "");
  return (
    <article data-native className={`pricing-plan-card flex h-full min-w-0 flex-col rounded-3xl border p-6 text-slate-900 ${popular ? "border-blue-300 bg-linear-to-b from-white to-blue-50" : "border-slate-200 bg-white"}`}>
      <div className="flex min-h-7 items-center justify-between gap-2">
        <h3 className="text-[15px] font-bold tracking-wide text-slate-900">{name}</h3>
        {popular && <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Most popular</span>}
      </div>
      <p className="mt-4 min-h-16 text-2xl leading-8 font-semibold tracking-tight text-slate-950">{subtitle}</p>
      <Link href="/contact" className={`mt-5 flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2 text-center text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${popular ? "bg-blue-500 text-white hover:bg-blue-600" : "border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"}`}>
        {popular && <Sparkles aria-hidden="true" size={15} className="shrink-0" />}
        {buttonText}
      </Link>
      <div className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
        {pricePrefix && <span className="text-sm text-slate-500">{pricePrefix}</span>}
        <span className="self-start pt-1 text-sm text-slate-600">₹</span>
        <strong className="text-3xl font-normal tracking-tight text-slate-950">{amount}</strong>
        <span className="text-base text-slate-500">/ year</span>
      </div>
      <ul className="mt-6 space-y-3.5">
        {features.map((feature) =>
          feature.startsWith("Everything in") ? (
            <li key={feature} className="pt-1 text-sm font-semibold text-slate-900">{feature}</li>
          ) : (
            <li key={feature} className="flex items-start gap-3 text-sm leading-5 text-slate-700">
              <Check aria-hidden="true" size={17} strokeWidth={1.75} className={`mt-px shrink-0 ${popular ? "text-blue-500" : "text-slate-500"}`} />
              <span>{feature}</span>
            </li>
          )
        )}
      </ul>
    </article>
  );
}
