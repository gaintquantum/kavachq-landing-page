"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { demoRequestHref } from "@/lib/demoRequest";
const navItems = [["Pipeline", "/#pipeline"], ["Modules", "/#modules"], ["QVS", "/#qvs"], ["Compliance", "/#compliance"], ["Deployment", "/#deployment"], ["Pricing", "/pricing"]];
const sectionIds = navItems.filter(([, href]) => href.startsWith("/#")).map(([label, href]) => [label, href.slice(2)]);
// Highlights the nav item whose section sits in the middle band of the viewport.
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!enabled) return setActive(null);
    const visible = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.set(e.target.id, e.boundingClientRect.top) : visible.delete(e.target.id)));
      const match = sectionIds.find(([, id]) => visible.has(id));
      setActive(match ? match[0] : null);
    }, { rootMargin: "-40% 0px -55% 0px" });
    sectionIds.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [enabled]);
  return active;
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection(pathname === "/");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);
  const isActive = (label) => (label === "Pricing" ? pathname === "/pricing" : pathname === "/" && activeSection === label);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto max-w-448">
        <div className={`flex h-16 items-center justify-between rounded-2xl border px-3 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 lg:h-18 lg:px-5 ${scrolled || open ? "border-slate-200/90 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)]" : "border-white/60 bg-white/55 shadow-none"}`}>
          <div className="flex min-w-0 items-center gap-5 xl:gap-8">
            <Link href="/" aria-label="KAVACH-Q home" className="flex shrink-0 items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              <img src="/KAVACH-Q logo with TM.png" alt="KAVACH-Q" className="size-11 object-contain transition-transform duration-300 hover:scale-105 lg:size-14" />
            </Link>
            <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-xl border border-slate-200/80 bg-slate-50/80 p-1 lg:flex">
              {navItems.map(([label, href]) => {
                const active = isActive(label);
                return (
                  <Link key={label} href={href} aria-current={active ? (label === "Pricing" ? "page" : "location") : undefined}
                    className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 xl:px-4 ${active ? "text-[#1d4ed8]" : "text-slate-600 hover:text-slate-950"}`}>
                    {active && <motion.span layoutId="nav-active-pill" className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/70" transition={{ type: "spring", stiffness: 420, damping: 34 }} aria-hidden="true" />}
                    <span className="relative">{label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={demoRequestHref} className="group hidden h-11 items-center justify-center gap-1.5 rounded-xl border border-brand bg-brand px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(66,133,244,0.28)] transition hover:-translate-y-0.5 hover:border-brand-strong hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transform-none lg:inline-flex">
              Request Demo<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}
              className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div id="mobile-nav" initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 origin-top rounded-2xl border border-slate-200 bg-white/98 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {navItems.map(([label, href]) => (
                  <Link key={label} href={href} onClick={() => setOpen(false)} aria-current={isActive(label) ? "location" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${isActive(label) ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"}`}>
                    {label}{isActive(label) && <span className="size-1.5 rounded-full bg-blue-600" aria-hidden="true" />}
                  </Link>
                ))}
                <a href={demoRequestHref} onClick={() => setOpen(false)} className="mt-2 inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-brand bg-brand px-5 text-center text-sm font-bold text-white transition hover:border-brand-strong hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
                  Request Demo<ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
