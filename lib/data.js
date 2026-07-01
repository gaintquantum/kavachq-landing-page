export const PIPELINE_STAGES = [
  {
    id: 1,
    title: "Scan",
  },

  {
    id: 2,
    title: "Queue",
  },

  {
    id: 3,
    title: "Score",
  },

  {
    id: 4,
    title: "Plan",
  },

  {
    id: 5,
    title: "Execute",
  },

  {
    id: 6,
    title: "Comply",
  },
];

export const SCANNER_MODULES = [
  "Source Code Scanner",
  "TLS Scanner",
  "Binary Scanner",
  "Infrastructure Scanner",
  "Kubernetes Scanner",
  "Document Scanner",
  "Library Fingerprinting",
];

export const COMPLIANCE_ITEMS = [
  "CERT-IN",
  "RBI",
  "ISO 27001",
  "DPDPA",
  "MeitY",
  "NIST PQC",
];

export const TARGET_SECTORS = [
  "Banking",
  "Healthcare",
  "Government",
  "Telecom",
  "Defense",
  "Cloud",
];