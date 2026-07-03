import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import PipelineSection from "@/components/sections/PipelineSection";
import QVSSection from "@/components/sections/QVSSection";
import ScannerModules from "@/components/sections/ScannerModules";
import ComplianceSection from "@/components/sections/ComplianceSection";
import LiveTerminal from "@/components/sections/LiveTerminal";
import DeploymentSection from "@/components/sections/DeploymentSection";
import TargetSectorSection from "@/components/sections/TargetSectorSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import FloatingButton from "@/components/sections/FloatingButton";
import QueueSection from "@/components/sections/QueueSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsStrip />
      <PipelineSection />
      <ScannerModules />
      <QueueSection />
      <QVSSection />
      <LiveTerminal />
      <ComplianceSection />
      <TargetSectorSection />
      <DeploymentSection />
      <CTASection />
      <FloatingButton />
      <Footer />
    </>
  );
}