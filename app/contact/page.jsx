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

      <main data-native className="contact-page relative min-h-screen overflow-hidden bg-white px-5 pb-20 pt-32 text-slate-950 sm:px-8 sm:pt-36 lg:px-12">
        <div className="relative mx-auto max-w-7xl">
          {/* ================================================= */}
          {/* HEADING                                           */}
          {/* ================================================= */}

          <div className="max-w-3xl">
            <h1 className="sr-only">Contact KAVACH-Q</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Tell us what you are securing. We will help you map your exposure,
              prioritize the work, and plan a practical path to post-quantum
              resilience.
            </p>
          </div>

          {/* ================================================= */}
          {/* CONTENT                                           */}
          {/* ================================================= */}

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* ================================================= */}
            {/* LEFT SIDE                                         */}
            {/* ================================================= */}

            <aside className="space-y-4">
              <div className="border-l-2 border-cyan-500 pl-5">
                <p className="text-sm font-semibold text-cyan-800">
                  What happens next
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  A security specialist reviews your context and responds with
                  the right next step, whether that is a technical walkthrough,
                  a discovery session, or a direct answer.
                </p>
              </div>

              <div className="grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-1">
                {/* EMAIL */}

                <a
                  href="mailto:info@gaintclout.com"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50/60"
                >
                  <Mail
                    className="mt-0.5 text-cyan-700"
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-slate-900">
                      info@gaintclout.com
                    </span>
                  </span>

                  <ArrowUpRight
                    className="ml-auto text-slate-400 transition group-hover:text-cyan-700"
                    size={17}
                    aria-hidden="true"
                  />
                </a>

                {/* LOCATION */}

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <MapPin
                    className="mt-0.5 text-emerald-700"
                    size={20}
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Based in
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-slate-900">
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
              className="contact-form relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-7 lg:p-8"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" aria-hidden="true" />
              {/* NAME + EMAIL */}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-700">
                  Name <span className="text-cyan-700">*</span>

                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="contact-field mt-2 h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="Your full name"
                  />
                </label>

                <label className="text-sm font-semibold text-slate-700">
                  Work email <span className="text-cyan-700">*</span>

                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="contact-field mt-2 h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              {/* COMPANY */}

              <label className="mt-4 block text-sm font-semibold text-slate-700">
                Company / Organisation

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="contact-field mt-2 h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="Your organisation"
                />
              </label>

              {/* MESSAGE */}

              <label className="mt-4 block text-sm font-semibold text-slate-700">
                How can we help? <span className="text-cyan-700">*</span>

                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="contact-field mt-2 min-h-32 w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="Tell us about your environment, goals, or timeline."
                />
              </label>

              {/* SEND BUTTON */}

              <div className="mt-5">
                <button
                  type="submit"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    rounded-xl
                    bg-brand
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-brand-strong
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-white
                    sm:w-auto
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
