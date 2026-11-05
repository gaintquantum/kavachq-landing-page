"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  ChevronDown,
  CircleAlert,
  Github,
  RotateCcw,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { scanGitHubRepository } from "@/lib/githubRepositoryScanner";

const heroEase = [0.22, 1, 0.36, 1];
const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: heroEase } },
};

const RISK_STYLES = {
  "Low Risk": {
    stroke: "#059669",
    text: "text-emerald-700",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-800",
    icon: ShieldCheck,
  },
  "Medium Risk": {
    stroke: "#d97706",
    text: "text-amber-700",
    badge: "border-amber-200 bg-amber-50 text-amber-800",
    icon: AlertTriangle,
  },
  "High Risk": {
    stroke: "#dc2626",
    text: "text-red-700",
    badge: "border-red-200 bg-red-50 text-red-800",
    icon: CircleAlert,
  },
};

const SEVERITY_STYLES = {
  critical: "border-red-200 bg-red-50 text-red-800",
  high: "border-orange-200 bg-orange-50 text-orange-800",
  medium: "border-amber-200 bg-amber-50 text-amber-800",
  low: "border-blue-200 bg-blue-50 text-blue-800",
};
const SEVERITIES = ["critical", "high", "medium", "low"];

function ScoreRing({ score, riskLevel }) {
  const { stroke, text } = RISK_STYLES[riskLevel];
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const [displayedScore, setDisplayedScore] = useState(0);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setDisplayedScore(score));
    return () => cancelAnimationFrame(frame);
  }, [score]);
  return (
    <div
      className="relative mx-auto size-36"
      role="img"
      aria-label={`${riskLevel}: ${score} out of 100`}
    >
      <svg
        viewBox="0 0 160 160"
        className="size-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="10"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - displayedScore / 100)}
          className="transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-black tracking-tight ${text}`}>
          {score}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
          out of 100
        </span>
      </div>
    </div>
  );
}

function RiskBadge({ riskLevel }) {
  const style = RISK_STYLES[riskLevel];
  const Icon = style.icon;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-black ${style.badge}`}
    >
      <Icon className="size-4" aria-hidden="true" />
      {riskLevel}
    </span>
  );
}

function Disclaimer({ children }) {
  return (
    <div className="mt-4 rounded-xl border border-slate-300 bg-slate-50 p-3">
      <p className="flex gap-2.5 text-xs leading-5 text-ink-soft">
        <CircleAlert
          className="mt-0.5 size-4 shrink-0 text-slate-600"
          aria-hidden="true"
        />
        <span>
          <strong className="text-ink">Important:</strong> {children}
        </span>
      </p>
    </div>
  );
}

function LoadingState({ title, description, progress }) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center p-6 text-center">
      <div className="relative flex size-16 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700">
        <span
          className="absolute inset-0 animate-ping rounded-full bg-cyan-200/50 motion-reduce:hidden"
          aria-hidden="true"
        />
        <ScanSearch
          className="relative size-7"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 text-lg font-black text-ink">{title}</h3>
      <p className="mt-1.5 max-w-md text-sm leading-5 text-ink-muted">
        {description}
      </p>
      {progress !== null && (
        <div className="mt-4 w-full max-w-md">
          <div className="flex justify-between text-xs font-bold text-ink-muted">
            <span>Processing files</span>
            <span>{progress}%</span>
          </div>
          <div
            className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={progress}
            aria-label="Repository scan progress"
          >
            <div
              className="h-full rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 transition-[width] duration-200 motion-reduce:transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ResetButton({ onClick, label }) {
  return (
    <div className="mt-4 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-ink shadow-sm transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        {label}
      </button>
    </div>
  );
}

function RepositoryScannerPanel() {
  const inputId = useId();
  const inputRef = useRef(null);
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [status, setStatus] = useState("initial");
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const handleScan = async (event) => {
    event.preventDefault();
    setError("");
    setResult(null);
    setProgress(0);
    setPhase("Reading repository details");
    setStatus("scanning");
    try {
      const scanResult = await scanGitHubRepository(
        repositoryUrl,
        ({ percent, phase: nextPhase }) => {
          setProgress(percent);
          setPhase(nextPhase);
        },
      );
      if (!scanResult.valid) {
        setError(scanResult.error);
        setStatus("invalid");
        return;
      }
      setResult(scanResult);
      setProgress(100);
      setStatus("complete");
    } catch (scanError) {
      setError(
        scanError instanceof Error
          ? scanError.message
          : "The public repository could not be scanned.",
      );
      setStatus("invalid");
    }
  };
  const reset = () => {
    setRepositoryUrl("");
    setResult(null);
    setError("");
    setProgress(0);
    setPhase("");
    setStatus("initial");
    requestAnimationFrame(() => inputRef.current?.focus());
  };
  return (
    <div>
      {(status === "initial" || status === "invalid") && (
        <div className="p-4 sm:p-6">
          <form onSubmit={handleScan} noValidate>
            <label htmlFor={inputId} className="text-sm font-black text-ink">
Scan Your Organization's GitHub Repository            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Github
                  className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  ref={inputRef}
                  id={inputId}
                  type="url"
                  inputMode="url"
                  autoComplete="url"
                  spellCheck="false"
                  value={repositoryUrl}
                  onChange={(event) => {
                    setRepositoryUrl(event.target.value);
                    if (status === "invalid") {
                      setStatus("initial");
                      setError("");
                    }
                  }}
                  placeholder="https://github.com/owner/repository.git"
                  aria-invalid={status === "invalid"}
                  aria-describedby={`${inputId}-help${error ? ` ${inputId}-error` : ""}`}
                  className="repository-url-input h-13 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-base text-ink shadow-sm outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                disabled={!repositoryUrl.trim()}
                className="scanner-submit relative isolate inline-flex h-13 min-w-48 items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-6 text-sm font-black text-white shadow-[0_10px_24px_rgba(47,111,218,0.24)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed motion-reduce:transform-none"
              >
                <ScanSearch className="relative z-10 size-5" aria-hidden="true" />
                <span className="relative z-10">Scan repository</span>
              </button>
            </div>
            <p
              id={`${inputId}-help`}
              className="mt-2 text-xs leading-5 text-ink-muted"
            >
              Example: https://github.com/juice-shop/juice-shop.git · Public
              GitHub repositories only
            </p>
          </form>
          {error && (
            <p
              id={`${inputId}-error`}
              role="alert"
              className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-800"
            >
              <CircleAlert className="size-4.5 shrink-0" aria-hidden="true" />
              {error}
            </p>
          )}
          <p className="mt-3 text-center text-[11px] leading-4 text-ink-muted">
            Supported public text files only · 500 files · 2 MB/file · 20 MB
            total
          </p>
        </div>
      )}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {status === "scanning" &&
          `Repository analysis in progress, ${progress} percent complete.`}
        {status === "complete" &&
          result &&
          `Repository analysis complete. ${result.riskLevel}, ${result.score} out of 100, ${result.totalFindingCount} findings.`}
      </div>
      {status === "scanning" && (
        <LoadingState
          title={phase || "Reading public repository"}
          description="Supported source files are downloaded from GitHub and analyzed in your browser. No code is sent to a security service."
          progress={progress}
        />
      )}
      {status === "complete" && result && (
        <RepositoryResults result={result} onReset={reset} />
      )}
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-line bg-slate-50 p-3 text-center">
      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">
        {label}
      </dt>
      <dd className="mt-0.5 text-2xl font-black text-ink">{value}</dd>
    </div>
  );
}

function RepositoryResults({ result, onReset }) {
  return (
    <div className="p-4 sm:p-6">
      <div className="grid items-center gap-5 lg:grid-cols-[10rem_1fr]">
        <ScoreRing score={result.score} riskLevel={result.riskLevel} />
        <div>
          <RiskBadge riskLevel={result.riskLevel} />
          <h3 className="mt-3 text-xl font-black tracking-tight text-ink">
            Repository pattern analysis complete
          </h3>
          <p className="mt-1.5 break-all font-mono text-[11px] text-ink-muted">
            {result.repository.normalizedUrl} · {result.defaultBranch}
          </p>
          <dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Metric label="Files found" value={result.selectedFileCount} />
            <Metric label="Scanned" value={result.scannedFileCount} />
            <Metric label="Skipped" value={result.skippedFileCount} />
            <Metric label="Findings" value={result.totalFindingCount} />
          </dl>
          <p className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm leading-5 text-blue-950">
            <strong>Recommendation:</strong> {result.recommendation}
          </p>
        </div>
      </div>
      <section
        aria-labelledby="severity-summary-heading"
        className="mt-4 rounded-xl border border-line bg-white p-4"
      >
        <h3
          id="severity-summary-heading"
          className="text-base font-black text-ink"
        >
          Findings by severity
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {SEVERITIES.map((severity) => (
            <div
              key={severity}
              className={`rounded-lg border px-3 py-2 ${SEVERITY_STYLES[severity]}`}
            >
              <p className="text-xl font-black">
                {result.severityCounts[severity]}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em]">
                {severity}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="findings-heading"
        className="mt-3 rounded-xl border border-line bg-white p-4"
      >
        <h3 id="findings-heading" className="text-base font-black text-ink">
          Security findings
        </h3>
        {result.findings.length === 0 && (
          <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm font-semibold leading-5 text-emerald-900">
            No configured warning patterns were detected in the files that were
            scanned.
          </p>
        )}
        <div className="mt-3 space-y-2">
          {SEVERITIES.map((severity) => {
            const findings = result.findings.filter(
              (finding) => finding.severity === severity,
            );
            if (!findings.length) return null;
            return (
              <details
                key={severity}
                className="group rounded-lg border border-line bg-slate-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                  <span className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-black uppercase ${SEVERITY_STYLES[severity]}`}
                    >
                      {severity}
                    </span>
                    <span className="text-sm font-bold text-ink">
                      {findings.length} finding
                      {findings.length === 1 ? "" : "s"}
                    </span>
                  </span>
                  <ChevronDown
                    className="size-4 text-slate-500 transition group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </summary>
                <ul className="max-h-96 space-y-2 overflow-auto border-t border-line p-3">
                  {findings.map((finding, index) => (
                    <li
                      key={`${finding.ruleId}-${finding.path}-${finding.line}-${index}`}
                      className="rounded-lg border border-line bg-white p-3"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-sm font-bold text-ink">
                          {finding.title}
                        </p>
                        <span className="text-[11px] font-black text-red-700">
                          −{finding.deduction} once/scan
                        </span>
                      </div>
                      <p className="mt-1.5 break-all font-mono text-[11px] text-ink-soft">
                        {finding.path} · line {finding.line}
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-ink-muted">
                        {finding.explanation}
                      </p>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
      </section>
      <section
        aria-labelledby="skipped-heading"
        className="mt-3 rounded-xl border border-line bg-white p-4"
      >
        <h3 id="skipped-heading" className="text-base font-black text-ink">
          Skipped files
        </h3>
        {result.skippedFiles.length === 0 ? (
          <p className="mt-2 text-xs text-ink-muted">
            No selected files were skipped.
          </p>
        ) : (
          <details className="group mt-2 rounded-lg border border-line bg-slate-50">
            <summary className="flex cursor-pointer list-none items-center justify-between p-3 text-sm font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              View {result.skippedFiles.length} files and reasons
              <ChevronDown
                className="size-4 transition group-open:rotate-180 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </summary>
            <ul className="max-h-64 space-y-1.5 overflow-auto border-t border-line p-3">
              {result.skippedFiles.map((file, index) => (
                <li key={`${file.path}-${index}`} className="text-xs">
                  <span className="break-all font-mono text-[11px] text-ink">
                    {file.path}
                  </span>
                  <span className="ml-2 text-ink-muted">— {file.reason}</span>
                </li>
              ))}
            </ul>
          </details>
        )}
      </section>
      <details className="group mt-3 rounded-xl border border-amber-200 bg-amber-50">
        <summary className="flex cursor-pointer list-none items-center justify-between p-3 text-sm font-black text-amber-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          Scan limitations
          <ChevronDown
            className="size-4 transition group-open:rotate-180 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </summary>
        <p className="border-t border-amber-200 px-3 py-2.5 text-xs leading-5 text-amber-900">
          {result.limitations}
        </p>
      </details>
      <Disclaimer>
        This is a browser-based static analysis of public text files downloaded
        directly from GitHub. It may produce false positives and does not
        guarantee that the repository is secure. Files are analyzed locally and
        are not sent to a security service.
      </Disclaimer>
      <ResetButton onClick={onReset} label="Scan another repository" />
    </div>
  );
}

function ScannerHeroMessaging() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.header
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
      }}
      className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/15 bg-[#06111f] px-5 py-8 text-center font-[Inter] shadow-[0_22px_60px_rgba(2,12,27,0.22)] sm:px-8 sm:py-10 lg:px-12 lg:py-11"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_86%_8%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[auto,auto,34px_34px,34px_34px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl">
        <motion.p
          variants={heroItem}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs sm:tracking-[0.25em]"
        >
          KAVACH-Q | POST-QUANTUM CYBERSECURITY
        </motion.p>
        <motion.h2
          variants={heroItem}
          id="repository-scanner-heading"
          className="mt-3 text-balance font-[Inter]! text-[clamp(2.25rem,7vw,5rem)] font-black leading-[0.98] tracking-[-0.045em] text-white"
        >
          Is Your Organization{" "}
          <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Quantum-Safe?
          </span>
        </motion.h2>
        <motion.h2
          variants={heroItem}
          className="mx-auto mt-4 max-w-4xl text-balance font-[Inter]! text-lg font-medium leading-snug text-slate-100 sm:text-xl lg:text-2xl"
        >
          Don&apos;t Let Tomorrow&apos;s Quantum Computers Break Today&apos;s
          Security.
        </motion.h2>
        <motion.p
          variants={heroItem}
          className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7"
        >
          Discover cryptographic vulnerabilities, assess quantum risks, and
          prepare your organization for the post-quantum era with KAVACH-Q.
        </motion.p>
      </div>
    </motion.header>
  );
}

export default function RepositoryRiskScanner() {
  return (
    <section
      id="repository-risk-scanner"
      aria-labelledby="repository-scanner-heading"
      data-native
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 px-4 py-10 text-slate-950 sm:px-8 lg:px-10 lg:py-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_92%_20%,rgba(99,102,241,0.11),transparent_28%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-300">
        <ScannerHeroMessaging />
        <div className="mx-auto mt-4 max-w-5xl overflow-hidden rounded-panel border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.09)]">
          <RepositoryScannerPanel />
        </div>
      </div>
    </section>
  );
}
