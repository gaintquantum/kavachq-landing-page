export const initialBotMessage = {
  id: "welcome",

  title: "Welcome to KAVACH-Q",

  message:
    "Explore KAVACH-Q, quantum security, QVS, PQC, and sector-specific information.",

  options: [
    { label: "What is KAVACH-Q?", next: "about" },
    { label: "What is QVS?", next: "qvs" },
    { label: "What is PQC?", next: "pqc" },
    { label: "Why Quantum Security?", next: "quantumThreat" },
    { label: "Who is KAVACH-Q for?", next: "industries" },
    { label: "Explore FAQs & Q&A", href: "/faqs" },
  ],
};

export const botData = {
  // =========================================================
  // ABOUT KAVACH-Q
  // =========================================================

  about: {
    title: "What is KAVACH-Q?",

    message:
      "KAVACH-Q is a quantum-safe cybersecurity platform that helps organisations discover cryptographic risks, assess quantum exposure, prioritise vulnerable assets, plan migration, support controlled execution, and maintain compliance visibility.",

    options: [
      { label: "Why Quantum Security?", next: "quantumThreat" },
      { label: "Who is KAVACH-Q for?", next: "industries" },
      { label: "What is QVS?", next: "qvs" },
    ],
  },

  // =========================================================
  // QVS
  // =========================================================

  qvs: {
    title: "What is QVS?",

    message:
      "The Quantum Vulnerability Score helps organisations prioritise discovered cryptographic assets using a weighted combination of risk factors, adjusted for operating environment and data lifespan.",

    options: [
      { label: "Why Quantum Security?", next: "quantumThreat" },
      { label: "What is PQC?", next: "pqc" },
    ],
  },

  // =========================================================
  // PQC
  // =========================================================

  pqc: {
    title: "What is PQC?",

    message:
      "Post-Quantum Cryptography refers to cryptographic algorithms designed to remain secure against attacks from both classical and quantum computers.",

    options: [
      { label: "PQC Standards", next: "algorithms" },
      { label: "Why Quantum Security?", next: "quantumThreat" },
    ],
  },

  // =========================================================
  // PQC STANDARDS
  // =========================================================

  algorithms: {
    title: "PQC Standards",

    message:
      "KAVACH-Q's roadmap aligns with modern post-quantum standards including ML-KEM for key establishment and ML-DSA and SLH-DSA for digital signatures.",

    options: [
      { label: "What is PQC?", next: "pqc" },
      { label: "Why Quantum Security?", next: "quantumThreat" },
    ],
  },

  // =========================================================
  // QUANTUM SECURITY
  // =========================================================

  quantumThreat: {
    title: "Why Quantum Security?",

    message:
      "Organisations rely on public-key cryptography such as RSA and ECC to protect sensitive information. Preparing early helps identify long-term cryptographic exposure and enables a controlled transition toward quantum-safe security.",

    options: [
      {
        label: "Harvest Now, Decrypt Later",
        next: "hndl",
      },
      { label: "What is PQC?", next: "pqc" },
    ],
  },

  // =========================================================
  // HARVEST NOW, DECRYPT LATER
  // =========================================================

  hndl: {
    title: "Harvest Now, Decrypt Later",

    message:
      "Harvest Now, Decrypt Later describes a threat where attackers collect encrypted information today and retain it with the intention of decrypting it later when sufficiently capable quantum computers become available.",

    options: [
      { label: "Why Quantum Security?", next: "quantumThreat" },
      { label: "What is PQC?", next: "pqc" },
    ],
  },

  // =========================================================
  // INDUSTRIES
  // =========================================================

  industries: {
    title: "Who is KAVACH-Q for?",

    message:
      "KAVACH-Q is designed for organisations that depend on long-term cryptographic security, including banking and financial services, government departments, critical infrastructure, large enterprises, security teams, and compliance teams.",

    options: [
      { label: "Explore Sector Q&A", href: "/faqs" },
      { label: "What is KAVACH-Q?", next: "about" },
    ],
  },
};