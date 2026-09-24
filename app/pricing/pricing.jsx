import Navbar from "@/components/layout/Navbar";
import PricingHero from "./PricingHero";
import PricingPlans from "./PricingPlans";
import ProfessionalServices from "./ProfessionalServices";
import ComplianceAddons from "./ComplianceAddOn";
import PricingCTA from "./PricingCTA";
import PricingTest from "./PricingTest";
export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc]! pt-24 text-[#101b2b]! lg:pt-28 **:font-sans!">
        <PricingHero />
          {/* <PricingTest /> */}
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-10">
          <PricingPlans />
          <div className="grid gap-6 lg:grid-cols-2">
            <ProfessionalServices />
            <ComplianceAddons />
          </div>
        </div>
        <PricingCTA />
      </main>
    </>
  );
}
