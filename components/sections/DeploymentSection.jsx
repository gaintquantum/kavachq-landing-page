"use client";

import {
  Building2,
  FileCheck2,
  KeyRound,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function DeploymentSection() {
  const steps = [
    {
      no: "01",
      title: "Tenant & Access",
      description:
        "Configure the organization tenant, RBAC roles, SSO, data residency, retention policy, and immutable audit logging before scans begin.",
      icon: Building2,
      tone: "cyan",
    },
    {
      no: "02",
      title: "Connect Assets",
      description:
        "Register repositories, servers, APIs, binaries, TLS endpoints, SBOMs, and internal environments with scoped credentials or private connectors.",
      icon: KeyRound,
      tone: "emerald",
    },
    {
      no: "03",
      title: "Scan & Score",
      description:
        "All 7 scanner modules run against internal targets. QVS scores computed in real time.CRITICAL findings trigger CISO alerts within 4 hours; remediation follows the applicable severity-based SLA. Coverage reports identify and flag coverage gaps",
      icon: ScanSearch,
      tone: "violet",
    },
    {
      no: "04",
      title: "Enforce & Report",
      description:
        "Use CI/CD policy gates, dry-run migration controls, owner assignments, and compliance exports for CERT-IN, RBI, ISO 27001, and internal audits.",
      icon: FileCheck2,
      tone: "amber",
    },
  ];

  return (
    <section
      id="deployment"
      aria-labelledby="deployment-heading" data-native
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 text-ink sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader align="left" eyebrow="Secure Deployment" id="deployment-heading" title="Built for private" accent="national-scale rollout."
          description="KAVACH-Q is deployed as a controlled platform for government and regulated institutions: tenant isolation, SSO, data residency, scoped asset discovery, QVS scoring, migration controls, and audit-ready compliance evidence." />
        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-11 hidden h-px border-t-2 border-dashed border-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.22)] xl:block" />

          <RevealGroup stagger={0.1} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <StepCard key={step.no} step={step} />
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }) {
  const Icon = step.icon;
  const tone = getTone(step.tone);

  return (
    <RevealItem
      as="article"
      className={`group relative h-full rounded-3xl border p-6 shadow-[0_24px_80px_rgba(2,8,23,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${tone.card}`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border shadow-lg  ${tone.iconBox}`}
          >
            <Icon className={`h-7 w-7 ${tone.icon}`} strokeWidth={1.8} />
          </div>

          <div className="rounded-full border border-brand/30 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-black shadow-sm">
            Step {step.no}
          </div>
        </div>

        <h3 className="mt-6 text-xl font-black tracking-tight text-ink">
          {step.title}
        </h3>

        <p className="mt-2.5 text-sm leading-6 text-ink-soft">
          {step.description}
        </p>
      </div>
    </RevealItem>
  );
}

function getTone(tone) {
  const tones = {
    cyan: {
      icon: "text-cyan-700",
      iconBox: "border-cyan-200 bg-cyan-50 ",
      card: "border-cyan-200 bg-white hover:border-cyan-300 hover:bg-white",
    },
    emerald: {
      icon: "text-emerald-700",
      iconBox: "border-emerald-200 bg-emerald-50 ",
      card: "border-emerald-200 bg-white hover:border-emerald-300 hover:bg-white",
    },
    violet: {
      icon: "text-violet-700",
      iconBox: "border-violet-200 bg-violet-50 ",
      card: "border-violet-200 bg-white hover:border-violet-300 hover:bg-white",
    },
    amber: {
      icon: "text-amber-700",
      iconBox: "border-amber-200 bg-amber-50 ",
      card: "border-amber-200 bg-white hover:border-amber-300 hover:bg-white",
    },
  };

  return tones[tone] ?? tones.cyan;
}
