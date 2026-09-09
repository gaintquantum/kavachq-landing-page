"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleHelp } from "lucide-react";

export default function FaqFloatingButton() {
  const pathname = usePathname();

  if (pathname === "/faqs") {
    return null;
  }

  return (
    <Link
      href="/faqs"
      aria-label="Open frequently asked questions"
      title="Frequently Asked Questions"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1.25rem,env(safe-area-inset-left))] z-40 inline-flex h-12 items-center gap-2 rounded-full border border-cyan-300/30 bg-[#082f49]/95 px-4 text-sm font-semibold text-cyan-50 shadow-[0_12px_35px_rgba(2,18,35,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_16px_40px_rgba(6,182,212,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b31] motion-reduce:transform-none"
    >
      <CircleHelp size={20} aria-hidden="true" />
      <span>FAQs</span>
    </Link>
  );
}
