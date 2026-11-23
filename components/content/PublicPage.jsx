import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-cyan-700">Home</Link></li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? <Link href={item.href} className="hover:text-cyan-700">{item.label}</Link> : <span aria-current="page" className="text-slate-700">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Status({ children, tone = "blue" }) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-800",
    green: "border-emerald-200 bg-emerald-50 text-emerald-800",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
  };
  return <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${tones[tone]}`}>{children}</span>;
}

export function PublicPage({ eyebrow, title, description, breadcrumbs = [], status, children, cta = true }) {
  return (
    <>
      <Navbar />
      <main data-native className="bg-white pb-20 pt-28 text-slate-950 sm:pt-32">
        <header className="border-b border-slate-200 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,.10),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,.08),transparent_24%)] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-8 max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">{title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
              {status && <div className="mt-6">{status}</div>}
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">{children}</div>
        {cta && (
          <section data-native className="mx-auto mt-6 max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-native className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
              <h2 className="text-2xl font-bold">Scope a defensible PQC readiness assessment</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">Start with the systems, data lifetimes and cryptographic evidence that matter most. We will confirm scope and limitations before any engagement.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300">Request a demo</Link>
                <Link href="/demo" className="rounded-xl border border-cyan-700 px-5 py-3 font-bold text-white hover:border-cyan-400">Watch demo</Link>
                <Link href="/security-and-verification" className="rounded-xl border border-slate-600 px-5 py-3 font-bold text-white hover:border-slate-400">Review security evidence</Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export function ContentSections({ sections }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {sections.map((section) => (
        <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-2xl font-bold text-slate-950">{section.title}</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">{section.body}</p>
          {section.items && <ul className="mt-4 grid gap-2 text-base leading-7 text-slate-700">{section.items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden="true" />{item}</li>)}</ul>}
        </section>
      ))}
    </div>
  );
}
