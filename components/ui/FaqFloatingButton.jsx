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
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-40 inline-flex h-12 w-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-0 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 motion-reduce:transform-none sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:left-[max(1.5rem,env(safe-area-inset-left))] sm:w-auto sm:px-4"
    >
      <CircleHelp size={20} aria-hidden="true" />
      <span className="hidden sm:inline">FAQs</span>
    </Link>
  );
}
