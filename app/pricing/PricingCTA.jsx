import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PricingCTA() {
  return (
    <section className="bg-[#03131e]! text-[#ffffff]!">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-5 px-6 py-5 lg:px-10">
        <ShieldCheck className="shrink-0 text-blue-500" size={48} />
        <div className="min-w-0 flex-1">
          <h2 className="text-xl! font-bold! tracking-tight text-[#ffffff]!">Let&apos;s build a quantum-safe future together.</h2>
          <p className="mt-1 text-[13px] text-[#bfccd8]">Talk to our experts to find the right plan for your organization.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-[13px] font-semibold text-[#ffffff]! hover:bg-blue-700">Request a Demo <ArrowRight size={17} /></Link>
          <Link href="/contact" className="rounded-md border border-slate-400 px-7 py-3 text-[13px] text-[#ffffff]! hover:bg-slate-800">Contact Sales</Link>
        </div>
        <p className="hidden text-[11px] leading-normal text-[#8fa6bc] xl:block">SECURE TODAY.<br />QUANTUM READY<br />TOMORROW.</p>
      </div>
    </section>
  );
}
