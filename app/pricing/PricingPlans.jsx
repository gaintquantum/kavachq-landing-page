import { Info } from "lucide-react";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "ASSESS",
    subtitle: "Start your PQC journey",
    price: "₹12 Lakh",
    theme: "blue",
    buttonText: "Start PQC Assessment",

    features: [
      "Up to 1,000 crypto assets",
      "Up to 5 repositories",
      "Up to 250K LOC",
      "Cryptographic discovery",
      "Source-code scanning",
      "Crypto inventory & TLS discovery",
      "Quantum Vulnerability Score",
      "Basic reporting",
      "5 RBAC users",
      "Standard support",
    ],
  },

  {
    name: "GROWTH",
    subtitle: "Build quantum readiness",
    price: "₹30 Lakh",
    theme: "green",
    buttonText: "Start Quantum Readiness",

    features: [
      "Up to 10,000 crypto assets",
      "Up to 25 repositories",
      "Up to 2M LOC",
      "Everything in ASSESS, plus:",
      "Migration planning",
      "Extended inventory & risk analysis",
      "1 compliance pack",
      "15 RBAC users",
      "SaaS / Dedicated cloud option",
      "Standard support",
    ],
  },

  {
    name: "ENTERPRISE",
    subtitle: "Accelerate migration at scale",
    price: "₹60 Lakh",
    theme: "enterprise",
    popular: true,
    buttonText: "Request Enterprise Demo",

    features: [
      "Up to 50,000 crypto assets",
      "Up to 100 repositories",
      "Up to 10M LOC",
      "Everything in GROWTH, plus:",
      "Full SCAN → PLAN → EXECUTE",
      "Migration orchestration",
      "2 compliance packs",
      "CBOM export",
      "50 RBAC users",
      "Dedicated / VPC deployment",
      "Priority support",
    ],
  },

  {
    name: "SOVEREIGN",
    subtitle: "For mission-critical organizations",
    pricePrefix: "From",
    price: "₹1 Crore",
    theme: "purple",
    buttonText: "Request Sovereign Deployment",

    features: [
      "Unlimited / custom crypto assets",
      "Full SCAN → COMPLY",
      "CBOM & audit-ready reports",
      "On-premise / air-gapped deployment",
      "All applicable compliance packs",
      "Unlimited RBAC users",
      "Dedicated security architecture",
      "Mission-Critical 24×7 support",
      "For Government, PSU, BFSI, Critical Infrastructure",
    ],
  },
];

export default function PricingPlans() {
  return (
    <>
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#075ab6]">
          Pricing
        </p>

        <h2 className="mb-3 mt-2 text-[26px]! leading-tight font-bold! tracking-tight text-[#091421]! sm:text-[30px]!">
          Choose the right plan for your organization
        </h2>

        <p className="mx-auto max-w-3xl text-sm leading-6 text-[#526074] sm:text-base">
          Flexible plans for every stage of your
          post-quantum journey — from assessment to
          sovereign deployment.
        </p>
      </div>

      <div className="mt-10 grid auto-rows-fr gap-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            {...plan}
          />
        ))}
      </div>

      <div className="mx-auto my-6 flex max-w-5xl items-start gap-2.5 text-xs leading-5 text-[#526074]">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

        <p>
          All prices are starting prices and may vary
          based on cryptographic asset volume,
          repositories/LOC, deployment architecture,
          compliance requirements, support SLA and
          contract term. Government, PSU, BFSI and
          air-gapped deployments are quoted based on
          infrastructure and security requirements.
        </p>
      </div>
    </>
  );
}
