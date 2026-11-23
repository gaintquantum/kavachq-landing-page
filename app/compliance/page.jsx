import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PublicPage, Status } from "@/components/content/PublicPage";

export const metadata = pageMetadata({
  title: "Compliance, Certifications & Security Assurance",
  description:
    "Review GAINT ISO certificates, KAVACHQ security practices, regulatory alignment, verification links and important scope limitations.",
  path: "/compliance",
});

const certificates = [
  {
    title: "Information Security Management System",
    standard: "ISO/IEC 27001:2022",
    issuer: "QRO Certification LLP",
    number: "305026070821IS",
    issue: "8 July 2026",
    expiry: "7 July 2029",
    surveillance: "7 July 2027",
    scope:
      "Providing information security management related to IT services and testing and development of computer programs.",
    image: "/ISO-IEC.jpeg",
    pdf: "/ISO-IEC.pdf",
    alt: "ISO IEC 27001:2022 certificate issued to GAINT Clout Technologies Private Limited",
  },
  {
    title: "Quality Management System",
    standard: "ISO 9001:2015",
    issuer: "QRO Certification LLP",
    number: "305026071040Q",
    issue: "10 July 2026",
    expiry: "9 July 2029",
    surveillance: "9 July 2027",
    scope:
      "Providing IT services and testing and development of computer programs.",
    image: "/ISO.jpeg",
    pdf: "/ISO.pdf",
    alt: "ISO 9001:2015 certificate issued to GAINT Clout Technologies Private Limited",
  },
];

const alignments = [
  {
    title: "CERT-In directions",
    kind: "Legal and operational obligations",
    body: "CERT-In's directions under section 70B cover matters including incident reporting, time synchronisation and log retention for entities in scope. A KAVACHQ assessment may support evidence collection, but use of the product does not itself establish compliance.",
    href: "https://www.cert-in.org.in/Directions70B.jsp",
  },
  {
    title: "Digital Personal Data Protection",
    kind: "Indian data-protection law",
    body: "The DPDP Act, 2023 and the notified DPDP Rules, 2025 govern processing of digital personal data and commence on their specified timelines. Applicability and duties depend on the processing context; this page is not legal advice.",
    href: "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025686cadad39.pdf",
  },
  {
    title: "MeitY and National Quantum Mission",
    kind: "Government strategy and ecosystem",
    body: "Government quantum initiatives provide strategic context for readiness planning. They do not constitute approval, certification or endorsement of KAVACHQ or GAINT.",
    href: "https://dst.gov.in/national-quantum-mission-nqm",
  },
  {
    title: "NIST post-quantum standards",
    kind: "Technical standards",
    body: "NIST finalised FIPS 203, FIPS 204 and FIPS 205 for ML-KEM, ML-DSA and SLH-DSA. Product or protocol support must still be tested in the intended environment.",
    href: "https://csrc.nist.gov/publications/fips",
  },
  {
    title: "ISO/IEC 27001",
    kind: "Management-system standard",
    body: "ISO/IEC 27001 concerns an organisation's information security management system and the certified scope. It is not a certification that every GAINT product is vulnerability-free or quantum-safe.",
    href: "https://www.iso.org/standard/27001",
  },
  {
    title: "CycloneDX cryptography model",
    kind: "Voluntary technical specification",
    body: "CycloneDX supports machine-readable representation of cryptographic assets. Alignment describes an output format; it does not imply certification by OWASP or CycloneDX.",
    href: "https://cyclonedx.org/capabilities/cbom/",
  },
];

export default function CompliancePage() {
  return (
    <PublicPage
      eyebrow="Trust centre"
      title="Compliance, Certifications & Security Assurance"
      description="Documented certificates, regulatory context and product assurance—presented with the certificate holder, scope, limitations and primary sources visible."
      breadcrumbs={[{ label: "Compliance" }]}
    >
      <section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">ISO certificates held by GAINT</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The certificate holder is{" "}
            <strong>GAINT Clout Technologies Private Limited</strong>. These
            management-system certificates do not certify the KAVACHQ product
            itself as quantum-safe. Status below is based on the supplied
            certificate and current date; use QRO's verification process for
            independent confirmation.
          </p>
        </div>
        <div className="mt-8 grid gap-8">
          {certificates.map((cert) => (
            <article
              key={cert.number}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="grid lg:grid-cols-[minmax(300px,380px)_1fr]">
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center border-b border-slate-200 bg-slate-50 p-5 lg:border-b-0 lg:border-r lg:p-7"
                >
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    width="1132"
                    height="1600"
                    loading="lazy"
                    className="block h-auto w-full max-w-[340px] rounded-xl border border-slate-200 bg-white object-contain shadow-[0_12px_36px_rgba(15,23,42,0.14)] transition duration-300 hover:scale-[1.01]"
                  />
                </a>
                <div className="p-6 sm:p-8 lg:p-10">
                  <Status tone="green">Current per supplied certificate</Status>
                  <p className="mt-4 text-sm font-black uppercase tracking-[.16em] text-cyan-700">
                    {cert.standard}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{cert.title}</h3>
                  <dl className="mt-6 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="font-bold text-slate-950">
                        Certificate holder
                      </dt>
                      <dd className="text-slate-600">
                        GAINT Clout Technologies Private Limited
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-slate-950">Issuer</dt>
                      <dd className="text-slate-600">{cert.issuer}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-slate-950">
                        Certificate number
                      </dt>
                      <dd className="font-mono text-slate-600">
                        {cert.number}
                      </dd>
                    </div>
                    <div className="grid grid-cols-2 gap-5 sm:col-span-2">
                      <div>
                        <dt className="font-bold text-slate-950">Issued</dt>
                        <dd className="text-slate-600">{cert.issue}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-slate-950">Expires</dt>
                        <dd className="text-slate-600">{cert.expiry}</dd>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="font-bold text-slate-950">
                        First surveillance due
                      </dt>
                      <dd className="text-slate-600">{cert.surveillance}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="font-bold text-slate-950">
                        Scope printed on certificate
                      </dt>
                      <dd className="leading-6 text-slate-600">{cert.scope}</dd>
                    </div>
                  </dl>
                  <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white"
                    >
                      Preview PDF
                    </a>
                    <a
                      href={cert.pdf}
                      download
                      className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800"
                    >
                      Download PDF
                    </a>
                    <a
                      href="https://www.qrocert.org/verify.aspx"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-cyan-300 px-4 py-2.5 text-sm font-bold text-cyan-900"
                    >
                      Verify with issuer
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-14">
        <h2 className="text-3xl font-bold">
          Regulatory and standards alignment
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Alignment means the workflow can help organise relevant evidence. It
          does not mean formal approval, accreditation or legal compliance.
        </p>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {alignments.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <p className="text-sm font-bold text-cyan-800">{item.kind}</p>
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-bold text-blue-800 underline underline-offset-4"
              >
                Primary source
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-14 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Security practices</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Public scanning runs in the browser for local folders. Public GitHub
            scans download supported files directly to the browser. Review
            current scope and limitations before use.
          </p>
          <Link
            href="/security-and-verification"
            className="mt-4 inline-block font-bold text-cyan-800"
          >
            Security and verification
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Vulnerability disclosure</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Report suspected vulnerabilities privately to{" "}
            <a
              className="font-bold text-cyan-800"
              href="mailto:info@gaintclout.com?subject=Private%20security%20report"
            >
              info@gaintclout.com
            </a>
            {" "}with “Private security report” in the subject. Do not include live secrets or customer data in the first message.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Company and legal information</h2>
          <p className="mt-3 leading-7 text-slate-600">
            GAINT Clout Technologies Private Limited
            <br />
            CIN: U62013TS2024PTC186957
            <br />
            Hyderabad, Telangana, India
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block font-bold text-cyan-800"
          >
            Contact GAINT
          </Link>
        </div>
      </section>
    </PublicPage>
  );
}
