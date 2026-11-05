"use client";

import { buildDemoRequestHref } from "@/lib/demoRequest";

const inputClass = "mb-4 w-full rounded-xl border border-white/10 bg-white/5 p-4";

export default function DemoForm() {
  // Open the visitor's mail application with their details filled in
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    window.location.href = buildDemoRequestHref({
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="glass mx-auto mt-10 max-w-2xl rounded-3xl p-8 text-left">
      <input name="name" required aria-label="Full Name" className={inputClass} placeholder="Full Name" />
      <input name="email" type="email" required aria-label="Work Email" className={inputClass} placeholder="Work Email" />
      <input name="company" required aria-label="Company" className={inputClass} placeholder="Company" />

      <button type="submit" className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
        Request Demo
      </button>
    </form>
  );
}
