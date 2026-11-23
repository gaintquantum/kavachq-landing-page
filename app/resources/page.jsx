import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { resources } from "@/lib/publicContent";
import { PublicPage } from "@/components/content/PublicPage";

export const metadata = pageMetadata({
  title: "PQC Resources",
  description:
    "Original, practical guides to post-quantum cryptography, CBOM, NIST standards and quantum-safe migration.",
  path: "/resources",
});
export default function ResourcesPage() {
  return (
    <PublicPage
      eyebrow="Resources"
      title="Post-quantum cryptography, explained for action"
      description="Technical primers for security leaders, engineers, auditors and regulated organisations. These guides separate standards, guidance and product capability."
      breadcrumbs={[{ label: "Resources" }]}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(resources).map(([slug, item]) => (
          <Link
            key={slug}
            href={`/resources/${slug}`}
            className="rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
          >
            <p className="text-sm font-black uppercase tracking-[.18em] text-cyan-700">
              Guide
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              {item.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            <span className="mt-5 inline-block font-bold text-cyan-800">
              Read guide
            </span>
          </Link>
        ))}
      </div>
    </PublicPage>
  );
}
