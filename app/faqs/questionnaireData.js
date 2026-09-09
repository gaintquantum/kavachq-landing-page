export const qnaCategories = [
  {
    id: "ALL",
    label: "ALL",
  },
  {
    id: "BANKING",
    label: "BANKING",
  },
  {
    id: "BFSI",
    label: "BFSI",
  },
  {
    id: "STATE_GOV",
    label: "STATE GOV",
  },
  {
    id: "CENTRAL_GOV",
    label: "CENTRAL GOV / CII",
  },
  {
    id: "TECHNICAL",
    label: "TECHNICAL",
  },
  {
    id: "REGULATORY",
    label: "REGULATORY",
  },
];

export const qnaData = [
  // =========================================================
  // BANKING
  // =========================================================

  {
    id: 1,
    category: "BANKING",
    question:
      "What cryptographic assets can KAVACH-Q assess in a banking environment?",
    answer:
      "KAVACH-Q is designed to assess cryptographic usage across source code, TLS certificates, binaries, cryptographic libraries, Kubernetes secrets, and configuration files.",
  },

  {
    id: 2,
    category: "BANKING",
    question:
      "How does KAVACH-Q support banking security and compliance requirements?",
    answer:
      "KAVACH-Q helps organisations identify vulnerable cryptographic assets, prioritise remediation, track migration progress, and maintain structured evidence that can support internal security and regulatory reviews.",
  },

  {
    id: 3,
    category: "BANKING",
    question:
      "Can KAVACH-Q operate within a bank's existing security infrastructure?",
    answer:
      "KAVACH-Q is designed to complement existing enterprise security environments and support controlled deployment models where cryptographic assessment and migration activities can remain within organisational security boundaries.",
  },

  // =========================================================
  // BFSI
  // =========================================================

  {
    id: 4,
    category: "BFSI",
    question:
      "Why is quantum risk relevant to insurance, NBFCs, and other financial institutions?",
    answer:
      "Financial organisations often retain sensitive customer, financial, and transactional information for long periods. Long-lived encrypted information may require additional consideration when organisations prepare for future quantum threats.",
  },

  {
    id: 5,
    category: "BFSI",
    question:
      "Can KAVACH-Q work with existing SOC and security monitoring environments?",
    answer:
      "KAVACH-Q is designed to complement enterprise security operations by providing cryptographic findings, risk information, migration status, and governance data that can be incorporated into existing monitoring workflows.",
  },

  {
    id: 6,
    category: "BFSI",
    question:
      "How can KAVACH-Q help financial organisations prepare for PQC migration?",
    answer:
      "KAVACH-Q helps organisations discover existing cryptographic dependencies, evaluate their quantum-related risk, prioritise migration requirements, and manage the transition through a structured security lifecycle.",
  },

  // =========================================================
  // STATE GOVERNMENT
  // =========================================================

  {
    id: 7,
    category: "STATE_GOV",
    question:
      "Which state government systems may require quantum-readiness assessment?",
    answer:
      "Citizen service portals, treasury applications, police systems, health systems, land and revenue records, digital certificates, and other systems containing sensitive or long-lived information may require cryptographic assessment and migration planning.",
  },

  {
    id: 8,
    category: "STATE_GOV",
    question:
      "Can KAVACH-Q operate within state or government-controlled infrastructure?",
    answer:
      "KAVACH-Q is designed for controlled deployment models where cryptographic assessment activities can operate within organisational infrastructure while sensitive information is handled under defined security controls.",
  },

  {
    id: 9,
    category: "STATE_GOV",
    question:
      "How can KAVACH-Q help government departments identify cryptographic risk?",
    answer:
      "KAVACH-Q can help departments discover cryptographic assets across supported application and infrastructure components, assess their quantum-related exposure, prioritise vulnerable systems, and create structured migration plans.",
  },

  // =========================================================
  // CENTRAL GOVERNMENT / CII
  // =========================================================

  {
    id: 10,
    category: "CENTRAL_GOV",
    question:
      "How can KAVACH-Q support Critical Information Infrastructure?",
    answer:
      "KAVACH-Q can help identify cryptographic dependencies, assess quantum exposure, prioritise high-risk assets, and support structured migration planning for sensitive and critical infrastructure environments.",
  },

  {
    id: 11,
    category: "CENTRAL_GOV",
    question:
      "Can KAVACH-Q work in restricted or isolated environments?",
    answer:
      "KAVACH-Q is designed to support controlled deployment scenarios where systems may operate with restricted connectivity and organisational security boundaries must be preserved.",
  },

  {
    id: 12,
    category: "CENTRAL_GOV",
    question:
      "How does KAVACH-Q help protect long-lived government information?",
    answer:
      "KAVACH-Q helps organisations identify cryptographic systems protecting long-retention information, assess their exposure to future quantum threats, and prioritise systems that may require migration to quantum-safe cryptography.",
  },

  // =========================================================
  // TECHNICAL
  // =========================================================

  {
    id: 13,
    category: "TECHNICAL",
    question:
      "How does KAVACH-Q identify cryptographic usage in applications?",
    answer:
      "KAVACH-Q is designed to identify cryptographic usage across source code, TLS certificates, binaries, cryptographic libraries, Kubernetes secrets, and configuration files.",
  },

  {
    id: 14,
    category: "TECHNICAL",
    question:
      "What happens after KAVACH-Q identifies a high-risk cryptographic asset?",
    answer:
      "The asset moves through the KAVACH-Q lifecycle where it is scored, prioritised, planned for migration, handled through controlled execution workflows, and tracked for governance and compliance.",
  },

  {
    id: 15,
    category: "TECHNICAL",
    question:
      "Which post-quantum cryptographic standards are relevant to KAVACH-Q?",
    answer:
      "KAVACH-Q's roadmap aligns with modern post-quantum cryptographic standards including ML-KEM for key establishment and ML-DSA and SLH-DSA for digital signatures.",
  },

  {
    id: 16,
    category: "TECHNICAL",
    question:
      "What is the role of the Quantum Vulnerability Score in KAVACH-Q?",
    answer:
      "The Quantum Vulnerability Score helps prioritise discovered cryptographic assets using a weighted combination of risk factors, adjusted for operating environment and data lifespan.",
  },

  // =========================================================
  // REGULATORY
  // =========================================================

  {
    id: 17,
    category: "REGULATORY",
    question:
      "Does KAVACH-Q support compliance evidence generation?",
    answer:
      "KAVACH-Q is designed to maintain cryptographic findings, remediation status, migration evidence, compliance mappings, and audit information that can support regulatory and internal security reviews.",
  },

  {
    id: 18,
    category: "REGULATORY",
    question:
      "Can KAVACH-Q support cryptographic governance for security frameworks?",
    answer:
      "KAVACH-Q can provide cryptographic inventory, risk visibility, migration evidence, and governance information that can contribute to broader information-security and compliance activities.",
  },

  {
    id: 19,
    category: "REGULATORY",
    question:
      "How does KAVACH-Q help organisations prepare for regulatory reviews?",
    answer:
      "KAVACH-Q provides structured visibility into cryptographic assets, identified risks, remediation progress, migration activity, and supporting evidence that can assist security and compliance teams during reviews.",
  },
];