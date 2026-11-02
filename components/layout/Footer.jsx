import { Mail, MapPin } from "lucide-react";
import ComplianceMarquee from "@/components/sections/ComplianceMarquee";
// Root-relative anchors so footer links also work from /pricing, /faqs and /contact.
const footerLinks = [
  { title: "Platform", links: [["Pipeline", "/#pipeline"], ["Scanner Modules", "/#modules"], ["QVS", "/#qvs"], ["Migration", "/#migration"], ["Compliance", "/#compliance"], ["Deployment", "/#deployment"]] },
  { title: "Coverage", links: [["Target Sectors", "/#who"], ["Request Demo", "/#cta"], ["Contact Us", "/contact"]] },
];
const linkClass = "w-fit text-sm text-slate-600 transition hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";
export default function Footer() {
  return (
    <footer data-native className="relative overflow-hidden border-t border-line px-4 pb-8 pt-14 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.07),transparent_24%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <p className="font-display text-2xl text-ink">KAVACH-Q<sup className="relative -top-2 ml-0.5 text-sm font-semibold text-cyan-700">™</sup></p>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">GAINT&apos;s quantum-safe security platform for cryptographic discovery, QVS scoring, migration planning, and audit-ready compliance evidence.</p>
            <p className="mt-5 text-xs font-bold tracking-[0.24em] text-cyan-700">Built in India. For India.</p>
          </div>
          {footerLinks.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-ink">{title}</p>
              <ul className="mt-4 grid gap-2.5">
                {links.map(([label, href]) => <li key={label}><a href={href} className={linkClass}>{label}</a></li>)}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ink">Company</p>
            <p className="mt-4 text-sm font-bold text-ink">GAINT Clout Technologies Private Limited</p>
            <p className="mt-1 break-all font-display text-xs tracking-wide text-cyan-700">CIN: U62013TS2024PTC186957</p>
            <p className="mt-3 flex gap-2 text-sm leading-6 text-ink-soft"><MapPin className="mt-1 size-4 shrink-0 text-cyan-700" aria-hidden="true" /><span className="text-ink-soft">Sy No 83/1, Plot No: 25 30/C, Knowledge City, Raidurg Panmaktha, Hyderabad, Rai Durg, Telangana 500032</span></p>
            <a href="mailto:info@gaintclout.com" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"><Mail className="size-4" aria-hidden="true" />info@gaintclout.com</a>
          </div>
        </div>
        <div className="mt-12"><ComplianceMarquee /></div>
        <div className="mt-10 border-t border-line pt-6 text-center">
          <p className="text-sm text-ink-muted">© 2026 KAVACH-Q™. All Rights Reserved. | Proprietary &amp; Confidential | Intellectual Property Protected</p>
        </div>
      </div>
    </footer>
  );
}
