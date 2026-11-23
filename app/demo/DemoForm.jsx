"use client";

import { useState } from "react";

const field = "mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100";
const initial = { name: "", email: "", organization: "", designation: "", industry: "", message: "", consent: false, website: "" };

export default function DemoForm() {
  const [form, setForm] = useState(initial);
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value }));
  function submit(event) {
    event.preventDefault();
    if (form.website) return;
    const subject = `KAVACH-Q Demo Request — ${form.organization}`;
    const body = `Hello KAVACH-Q Team,

I would like to request a technical demonstration.

CONTACT DETAILS
Full name: ${form.name}
Business email: ${form.email}
Organization: ${form.organization}
Designation: ${form.designation}
Industry: ${form.industry}

MESSAGE
${form.message}

Regards,
${form.name}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("info@gaintclout.com")}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(gmailUrl);
  }
  return <form onSubmit={submit} className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-xl sm:p-8" aria-describedby="demo-status">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="font-bold text-slate-800">Full name *<input className={field} required minLength={2} maxLength={100} autoComplete="name" name="name" value={form.name} onChange={update} /></label>
      <label className="font-bold text-slate-800">Business email *<input className={field} required type="email" maxLength={160} autoComplete="email" name="email" value={form.email} onChange={update} /></label>
      <label className="font-bold text-slate-800">Organization *<input className={field} required minLength={2} maxLength={160} autoComplete="organization" name="organization" value={form.organization} onChange={update} /></label>
      <label className="font-bold text-slate-800">Designation *<input className={field} required minLength={2} maxLength={120} autoComplete="organization-title" name="designation" value={form.designation} onChange={update} /></label>
      <label className="font-bold text-slate-800">Industry *<select className={field} required name="industry" value={form.industry} onChange={update}><option value="">Select an industry</option><option>Banking and financial services</option><option>Government and public sector</option><option>Healthcare</option><option>Telecommunications</option><option>Technology and cloud</option><option>Critical infrastructure</option><option>Other</option></select></label>
    </div>
    <label className="mt-5 block font-bold text-slate-800">Message *<textarea className={field} required minLength={20} maxLength={2000} rows={5} name="message" value={form.message} onChange={update} placeholder="Describe the systems, scope and outcome you want to discuss." /></label>
    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={update} /></label></div>
    <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600"><input className="mt-1 size-4" type="checkbox" required name="consent" checked={form.consent} onChange={update} />I agree that GAINT may use these details to respond to this request. Do not submit secrets, customer records or sensitive security findings.</label>
    <div className="mt-6 flex flex-wrap items-center gap-4"><button className="rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-cyan-800">Send demo request</button><p id="demo-status" className="text-sm text-slate-500">Your details will be placed in a new Gmail draft. Review it before sending.</p></div>
  </form>;
}
