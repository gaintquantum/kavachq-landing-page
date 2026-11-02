"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Pipeline", "/#pipeline"],
  ["Modules", "/#modules"],
  ["QVS", "/#qvs"],
  ["Compliance", "/#compliance"],
  ["Deployment", "/#deployment"],
  ["Pricing", "/pricing"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeLabel, setActiveLabel] = useState(
    pathname === "/pricing" ? "Pricing" : "Pipeline",
  );

  const demoRequestBody = encodeURIComponent(`Dear KAVACH-Q Team,

I would like to request a technical demonstration of the KAVACH-Q platform for our organization.

Organization Name:
Industry:
Contact Person:
Designation:
Phone Number:
Email Address:
Estimated Assets/Repositories:

We are interested in understanding:
- Cryptographic Discovery & Inventory
- Quantum Vulnerability Scoring (QVS)
- PQC Migration Planning
- Compliance & Reporting

Preferred Demo Date:

Regards,`);

  const demoRequestHref = `mailto:gaintquantum@gmail.com?subject=${encodeURIComponent(
    "KAVACH-Q Enterprise Demo Request",
  )}&body=${demoRequestBody}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto max-w-[112rem]">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-slate-200/90 bg-white/95 px-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:h-[4.5rem] lg:px-5">
          <div className="flex min-w-0 items-center gap-5 xl:gap-8">
            {/* Logo */}
            <Link
              href="/"
              aria-label="KAVACH-Q home"
              className="flex shrink-0 items-center"
            >
              <img
                src="/KAVACH-Q logo with TM.png"
                alt="KAVACH-Q"
                className="h-11 w-11 object-contain lg:h-14 lg:w-14"
              />
            </Link>

            {/* Desktop Menu */}

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-slate-50/90 p-1 lg:flex"
            >
              {navItems.map(([label, href]) => {
                const isActive =
                  label === "Pricing"
                    ? pathname === "/pricing"
                    : pathname === "/" && activeLabel === label;

                return (
                <Link
                  key={label}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveLabel(label)}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 xl:px-4 ${
                    isActive
                      ? "bg-white text-[#1d4ed8] shadow-sm"
                      : "text-slate-600 hover:bg-white hover:text-slate-950"
                  }`}
                >
                  {label}
                </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Button */}
            <a
              href={demoRequestHref}
              className="hidden h-11 items-center justify-center rounded-xl border border-[#4285F4] bg-[#4285F4] px-5 text-sm font-bold text-white transition hover:border-[#2f6fda] hover:bg-[#2f6fda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 lg:inline-flex"
            >
              Request Demo
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] lg:hidden"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white/98 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => {
                    setActiveLabel(label);
                    setOpen(false);
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]"
                >
                  {label}
                </Link>
              ))}

              <a
                href={demoRequestHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl border border-[#4285F4] bg-[#4285F4] px-5 text-center text-sm font-bold text-white transition hover:border-[#2f6fda] hover:bg-[#2f6fda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
              >
                Request Demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
