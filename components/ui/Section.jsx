import { Reveal } from "@/components/ui/Reveal";
const widths = { default: "max-w-310", wide: "max-w-330" };
// Standard section shell: consistent gutters, vertical rhythm, nav offset and content width.
export function Section({ id, labelledBy, width = "default", className = "", innerClassName = "", children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 lg:px-10 lg:py-20 ${className}`}>
      <div className={`relative mx-auto w-full ${widths[width]} ${innerClassName}`}>{children}</div>
    </section>
  );
}
export function Eyebrow({ children, variant = "pill", className = "" }) {
  if (variant === "line") return (
    <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 ${className}`}>
      <span className="h-px w-6 bg-cyan-500" aria-hidden="true" />{children}
    </p>
  );
  return (
    <p className={`inline-flex items-center gap-2.5 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-800 ${className}`}>
      <span className="relative flex size-2" aria-hidden="true"><span className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan-400" /><span className="relative size-2 rounded-full bg-cyan-500" /></span>{children}
    </p>
  );
}
// Eyebrow + heading (+ optional gradient accent line) + lead paragraph, revealed on scroll.
export function SectionHeader({ id, eyebrow, eyebrowVariant, title, accent, description, align = "center", size = "title", className = "", children }) {
  const centered = align === "center";
  return (
    <Reveal as="header" className={`${centered ? "mx-auto max-w-5xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && <Eyebrow variant={eyebrowVariant ?? (centered ? "pill" : "line")}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={`${eyebrow ? "mt-4" : ""} text-balance ${size === "display" ? "text-display" : "text-title"} font-black tracking-tight text-ink`}>
        {title}{accent && <span className="text-gradient block">{accent}</span>}
      </h2>
      {description && <p className={`mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lead ${centered ? "mx-auto" : ""}`}>{description}</p>}
      {children}
    </Reveal>
  );
}
