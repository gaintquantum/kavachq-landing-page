"use client";

import { useState } from "react";
import Link from "next/link";
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
    <header className="fixed left-0 right-0 top-4 z-50 px-3 sm:px-4">
      <div className="mx-auto max-w-[112rem]">
        <div className="flex h-16 items-center justify-between rounded-full border border-cyan-700/15 bg-white/95 px-4 shadow-[0_12px_36px_rgba(8,145,178,0.1)] backdrop-blur-2xl lg:h-20 lg:px-8">
          <div className="flex min-w-0 items-center gap-8 xl:gap-10">
            {/* Logo */}
            <Link
              href="/"
              aria-label="KAVACH-Q home"
              className="flex shrink-0 items-center"
            >
              <img
                src="/KAVACH-Q logo with TM.png"
                alt="KAVACH-Q"
                className="h-12 w-12 object-contain lg:h-16 lg:w-16"
              />
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden items-center rounded-full border border-[#4285F4] bg-[#4285F4] p-1.5 lg:flex">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="
        rounded-full
        px-4 py-2
        text-sm font-medium
        text-white
        transition-all duration-300
        hover:bg-white
        hover:text-black
        xl:px-5
      "
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Button */}
            <a
              href={demoRequestHref}
              className="hidden rounded-full border border-[#4285F4] bg-[#4285F4] px-5 py-2 text-sm font-medium text-white transition hover:border-[#3574db] hover:bg-[#3574db] lg:block"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-700/20 text-cyan-800 transition hover:border-cyan-600 hover:bg-cyan-50 lg:hidden"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="mt-3 rounded-3xl border border-cyan-700/15 bg-white/98 p-6 shadow-[0_24px_70px_rgba(8,145,178,0.12)] backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-5">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 transition hover:text-cyan-700"
                >
                  {label}
                </Link>
              ))}

              <a
                href={demoRequestHref}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full border border-[#4285F4] bg-[#4285F4] px-5 py-3 text-center text-sm font-medium text-white transition hover:border-[#3574db] hover:bg-[#3574db]"
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
