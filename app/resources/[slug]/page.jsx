import { notFound } from "next/navigation";
import { resources } from "@/lib/publicContent";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { ContentSections, PublicPage } from "@/components/content/PublicPage";

export function generateStaticParams() {
  return Object.keys(resources).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = resources[slug];
  return item
    ? pageMetadata({
        title: item.title,
        description: item.description,
        path: `/resources/${slug}`,
      })
    : {};
}
export default async function ResourcePage({ params }) {
  const { slug } = await params;
  const item = resources[slug];
  if (!item) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${siteUrl}/resources`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${siteUrl}/resources/${slug}`,
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
        eyebrow="Technical guide"
        title={item.title}
        description={item.description}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: item.title },
        ]}
      >
        <ContentSections sections={item.sections} />
        <aside className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <strong>Accuracy note:</strong> Standards and regulations change.
          Verify the linked primary source and applicability before using this
          guide for legal, compliance or procurement decisions.
        </aside>
      </PublicPage>
    </>
  );
}
