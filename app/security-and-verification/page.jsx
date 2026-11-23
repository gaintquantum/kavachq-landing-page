import { pageMetadata } from "@/lib/seo";
import { PublicPage, Status } from "@/components/content/PublicPage";

export const metadata = pageMetadata({
  title: "Security & Verification",
  description:
    "Review KAVACHQ public scanner methodology, supported scope, limitations, synthetic CBOM evidence and vulnerability disclosure instructions.",
  path: "/security-and-verification",
});

export default function SecurityPage() {
  return (
    <PublicPage
      eyebrow="Public technical proof"
      title="Security & Verification"
      description="Testable statements about the public scanner, evidence format and limitations. No customer data or private findings are published here."
      breadcrumbs={[{ label: "Security & Verification" }]}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 p-7">
          <Status tone="green">Implemented in this website</Status>
          <h2 className="mt-5 text-2xl font-bold">
            Public source-pattern scanner
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Local folder scans read supported files in the visitor's browser.
            Public GitHub scans use GitHub's unauthenticated API and raw file
            service, then analyse downloaded text in the browser.
          </p>
          <ul className="mt-4 grid gap-2 text-slate-700">
            <li>Maximum 500 supported files</li>
            <li>Maximum 2 MB per file and 20 MB total</li>
            <li>No code execution or dependency resolution</li>
            <li>
              Static regular-expression rules can produce false positives and
              false negatives
            </li>
          </ul>
        </section>
        <section className="rounded-3xl border border-slate-200 p-7">
          <Status tone="amber">Synthetic example</Status>
          <h2 className="mt-5 text-2xl font-bold">Sample CBOM</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The sample demonstrates a minimal CycloneDX-style cryptographic
            asset record. It is illustrative data, not a customer result,
            certification or claim about a deployed system.
          </p>
          <a
            href="/sample-cbom.json"
            download
            className="mt-5 inline-block rounded-xl bg-slate-950 px-5 py-3 font-bold text-white"
          >
            Download sample JSON
          </a>
        </section>
        <section className="rounded-3xl border border-slate-200 p-7">
          <h2 className="text-2xl font-bold">Known limitations</h2>
          <ul className="mt-4 grid gap-3 leading-7 text-slate-600">
            <li>
              Pattern matching cannot prove exploitability or runtime use.
            </li>
            <li>
              Binary files, generated files and unsupported extensions are
              skipped.
            </li>
            <li>
              Public GitHub results depend on API limits, CORS behavior and
              repository availability.
            </li>
            <li>
              A score is a prioritisation aid, not a security guarantee or
              formal audit.
            </li>
            <li>
              Planned binary, container and document capabilities are labelled
              separately.
            </li>
          </ul>
        </section>
        <section className="rounded-3xl border border-slate-200 p-7">
          <h2 className="text-2xl font-bold">Vulnerability disclosure</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Email{" "}
            <a
              href="mailto:info@gaintclout.com?subject=Private%20security%20report"
              className="font-bold text-cyan-800"
            >
              info@gaintclout.com
            </a>{" "}
            with “Private security report” in the subject, the affected URL or component, impact, reproduction steps and a
            safe contact method. Avoid accessing data that is not yours,
            disrupting service, social engineering or publishing details before
            remediation is coordinated.
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            We will acknowledge a valid report when operationally possible. This
            statement does not create a bug-bounty promise or authorise testing
            outside applicable law.
          </p>
        </section>
      </div>
      <section className="mt-8 rounded-3xl border border-slate-200 p-7">
        <h2 className="text-2xl font-bold">How to verify public claims</h2>
        <ol className="mt-4 grid gap-4 leading-7 text-slate-600 md:grid-cols-3">
          <li>
            <strong className="block text-slate-950">
              1. Inspect source scope
            </strong>
            Read the published limits above and the scanner's skipped-file list
            after a run.
          </li>
          <li>
            <strong className="block text-slate-950">
              2. Reproduce a match
            </strong>
            Open the referenced local file and line. Confirm the finding in
            context before acting.
          </li>
          <li>
            <strong className="block text-slate-950">
              3. Validate certificates independently
            </strong>
            Use the issuer verification form and the certificate number, issue
            date and unmodified copy on the compliance page.
          </li>
        </ol>
      </section>
    </PublicPage>
  );
}
