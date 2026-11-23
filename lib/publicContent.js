export const solutions = {
  "source-code-scanning": {
    title: "Source Code Cryptographic Scanning",
    description:
      "Identify security-sensitive patterns and cryptographic usage in supported source and configuration files before planning deeper review.",
    status: "Available: browser-based static pattern scan",
    statusTone: "green",
    sections: [
      {
        title: "What the current scanner does",
        body: "The public scanner reads selected local files in the browser or downloads supported text files from a public GitHub repository. It applies static pattern rules and reports file and line references.",
        items: [
          "Up to 500 supported text files",
          "Up to 2 MB per file and 20 MB total",
          "No code execution",
          "Local folder contents stay in the browser",
        ],
      },
      {
        title: "Current detection scope",
        body: "Rules look for high-risk indicators that deserve human review; they are not proof of exploitability.",
        items: [
          "Private-key headers and common token formats",
          "Hard-coded credential-like assignments",
          "Disabled TLS verification",
          "Dynamic code and command execution",
          "Weak hash usage and insecure HTTP URLs",
        ],
      },
      {
        title: "What it does not do",
        body: "The public tool is not a SAST replacement and does not claim complete cryptographic discovery.",
        items: [
          "No control-flow or data-flow analysis",
          "No dependency or CVE resolution",
          "No binary inspection",
          "No guarantee that every secret or cryptographic call is found",
        ],
      },
      {
        title: "How to use findings",
        body: "Confirm every match in context, rotate genuine exposed credentials, and use the result to scope a deeper assessment. Synthetic scores are prioritisation aids, not certifications.",
      },
    ],
  },
  "binary-analysis": {
    title: "Binary Cryptographic Analysis",
    description:
      "Plan evidence collection for cryptographic libraries and algorithms embedded in compiled software.",
    status: "Planned capability — not in the public scanner",
    statusTone: "amber",
    sections: [
      {
        title: "Intended assessment scope",
        body: "Binary analysis is intended to complement source review where source is unavailable or incomplete.",
        items: [
          "Linked crypto libraries and versions",
          "Embedded certificate and algorithm identifiers",
          "Package and executable metadata",
          "Manual validation of ambiguous matches",
        ],
      },
      {
        title: "Evidence boundaries",
        body: "Strings and signatures in a binary can indicate presence, not runtime use. Results need correlation with configuration, execution paths and asset ownership.",
      },
      {
        title: "Why it matters for PQC",
        body: "Compiled dependencies can preserve RSA, elliptic-curve or legacy hash use long after application teams believe it has been removed.",
      },
      {
        title: "Availability",
        body: "This repository does not contain an implemented binary scanner. Contact the team to confirm product availability and supported formats before relying on this capability.",
      },
    ],
  },
  "container-scanning": {
    title: "Container & Kubernetes Cryptographic Discovery",
    description:
      "Map cryptographic packages, certificates and configuration across container images and orchestrated workloads.",
    status: "Planned capability — validate during scoping",
    statusTone: "amber",
    sections: [
      {
        title: "Proposed coverage",
        body: "A container assessment should combine image package metadata, configuration and deployment manifests rather than treating an image as a single opaque asset.",
        items: [
          "Base images and installed packages",
          "TLS and certificate configuration",
          "Kubernetes manifests and secret references",
          "Ingress and service-mesh policy",
        ],
      },
      {
        title: "Safe collection",
        body: "Discovery should avoid copying private keys or secret values. Inventory metadata, references and policy should be sufficient for most readiness analysis.",
      },
      {
        title: "PQC relevance",
        body: "Container estates frequently duplicate the same vulnerable library across many workloads. Deduplication and ownership mapping are essential to a useful migration plan.",
      },
      {
        title: "Availability",
        body: "The public codebase does not implement image registry or cluster scanning. Confirm connectors, deployment model and test coverage in a technical demonstration.",
      },
    ],
  },
  "cryptographic-discovery": {
    title: "Cryptographic Discovery & Inventory",
    description:
      "Build an evidence-led inventory of algorithms, keys, certificates, protocols, owners and data lifetimes.",
    status: "Platform workflow — scope and connectors vary",
    statusTone: "blue",
    sections: [
      {
        title: "Inventory before migration",
        body: "PQC migration starts with evidence: what cryptography exists, where it runs, what it protects and who can change it.",
      },
      {
        title: "Minimum useful fields",
        body: "A defensible record links the observed primitive to a technical asset and business context.",
        items: [
          "Algorithm, mode and key size",
          "Certificate issuer and expiry",
          "Protocol and endpoint",
          "Data classification and retention period",
          "System owner, supplier and replacement constraint",
        ],
      },
      {
        title: "Observation versus inference",
        body: "KAVACHQ distinguishes directly observed evidence from inferred or user-declared fields. That distinction matters when findings become audit evidence.",
      },
      {
        title: "Migration output",
        body: "Inventory records can be grouped by urgency, dependency and change window to create a phased plan instead of a flat list of algorithms.",
      },
    ],
  },
  cbom: {
    title: "Cryptographic Bill of Materials (CBOM)",
    description:
      "Structure cryptographic inventory evidence so it can be reviewed, exchanged and updated over time.",
    status: "Platform output — sample format documented",
    statusTone: "blue",
    sections: [
      {
        title: "What a CBOM records",
        body: "A CBOM describes cryptographic assets and their relationships: algorithms, certificates, keys, protocols, libraries and the systems that depend on them.",
      },
      {
        title: "CycloneDX alignment",
        body: "CycloneDX provides a machine-readable model for cryptographic assets. A useful export should retain evidence source, timestamps and ownership rather than only listing algorithm names.",
      },
      {
        title: "Synthetic versus customer evidence",
        body: "Public examples on this site are intentionally synthetic. They demonstrate structure and should never be interpreted as findings from a real organisation.",
      },
      {
        title: "Operational use",
        body: "Teams can use a CBOM to track certificate expiry, weak algorithms, quantum-vulnerable public-key cryptography and migration progress across releases.",
      },
    ],
  },
  "legacy-document-analysis": {
    title: "Legacy Document Cryptography Review",
    description:
      "Extract cryptographic requirements and constraints from policies, architecture documents and supplier specifications.",
    status: "Planned capability — human review required",
    statusTone: "amber",
    sections: [
      {
        title: "Why documents matter",
        body: "Some of the most important cryptographic dependencies exist only in procurement specifications, interface agreements and old architecture documents.",
      },
      {
        title: "Candidate document types",
        body: "A review may cover policies, runbooks, contracts, network diagrams and certificate procedures, subject to access controls and retention rules.",
      },
      {
        title: "Human validation",
        body: "Automated extraction can miss context and cannot determine whether an old requirement still reflects production. Every material finding needs an accountable reviewer.",
      },
      {
        title: "Availability",
        body: "No document ingestion or analysis implementation is present in this public repository. Treat the capability as planned unless confirmed in a scoped engagement.",
      },
    ],
  },
  "pqc-readiness": {
    title: "PQC Readiness Assessment",
    description:
      "Prioritise migration using technical exposure, data lifetime, dependency and operational constraints.",
    status: "Assessment methodology — evidence depends on agreed scope",
    statusTone: "blue",
    sections: [
      {
        title: "Readiness is not a badge",
        body: "A readiness assessment is a time-bound view of an agreed scope. It does not certify an entire organisation as quantum-safe.",
      },
      {
        title: "Assessment inputs",
        body: "Useful prioritisation combines observed cryptography with business data.",
        items: [
          "Cryptographic inventory",
          "Data confidentiality lifetime",
          "External exposure",
          "Vendor and protocol dependencies",
          "Replacement lead time and change risk",
        ],
      },
      {
        title: "Expected outputs",
        body: "Outputs should include assumptions, limitations, evidence references, prioritised work packages and a reassessment date.",
      },
      {
        title: "NIST transition",
        body: "Migration planning can target NIST-standardised ML-KEM, ML-DSA and SLH-DSA where ecosystem support and interoperability requirements allow.",
      },
    ],
  },
};

export const resources = {
  "what-is-post-quantum-cryptography": {
    title: "What Is Post-Quantum Cryptography?",
    description:
      "A practical introduction to cryptography designed to resist attacks from classical and quantum computers.",
    sections: [
      {
        title: "The risk",
        body: "Large fault-tolerant quantum computers could use Shor's algorithm to break widely deployed RSA and elliptic-curve public-key cryptography. Symmetric algorithms are affected differently and generally require different key-size analysis.",
      },
      {
        title: "What PQC changes",
        body: "Post-quantum algorithms run on conventional computers but use mathematical problems believed to resist both classical and quantum attacks.",
      },
      {
        title: "The first NIST standards",
        body: "NIST finalised FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) in August 2024. Selection of an algorithm must still account for protocol support and implementation assurance.",
      },
      {
        title: "Start with inventory",
        body: "Organisations should identify long-lived sensitive data, discover quantum-vulnerable public-key cryptography and create a staged migration plan rather than attempting a single cutover.",
      },
    ],
  },
  "what-is-a-cbom": {
    title: "What Is a Cryptographic Bill of Materials?",
    description:
      "How a CBOM makes cryptographic assets visible and actionable.",
    sections: [
      {
        title: "A cryptographic inventory",
        body: "A CBOM records cryptographic algorithms, keys, certificates, protocols and libraries and connects them to systems and evidence.",
      },
      {
        title: "Different from an SBOM",
        body: "An SBOM lists software components. A CBOM focuses on cryptographic assets and properties. They overlap when a software component supplies a cryptographic implementation.",
      },
      {
        title: "Evidence fields",
        body: "Useful records include observation method, timestamp, source asset, algorithm properties, ownership, exposure and data-lifetime context.",
      },
      {
        title: "Keep it current",
        body: "A one-time spreadsheet becomes stale quickly. CBOM records should be refreshed as certificates, releases, suppliers and infrastructure change.",
      },
    ],
  },
  "cyclonedx-cbom-explained": {
    title: "CycloneDX and CBOM Explained",
    description:
      "How machine-readable CBOM data supports portable cryptographic evidence.",
    sections: [
      {
        title: "An open model",
        body: "CycloneDX can represent cryptographic assets and relationships in JSON or XML, making evidence easier to exchange between teams and tools.",
      },
      {
        title: "Core modelling choices",
        body: "A record should identify the cryptographic asset, its properties, the component or service using it, and dependencies that affect migration.",
      },
      {
        title: "Validation",
        body: "Schema-valid JSON is only the start. Teams should also validate evidence provenance, timestamps, identifiers and whether observed properties match the deployed environment.",
      },
      {
        title: "Avoid lock-in",
        body: "Retaining portable, documented exports helps an organisation preserve its evidence even when assessment tooling changes.",
      },
    ],
  },
  "quantum-safe-migration": {
    title: "Quantum-Safe Cryptographic Migration",
    description:
      "A phased approach to replacing quantum-vulnerable cryptography without losing control of interoperability and risk.",
    sections: [
      {
        title: "Discover",
        body: "Build an inventory and identify data that must remain confidential beyond the expected migration horizon.",
      },
      {
        title: "Prioritise",
        body: "Rank systems by exposure, data lifetime, criticality, dependency and time required to change suppliers or protocols.",
      },
      {
        title: "Pilot",
        body: "Test protocol support, performance, certificate workflows, rollback and hybrid operation in a bounded environment.",
      },
      {
        title: "Migrate and verify",
        body: "Implement controlled changes, retain evidence and rescan. A policy statement alone does not prove that deployed cryptography changed.",
      },
    ],
  },
  "nist-pqc-standards": {
    title: "NIST Post-Quantum Cryptography Standards",
    description: "A concise guide to FIPS 203, FIPS 204 and FIPS 205.",
    sections: [
      {
        title: "ML-KEM — FIPS 203",
        body: "ML-KEM is a key-encapsulation mechanism used to establish shared secrets. It is not a general-purpose encryption format or a digital signature.",
      },
      {
        title: "ML-DSA — FIPS 204",
        body: "ML-DSA is a lattice-based digital signature standard with multiple parameter sets and materially different key and signature sizes from classical schemes.",
      },
      {
        title: "SLH-DSA — FIPS 205",
        body: "SLH-DSA is a stateless hash-based signature standard. Its assumptions and performance profile differ from ML-DSA.",
      },
      {
        title: "Implementation still matters",
        body: "Standards do not remove side-channel, integration, key-management or interoperability risk. Use validated implementations appropriate to the deployment context.",
      },
    ],
  },
  "ml-kem-and-ml-dsa": {
    title: "Understanding ML-KEM and ML-DSA",
    description:
      "Why post-quantum key establishment and signatures solve different problems.",
    sections: [
      {
        title: "Two separate jobs",
        body: "ML-KEM establishes a shared secret; ML-DSA authenticates data with digital signatures. One cannot be substituted for the other.",
      },
      {
        title: "Protocol integration",
        body: "Real deployments depend on TLS, PKI, code-signing and application protocols adding interoperable support—not only an algorithm library.",
      },
      {
        title: "Size and performance",
        body: "Keys, ciphertexts and signatures are larger than common elliptic-curve equivalents. Measure bandwidth, storage and hardware constraints in the target workflow.",
      },
      {
        title: "Hybrid transition",
        body: "Some protocols combine classical and post-quantum mechanisms during transition. The security construction and downgrade behavior must be specified and tested.",
      },
    ],
  },
  "cert-in-cryptographic-inventory": {
    title: "CERT-In Guidance and Cryptographic Inventory",
    description:
      "How Indian cybersecurity guidance can inform evidence-led inventory work.",
    sections: [
      {
        title: "Guidance is not product approval",
        body: "Referencing CERT-In material does not mean CERT-In has approved or certified KAVACHQ. Applicable obligations depend on the organisation and context.",
      },
      {
        title: "Inventory value",
        body: "Documenting cryptographic assets, ownership and dependencies supports incident response, supplier assurance and future migration.",
      },
      {
        title: "Map obligations carefully",
        body: "Separate binding directions from technical guidance, sector rules and voluntary standards. Record the source and version for each control mapping.",
      },
      {
        title: "Evidence over labels",
        body: "A useful assessment shows what was scanned, when it was observed, what was excluded and how a reviewer can reproduce or validate the conclusion.",
      },
    ],
  },
  "india-national-quantum-mission": {
    title: "India's National Quantum Mission",
    description:
      "What the National Quantum Mission means—and does not mean—for enterprise cryptographic planning.",
    sections: [
      {
        title: "Mission context",
        body: "India's National Quantum Mission supports quantum research and ecosystem development. It should not be represented as approval of a private cybersecurity product.",
      },
      {
        title: "Planning implication",
        body: "Organisations can use mission and government publications as strategic context while following binding sectoral and cybersecurity requirements that actually apply to them.",
      },
      {
        title: "Avoid deadline inflation",
        body: "Advisory roadmaps, research targets and legal deadlines are different. Migration plans should label each source accurately.",
      },
      {
        title: "Practical next step",
        body: "Create an accountable cryptographic inventory, identify long-lived data and test post-quantum support in a controlled pilot.",
      },
    ],
  },
  "pqc-readiness-assessment": {
    title: "How to Run a PQC Readiness Assessment",
    description:
      "A repeatable assessment structure for scope, evidence, prioritisation and action.",
    sections: [
      {
        title: "Define scope",
        body: "Name business services, environments, suppliers, data classes and exclusions. 'The enterprise' is rarely a testable first scope.",
      },
      {
        title: "Collect evidence",
        body: "Combine automated discovery with architecture review, owner interviews and supplier declarations. Label inferred and self-reported facts.",
      },
      {
        title: "Prioritise",
        body: "Use data lifetime, exposure, algorithm, change lead time, criticality and dependency—not a single technical score alone.",
      },
      {
        title: "Deliver decisions",
        body: "The report should identify owners, work packages, assumptions, target states and a date for reassessment.",
      },
    ],
  },
  "quantum-safe-security-for-bfsi": {
    title: "Quantum-Safe Security for BFSI",
    description:
      "A risk-led starting point for banks, insurers and financial services providers.",
    sections: [
      {
        title: "Long-lived financial data",
        body: "Identity, transaction, credit and strategic data can remain sensitive for years. Data lifetime makes harvest-now-decrypt-later analysis important.",
      },
      {
        title: "Complex dependencies",
        body: "Core banking, payment rails, HSMs, mobile apps, APIs and supplier products create different migration constraints and ownership models.",
      },
      {
        title: "Start with bounded services",
        body: "Prioritise internet-facing services and high-value data flows, then expand the inventory through critical business services and suppliers.",
      },
      {
        title: "Regulatory accuracy",
        body: "Do not describe general cybersecurity requirements as a specific PQC mandate unless the responsible regulator has issued one that applies to the organisation.",
      },
    ],
  },
};
