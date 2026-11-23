import { notFound } from "next/navigation";
import { solutions } from "@/lib/publicContent";
import { pageMetadata, siteUrl } from "@/lib/seo";
import {
  ContentSections,
  PublicPage,
  Status,
} from "@/components/content/PublicPage";

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = solutions[slug];
  return item
    ? pageMetadata({
        title: item.title,
        description: item.description,
        path: `/solutions/${slug}`,
      })
    : {};
}
export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const item = solutions[slug];
  if (!item) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: `${siteUrl}/solutions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${siteUrl}/solutions/${slug}`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <PublicPage
        eyebrow="KAVACHQ solution"
        title={item.title}
        description={item.description}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: item.title },
        ]}
        status={<Status tone={item.statusTone}>{item.status}</Status>}
      >
        <ContentSections sections={item.sections} />
      </PublicPage>
    </>
  );
}
