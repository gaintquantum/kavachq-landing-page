import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import CTASection from "@/components/sections/CTASection";
import FloatingButton from "@/components/sections/FloatingButton";
import QueueSection from "@/components/sections/QueueSection";
import { defaultDescription, defaultTitle, ogImage, siteUrl } from "@/lib/seo";

// Below-the-fold sections load as separate chunks and hydrate in small steps.
// They are still server-rendered, so their content stays in the HTML for crawlers.
const RepositoryRiskScanner = dynamic(() => import("@/components/sections/RepositoryRiskScanner"));
const PipelineSection = dynamic(() => import("@/components/sections/PipelineSection"));
const ScannerModules = dynamic(() => import("@/components/sections/ScannerModules"));
const StatsStrip = dynamic(() => import("@/components/sections/StatsStrip"));
const QVSSection = dynamic(() => import("@/components/sections/QVSSection"));
const LiveTerminal = dynamic(() => import("@/components/sections/LiveTerminal"));
const MigrationSection = dynamic(() => import("@/components/sections/MigrationSection"));
const ComplianceSection = dynamic(() => import("@/components/sections/ComplianceSection"));
const TargetSectorSection = dynamic(() => import("@/components/sections/TargetSectorSection"));
const DeploymentSection = dynamic(() => import("@/components/sections/DeploymentSection"));
const Bot = dynamic(() => import("@/components/Bot/Bot"));

// Set here, not in the layout, or every page inherits the homepage as its canonical.
export const metadata = {
  alternates: { canonical: "/" },
};

const webPageData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: defaultTitle,
  description: defaultDescription,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#software` },
  primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}${ogImage.url}` },
  inLanguage: "en-IN",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <RepositoryRiskScanner />
        <PipelineSection />
        <ScannerModules />
        <StatsStrip />
        <QueueSection />
        <QVSSection />
        <LiveTerminal />
        <MigrationSection />
        <ComplianceSection />
        <TargetSectorSection />
        <DeploymentSection />
        <CTASection />
        <FloatingButton />
        <Bot />
        {/* <ComplianceMarquee /> */}
      </main>
    </>
  );
}
