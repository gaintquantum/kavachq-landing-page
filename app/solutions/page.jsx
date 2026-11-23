import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { solutions } from "@/lib/publicContent";
import { PublicPage, Status } from "@/components/content/PublicPage";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Explore KAVACHQ cryptographic discovery, CBOM and PQC readiness workflows with clear product availability and limitations.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <PublicPage
      eyebrow="Solutions"
      title="Cryptographic evidence before migration"
      description="Explore the current public scanner, platform workflows and planned capabilities. Every page labels what is implemented and what still requires confirmation."
      breadcrumbs={[{ label: "Solutions" }]}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(solutions).map(([slug, item]) => (
          <Link
            key={slug}
            href={`/solutions/${slug}`}
            className="rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
          >
            <Status tone={item.statusTone}>{item.status}</Status>
            <h2 className="mt-5 text-2xl font-bold text-slate-950">
              {item.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            <span className="mt-5 inline-block font-bold text-cyan-800">
              Explore solution
            </span>
          </Link>
        ))}
      </div>
    </PublicPage>
  );
}
