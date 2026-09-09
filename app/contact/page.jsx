"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  // Open user's mail application with entered details
function handleSubmit(event) {
  event.preventDefault();

  const subject = `KAVACH-Q Enquiry from ${form.name}`;

  const body = `
Hello KAVACH-Q Team,

I would like to get in touch regarding KAVACH-Q.

CONTACT DETAILS
--------------------------------

Name: ${form.name}

Work Email: ${form.email}

Company / Organisation: ${form.company || "Not provided"}

ENQUIRY
--------------------------------

${form.message}

Regards,
${form.name}
  `.trim();

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    "info@gaintclout.com"
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, "_blank");
}
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#071b31] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-12">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(16,185,129,0.12),transparent_26%)]" />

        <div className="pointer-events-none absolute left-1/2 top-40 h-px w-[min(90%,1100px)] -translate-x-1/2 bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          {/* ================================================= */}
          {/* HEADING                                           */}
          {/* ================================================= */}

          <div className="max-w-3xl">
            
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tell us what you are securing. We will help you map your exposure,
              prioritize the work, and plan a practical path to post-quantum
              resilience.
            </p>
          </div>

          {/* ================================================= */}
          {/* CONTENT                                           */}
          {/* ================================================= */}

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* ================================================= */}
            {/* LEFT SIDE                                         */}
            {/* ================================================= */}

            <aside className="space-y-4">
              <div className="border-l-2 border-cyan-300/60 pl-5">
                <p className="text-sm font-semibold text-cyan-100">
                  What happens next
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  A security specialist reviews your context and responds with
                  the right next step, whether that is a technical walkthrough,
                  a discovery session, or a direct answer.
                </p>
              </div>

              <div className="grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-1">
                {/* EMAIL */}

                <a
                  href="mailto:info@gaintclout.com"
                  className="group flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <Mail
                    className="mt-0.5 text-cyan-200"
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </span>

                    <span className="mt-1 block text-sm text-white">
                      info@gaintclout.com
                    </span>
                  </span>

                  <ArrowUpRight
                    className="ml-auto text-slate-500 transition group-hover:text-cyan-200"
                    size={17}
                    aria-hidden="true"
                  />
                </a>

                {/* LOCATION */}

                <div className="flex items-start gap-4 border border-white/10 bg-white/5 p-5">
                  <MapPin
                    className="mt-0.5 text-emerald-200"
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Based in
                    </span>

                    <span className="mt-1 block text-sm text-white">
                      Hyderabad, India
                    </span>
                  </span>
                </div>
              </div>
            </aside>

            {/* ================================================= */}
            {/* CONTACT FORM                                      */}
            {/* ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="border border-cyan-200/15 bg-[#0b2944]/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8"
            >
              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Name <span className="text-cyan-300">*</span>

                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="mt-2 w-full border border-white/15 bg-[#071b31] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                    placeholder="Your full name"
                  />
                </label>

                <label className="text-sm text-slate-200">
                  Work email <span className="text-cyan-300">*</span>

                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="mt-2 w-full border border-white/15 bg-[#071b31] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              {/* COMPANY */}

              <label className="mt-5 block text-sm text-slate-200">
                Company / Organisation

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="mt-2 w-full border border-white/15 bg-[#071b31] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="Your organisation"
                />
              </label>

              {/* MESSAGE */}

              <label className="mt-5 block text-sm text-slate-200">
                How can we help? <span className="text-cyan-300">*</span>

                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="mt-2 w-full resize-y border border-white/15 bg-[#071b31] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="Tell us about your environment, goals, or timeline."
                />
              </label>

              {/* SEND BUTTON */}

              <div className="mt-6">
                <button
                  type="submit"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-cyan-400
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-slate-950
                    transition
                    hover:bg-cyan-300
                  "
                >
                  Send message

                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}