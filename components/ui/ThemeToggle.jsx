"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ checked, onChange }) {
  return (
    <label className="relative z-20 inline-flex shrink-0 cursor-pointer items-center [-webkit-tap-highlight-color:transparent]">
      <span className="sr-only">Toggle color theme</span>
      <span className="relative block h-9 w-[4.5rem]">
        <input
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          aria-label={checked ? "Switch to blue theme" : "Switch to light theme"}
          className="peer absolute inset-0 z-20 m-0 h-full w-full cursor-pointer appearance-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#087aa5]"
        />

        <span className="absolute inset-0 rounded-full border border-cyan-300/40 bg-[#082f49] shadow-[inset_0_1px_3px_rgba(0,0,0,0.35),0_0_18px_rgba(34,211,238,0.22)] transition-colors duration-300 peer-checked:border-slate-200 peer-checked:bg-slate-100 peer-checked:shadow-[inset_0_1px_3px_rgba(15,23,42,0.12),0_0_16px_rgba(255,255,255,0.3)]" />

        <span className="pointer-events-none absolute left-1 top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-white shadow-[0_2px_8px_rgba(15,23,42,0.3)] transition-all duration-300 ease-in-out peer-checked:translate-x-9 peer-checked:rotate-[360deg] peer-checked:bg-white peer-checked:text-cyan-700">
          <Sun
            aria-hidden="true"
            className={`absolute h-[1.125rem] w-[1.125rem] transition-all duration-300 ${
              checked
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-50 opacity-0"
            }`}
            strokeWidth={2.2}
          />
          <Moon
            aria-hidden="true"
            className={`absolute h-4 w-4 transition-all duration-300 ${
              checked
                ? "rotate-90 scale-50 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
            fill="currentColor"
            strokeWidth={1.8}
          />
        </span>
      </span>
    </label>
  );
}
