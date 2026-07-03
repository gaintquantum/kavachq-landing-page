"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Pipeline", "#pipeline"],
  ["QVS", "#qvs"],
  ["Modules", "#modules"],
  ["Compliance", "#compliance"],
  ["Deployment", "#deployment"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
    "KAVACH-Q Enterprise Demo Request"
  )}&body=${demoRequestBody}`;

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-3 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between rounded-full border border-cyan-400/20 bg-linear-to-r from-[#055085] via-[#17a0ca] to-[#055085] px-4 shadow-[0_0_40px_rgba(6,182,212,0.12)] backdrop-blur-2xl lg:h-20 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/KAVACH-Q logo with TM.png"
              alt="KAVACH-Q"
              className="h-12 w-12 object-contain lg:h-16 lg:w-16"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <a
            href={demoRequestHref}
            className="hidden rounded-full border border-cyan-500/30 bg-cyan-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-600 lg:block"
          >
            Request Demo
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-cyan-200/60 hover:text-cyan-100 lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="mt-3 rounded-3xl border border-cyan-400/20 bg-[#072d4d]/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-5">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
                >
                  {label}
                </a>
              ))}

              <a
                href={demoRequestHref}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-cyan-500 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-cyan-400 hover:text-slate-950"
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
