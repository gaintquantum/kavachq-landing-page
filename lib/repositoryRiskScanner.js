export const REPOSITORY_SCAN_CONFIG = Object.freeze({
  maxFiles: 500,
  maxFileSize: 2 * 1024 * 1024,
  maxTotalSize: 20 * 1024 * 1024,
  ignoredDirectories: [
    ".git", "node_modules", "dist", "build", "coverage", "vendor", ".next",
    ".nuxt", "target", "out", ".cache",
  ],
  ignoredFiles: ["package-lock.json", "yarn.lock", "pnpm-lock.yaml"],
  generatedFilePatterns: [/\.min\.(?:js|css)$/i, /\.map$/i, /\.generated\.[^.]+$/i],
  supportedExtensions: new Set([
    "js", "jsx", "ts", "tsx", "mjs", "cjs", "py", "java", "php", "rb",
    "go", "rs", "c", "h", "cpp", "hpp", "cs", "html", "css", "scss",
    "sql", "sh", "json", "yaml", "yml", "xml", "properties", "toml", "env", "txt",
  ]),
});

export const REPOSITORY_SECURITY_RULES = Object.freeze([
  {
    id: "private-key", title: "Private key header", severity: "critical", deduction: 30,
    pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    explanation: "A private-key header appears in this file. Remove the key, rotate it, and use a secure secret store.",
  },
  {
    id: "aws-key", title: "Possible AWS access key", severity: "critical", deduction: 25,
    pattern: /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
    explanation: "The line resembles an AWS access-key identifier. Rotate and remove it if confirmed.",
  },
  {
    id: "github-token", title: "Possible GitHub token", severity: "critical", deduction: 25,
    pattern: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,255}\b/,
    explanation: "The line resembles a GitHub access token. Revoke and remove it if confirmed.",
  },
  {
    id: "stripe-secret", title: "Possible Stripe secret key", severity: "critical", deduction: 25,
    pattern: /\bsk_(?:live|test)_[A-Za-z0-9]{16,}\b/,
    explanation: "The line resembles a Stripe secret key. Rotate and remove it if confirmed.",
  },
  {
    id: "hardcoded-secret", title: "Possible hard-coded credential", severity: "high", deduction: 12,
    pattern: /\b(?:password|passwd|secret|api[_-]?key|access[_-]?token)\s*[:=]\s*["'][^"'\s]{8,}["']/i,
    explanation: "A credential-like value may be hard-coded. Move confirmed secrets to protected configuration.",
  },
  {
    id: "child-process", title: "Node.js command execution", severity: "high", deduction: 10,
    pattern: /\b(?:child_process|execSync|spawnSync|execFileSync|childProcess\.(?:exec|spawn|execFile))\b/,
    explanation: "The code can execute an operating-system command. Validate all inputs and avoid shell interpretation.",
  },
  {
    id: "python-shell", title: "Python shell execution", severity: "high", deduction: 10,
    pattern: /\b(?:os\.system|subprocess\.(?:run|Popen|call|check_output|check_call))\s*\(/,
    explanation: "Python code launches an operating-system process. Avoid shell mode and validate command arguments.",
  },
  {
    id: "disabled-tls", title: "TLS verification may be disabled", severity: "high", deduction: 12,
    pattern: /(?:rejectUnauthorized\s*:\s*false|verify\s*=\s*false|NODE_TLS_REJECT_UNAUTHORIZED\s*=\s*["']?0)/i,
    explanation: "Certificate verification appears to be disabled, which can expose traffic to interception.",
  },
  {
    id: "sql-interpolation", title: "Possible interpolated SQL query", severity: "high", deduction: 12,
    pattern: /\b(?:SELECT|INSERT|UPDATE|DELETE)\b.{0,160}(?:\$\{|\+\s*[A-Za-z_$]|%\s*\(|\.format\s*\(|f["'])/i,
    explanation: "A SQL statement appears to include string interpolation. Use parameterized queries instead.",
  },
  {
    id: "eval", title: "Dynamic code execution", severity: "medium", deduction: 8,
    pattern: /\beval\s*\(/,
    explanation: "eval() executes text as code and can become unsafe when input is not fully controlled.",
  },
  {
    id: "function-constructor", title: "JavaScript Function constructor", severity: "medium", deduction: 8,
    pattern: /\bnew\s+Function\s*\(/,
    explanation: "The Function constructor performs dynamic code execution and requires careful input control.",
  },
  {
    id: "dangerous-html", title: "Raw HTML insertion", severity: "medium", deduction: 6,
    pattern: /\bdangerouslySetInnerHTML\b/,
    explanation: "Raw HTML insertion can create an XSS risk unless the content is trusted and sanitized.",
  },
  {
    id: "document-write", title: "document.write() usage", severity: "medium", deduction: 5,
    pattern: /\bdocument\.write\s*\(/,
    explanation: "document.write() can introduce unsafe markup and disrupt page rendering.",
  },
  {
    id: "weak-hash", title: "Weak hashing algorithm", severity: "medium", deduction: 5,
    pattern: /(?:\b(?:md5|sha1)\s*\(|createHash\s*\(\s*["'](?:md5|sha-?1)["'])/i,
    explanation: "MD5 or SHA-1 may be inappropriate for security-sensitive hashing.",
  },
  {
    id: "environment-secret", title: "Possible secret in environment file", severity: "medium", deduction: 8,
    pattern: /^(?!\s*#)\s*[A-Z0-9_]*(?:PASSWORD|PASSWD|SECRET|TOKEN|API_KEY|PRIVATE_KEY)[A-Z0-9_]*\s*=\s*\S+/i,
    extensions: ["env"],
    explanation: "An environment file contains a secret-like assignment. Confirm the file is excluded from source control.",
  },
  {
    id: "insecure-http", title: "Insecure HTTP URL", severity: "low", deduction: 3,
    pattern: /http:\/\/(?!localhost(?:[:/]|$)|127\.0\.0\.1(?:[:/]|$))/i,
    explanation: "An unencrypted HTTP URL appears in the source. Prefer HTTPS where the destination supports it.",
  },
]);

const SEVERITY_ORDER = { critical: 0, high: 1, medium: 2, low: 3 };

function getFilePath(file) {
  return (file.relativePath || file.webkitRelativePath || file.name || "Unnamed file").replaceAll("\\", "/");
}

function getExtension(filename) {
  const normalizedName = filename.toLowerCase();
  if (normalizedName === ".env" || normalizedName.startsWith(".env.")) return "env";
  const dotIndex = normalizedName.lastIndexOf(".");
  return dotIndex >= 0 ? normalizedName.slice(dotIndex + 1) : "";
}

export function getRepositoryFileSkipReason(file) {
  const path = getFilePath(file);
  const segments = path.split("/");
  const normalizedName = (file.name || segments.at(-1) || "").toLowerCase();

  if (segments.some((segment) => REPOSITORY_SCAN_CONFIG.ignoredDirectories.includes(segment))) return "Ignored directory";
  if (REPOSITORY_SCAN_CONFIG.ignoredFiles.includes(normalizedName) || REPOSITORY_SCAN_CONFIG.generatedFilePatterns.some((pattern) => pattern.test(normalizedName))) return "Generated or lock file";
  if (file.size > REPOSITORY_SCAN_CONFIG.maxFileSize) return "File is larger than 2 MB";
  if (!REPOSITORY_SCAN_CONFIG.supportedExtensions.has(getExtension(normalizedName))) return "Unsupported or binary file type";
  return null;
}

function getRiskLevel(score) {
  if (score >= 80) return "Low Risk";
  if (score >= 50) return "Medium Risk";
  return "High Risk";
}

function getRecommendation(score) {
  if (score >= 80) return "Review the reported items before deployment and confirm any possible secrets are not committed.";
  if (score >= 50) return "Resolve critical and high-severity findings, then manually review the affected files before deployment.";
  return "Do not treat this repository as production-ready until critical and high-severity findings are resolved and secrets are rotated.";
}

/** Analyze selected browser File objects locally. File contents never leave the device. */
export async function scanRepository(fileList, onProgress) {
  const allFiles = Array.from(fileList || []).sort((a, b) => getFilePath(a).localeCompare(getFilePath(b)));
  const selectedFiles = allFiles.slice(0, REPOSITORY_SCAN_CONFIG.maxFiles);
  const overflowFiles = allFiles.slice(REPOSITORY_SCAN_CONFIG.maxFiles);
  const findings = [];
  const skippedFiles = overflowFiles.map((file) => ({ path: getFilePath(file), reason: "The 500-file scanning limit was reached" }));
  let scannedFileCount = 0;
  let totalReadSize = 0;

  if (selectedFiles.length === 0) onProgress?.(0, 0);

  for (let index = 0; index < selectedFiles.length; index += 1) {
    const file = selectedFiles[index];
    const path = getFilePath(file);
    const extension = getExtension(file.name || path);
    const skipReason = getRepositoryFileSkipReason(file);

    if (skipReason) {
      skippedFiles.push({ path, reason: skipReason });
      onProgress?.(index + 1, selectedFiles.length);
      continue;
    }

    if (totalReadSize + file.size > REPOSITORY_SCAN_CONFIG.maxTotalSize) {
      skippedFiles.push({ path, reason: "The 20 MB total readable-content limit was reached" });
      onProgress?.(index + 1, selectedFiles.length);
      continue;
    }

    let content;
    try {
      content = await file.text();
    } catch {
      skippedFiles.push({ path, reason: "The browser could not read this file" });
      onProgress?.(index + 1, selectedFiles.length);
      continue;
    }

    totalReadSize += file.size;
    scannedFileCount += 1;
    const lines = content.split(/\r?\n/);

    lines.forEach((line, lineIndex) => {
      REPOSITORY_SECURITY_RULES.forEach((rule) => {
        if (rule.extensions && !rule.extensions.includes(extension)) return;
        if (!rule.pattern.test(line)) return;
        findings.push({
          ruleId: rule.id,
          title: rule.title,
          severity: rule.severity,
          deduction: rule.deduction,
          path,
          line: lineIndex + 1,
          explanation: rule.explanation,
        });
      });
    });

    onProgress?.(index + 1, selectedFiles.length);
  }

  findings.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] || a.path.localeCompare(b.path) || a.line - b.line || a.ruleId.localeCompare(b.ruleId));

  // Score each kind of risk once. Repeated lines still appear in the findings count,
  // but cannot force every non-empty repository to the same clamped-zero score.
  const triggeredRules = new Map();
  findings.forEach((finding) => triggeredRules.set(finding.ruleId, finding.deduction));
  const totalDeduction = [...triggeredRules.values()].reduce((total, deduction) => total + deduction, 0);
  const score = Math.max(0, Math.min(100, 100 - totalDeduction));
  const severityCounts = findings.reduce((counts, finding) => {
    counts[finding.severity] += 1;
    return counts;
  }, { critical: 0, high: 0, medium: 0, low: 0 });
  const valid = scannedFileCount > 0;

  return {
    valid,
    error: valid ? null : allFiles.length ? "No supported text or source-code files could be analyzed." : "Select a local repository folder first.",
    score,
    riskLevel: getRiskLevel(score),
    selectedFileCount: allFiles.length,
    consideredFileCount: selectedFiles.length,
    scannedFileCount,
    skippedFileCount: skippedFiles.length,
    totalFindingCount: findings.length,
    totalReadSize,
    severityCounts,
    findings,
    skippedFiles,
    recommendation: getRecommendation(score),
    limitations: "Static pattern matching can miss context-dependent issues and produce false positives. It does not execute code, inspect binaries, resolve dependencies, query vulnerability databases, or analyze files beyond the configured limits.",
  };
}
