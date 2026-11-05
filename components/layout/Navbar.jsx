"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { demoRequestHref } from "@/lib/demoRequest";

const navItems = [["Pipeline", "#pipeline"], ["Modules", "#modules"], ["QVS", "#qvs"], ["Compliance", "#compliance"], ["Deployment", "#deployment"] /* , ["Pricing", "/pricing"] */];
const sectionIds = navItems.filter(([, key]) => key.startsWith("#")).map(([, key]) => key.slice(1));
// Section links must also work from other routes, so "#pipeline" is rendered as "/#pipeline".
const toHref = (key) => (key.startsWith("#") ? `/${key}` : key);
const toKey = (href) => href?.replace(/^\/(?=#)/, "");

const KQ_CSS = `
.kq-nav { --kq-navy: 13, 34, 87; --kq-deep: 5, 11, 31; --kq-teal: 79, 195, 200; --kq-cyan: 0, 229, 255; font-family: var(--font-dm-sans), "DM Sans", ui-sans-serif, system-ui, sans-serif; }
.kq-nav a:focus-visible, .kq-nav button:focus-visible { outline: 2px solid #00E5FF; outline-offset: 2px; }

.kq-glass { background: linear-gradient(180deg, rgba(var(--kq-navy), .55), rgba(var(--kq-deep), .68)); -webkit-backdrop-filter: blur(18px) saturate(140%); backdrop-filter: blur(18px) saturate(140%); }
.kq-hairline { position: relative; border-radius: 1rem; }
.kq-hairline::before { content: ""; position: absolute; inset: 0; z-index: 2; padding: 1px; border-radius: inherit; pointer-events: none; background: linear-gradient(90deg, rgba(var(--kq-teal), .7), rgba(255, 255, 255, .1), rgba(255, 255, 255, .1), rgba(var(--kq-cyan), .7)); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0); }

.kq-bar { height: 64px; transition: height 500ms ease, box-shadow 500ms ease; }
/* Gradients can't interpolate, so the darker scrolled state fades in as an overlay. */
.kq-bar::after { content: ""; position: absolute; inset: 0; border-radius: inherit; opacity: 0; pointer-events: none; background: linear-gradient(180deg, rgba(var(--kq-navy), .9), rgba(var(--kq-deep), .92)); transition: opacity 500ms ease; }
.kq-nav[data-solid="true"] .kq-bar::after { opacity: 1; }
.kq-nav[data-scrolled="true"] .kq-bar { height: 56px; box-shadow: 0 10px 34px -12px rgba(var(--kq-cyan), .28); }
.kq-bar-inner { position: relative; z-index: 1; }

.kq-wordmark { font-family: var(--font-syne), "Syne", var(--font-dm-sans), sans-serif; font-weight: 700; font-size: 19px; line-height: 1.15; letter-spacing: .14em; color: #fff; }
/* DM Sans here because Syne's Q has a stem below the letter that reads like an underline. */
.kq-wordmark span { font-family: var(--font-dm-sans), "DM Sans", sans-serif; color: #00E5FF; }
.kq-tagline { font-family: var(--font-dm-mono), "DM Mono", ui-monospace, monospace; font-weight: 500; font-size: 10px; line-height: 1.3; letter-spacing: .28em; text-transform: uppercase; color: rgba(var(--kq-teal), .8); }

.kq-track { position: relative; background: rgba(255, 255, 255, .025); border: 1px solid rgba(255, 255, 255, .06); }
.kq-pill { position: absolute; top: 4px; bottom: 4px; left: 0; border-radius: .5rem; pointer-events: none; background: linear-gradient(135deg, rgba(var(--kq-teal), .2), rgba(var(--kq-cyan), .14)); box-shadow: inset 0 0 0 1px rgba(var(--kq-cyan), .28), 0 0 18px -4px rgba(var(--kq-cyan), .4); }
.kq-track[data-ready="true"] .kq-pill { transition: transform 380ms cubic-bezier(.2, .8, .2, 1), width 380ms cubic-bezier(.2, .8, .2, 1), opacity 240ms ease; }
.kq-link { position: relative; z-index: 1; color: rgba(203, 213, 225, .75); transition: color 200ms ease; }
.kq-link:hover, .kq-link:focus-visible, .kq-link[aria-current] { color: #fff; }
.kq-link[aria-current]::after { content: ""; position: absolute; left: 50%; bottom: 3px; width: 4px; height: 4px; margin-left: -2px; border-radius: 50%; background: #00E5FF; box-shadow: 0 0 8px 1px rgba(var(--kq-cyan), .8); }

.kq-ghost { color: rgba(203, 213, 225, .85); transition: color 200ms ease; }
.kq-ghost:hover { color: #fff; }

.kq-cta { position: relative; overflow: hidden; background: linear-gradient(135deg, #FF7A1A, #FF5A00); box-shadow: 0 0 0 1px rgba(255, 122, 26, .5), 0 8px 24px -6px rgba(255, 106, 0, .55); transition: transform 240ms ease, box-shadow 240ms ease; }
.kq-cta:hover { transform: translateY(-1px); box-shadow: 0 0 0 1px rgba(255, 122, 26, .75), 0 12px 32px -6px rgba(255, 106, 0, .8); }
.kq-cta > * { position: relative; z-index: 1; }
.kq-cta svg { transition: transform 240ms ease; }
.kq-cta:hover svg { transform: translateX(2px); }
/* No transition on the resting state, so the sweep only ever runs forward. */
.kq-cta::after { content: ""; position: absolute; top: -20%; bottom: -20%; left: 0; width: 34%; pointer-events: none; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .45), transparent); transform: translateX(-160%) skewX(-20deg); }
.kq-cta:hover::after { transform: translateX(420%) skewX(-20deg); transition: transform 700ms ease; }

.kq-scan { position: absolute; inset: 0; z-index: 1; overflow: hidden; border-radius: inherit; pointer-events: none; }
.kq-scan span { position: absolute; left: 0; bottom: 0; width: 28%; height: 1px; background: linear-gradient(90deg, transparent, #00E5FF, transparent); animation: kq-scan 6s linear infinite; }
@keyframes kq-scan { from { transform: translateX(-100%); } to { transform: translateX(358%); } }

.kq-burger { position: relative; background: rgba(255, 255, 255, .04); border: 1px solid rgba(255, 255, 255, .12); transition: background-color 200ms ease; }
.kq-burger:hover { background: rgba(255, 255, 255, .1); }
.kq-burger span { position: absolute; left: 10px; right: 10px; top: 50%; height: 2px; margin-top: -1px; border-radius: 2px; background: #fff; transition: transform 300ms cubic-bezier(.2, .8, .2, 1); }
.kq-burger span:first-child { transform: translateY(-4px); }
.kq-burger span:last-child { transform: translateY(4px); }
.kq-burger[aria-expanded="true"] span:first-child { transform: rotate(45deg); }
.kq-burger[aria-expanded="true"] span:last-child { transform: rotate(-45deg); }

.kq-panel { max-height: calc(100vh - 96px); overflow-y: auto; animation: kq-panel-in 220ms cubic-bezier(.2, .8, .2, 1); }
.kq-nav[data-solid="true"] .kq-panel { background: linear-gradient(180deg, rgba(var(--kq-navy), .9), rgba(var(--kq-deep), .92)); }
@keyframes kq-panel-in { from { opacity: 0; transform: translateY(-6px); } }
.kq-row { color: #e2e8f0; transition: background-color 200ms ease, color 200ms ease; }
.kq-row:hover, .kq-row[aria-current] { color: #fff; background: rgba(var(--kq-cyan), .08); }
.kq-row-index { font-family: var(--font-dm-mono), "DM Mono", ui-monospace, monospace; font-weight: 500; font-size: 13px; color: #4FC3C8; }

@media (prefers-reduced-motion: reduce) {
  .kq-nav, .kq-nav *, .kq-nav *::before, .kq-nav *::after { transition: none !important; animation: none !important; }
  .kq-scan { display: none; }
}
`;

// Tracks the section sitting in the middle band of the viewport.
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!enabled) return setActive(null);
    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
      const match = sectionIds.find((id) => visible.has(id));
      setActive(match ? `#${match}` : null);
    }, { rootMargin: "-40% 0px -55% 0px" });
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [enabled]);
  return active;
}

function DemoCta({ href, className = "", onClick }) {
  return (
    <a href={href} onClick={onClick} className={`kq-cta h-10 items-center justify-center gap-1.5 rounded-xl px-5 text-[15px] font-bold whitespace-nowrap text-white ${className}`}>
      <span>Request Demo</span>
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}

// logoSrc, demoHref and signInHref are optional. Without activeHref the active link follows the route and scroll position.
export default function Navbar({ logoSrc = "/kavachq-shield.png", activeHref, demoHref = demoRequestHref, signInHref }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });
  const [pillReady, setPillReady] = useState(false);
  const linkRefs = useRef({});
  const burgerRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(isHome);
  const routeKey = pathname === "/pricing" ? "/pricing" : isHome ? activeSection ?? "#pipeline" : null;
  const activeKey = toKey(activeHref) ?? routeKey;
  const pillKey = hovered ?? activeKey;

  const measurePill = useCallback(() => {
    const el = linkRefs.current[pillKey];
    if (el && !el.offsetWidth) return; // Track is hidden below lg; keep the last position.
    setPill((prev) => (el ? { left: el.offsetLeft, width: el.offsetWidth, visible: true } : { ...prev, visible: false }));
  }, [pillKey]);

  useEffect(() => {
    measurePill();
    window.addEventListener("resize", measurePill);
    // fonts.ready can resolve before a swapped font has started loading, so also listen for loadingdone.
    let cancelled = false;
    document.fonts?.ready.then(() => { if (!cancelled) measurePill(); });
    document.fonts?.addEventListener("loadingdone", measurePill);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", measurePill);
      document.fonts?.removeEventListener("loadingdone", measurePill);
    };
  }, [measurePill]);
  // Enable the slide only once the pill has painted in place, so it doesn't fly in from the left on load.
  useEffect(() => {
    if (!pill.visible || pillReady) return;
    let frame = requestAnimationFrame(() => { frame = requestAnimationFrame(() => setPillReady(true)); });
    return () => cancelAnimationFrame(frame);
  }, [pill.visible, pillReady]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);

  // Other routes start on a light background, where the translucent glass can't hold AA text contrast.
  const solid = scrolled || open || !isHome;
  const closeMenu = () => setOpen(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KQ_CSS }} />
      <header data-native className="kq-nav fixed inset-x-3 top-3 z-50 mx-auto max-w-7xl" data-scrolled={scrolled} data-solid={solid}>
        <div className="kq-bar kq-glass kq-hairline">
          <div className="kq-scan" aria-hidden="true"><span /></div>
          <div className="kq-bar-inner grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 sm:px-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] xl:grid-cols-[1fr_auto_1fr]">
            <Link href="/" aria-label="KAVACH-Q home" className="flex min-w-0 items-center gap-2.5 justify-self-start rounded-lg">
              <img src={logoSrc} alt="" width={36} height={36} className="size-9 shrink-0 object-contain" />
              <span className="flex min-w-0 flex-col whitespace-nowrap">
                <span className="kq-wordmark">KAVACH<span>-Q™</span></span>
                <span className="kq-tagline">Post-Quantum Migration</span>
              </span>
            </Link>

            <nav aria-label="Primary navigation" data-ready={pillReady} onMouseLeave={() => setHovered(null)} className="kq-track hidden items-center gap-0.5 justify-self-center rounded-xl p-1 lg:flex">
              <span className="kq-pill" aria-hidden="true" style={{ width: pill.width, transform: `translateX(${pill.left}px)`, opacity: pill.visible ? 1 : 0 }} />
              {navItems.map(([label, key]) => (
                <Link key={key} href={toHref(key)} ref={(el) => { linkRefs.current[key] = el; }} aria-current={activeKey === key ? "page" : undefined}
                  onMouseEnter={() => setHovered(key)} onFocus={() => setHovered(key)} onBlur={() => setHovered(null)}
                  className="kq-link rounded-lg px-2 py-2 text-[15px] font-bold whitespace-nowrap xl:px-3.5">
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 justify-self-end sm:gap-3">
              {signInHref && <a href={signInHref} className="kq-ghost hidden rounded-lg px-2 py-2 text-[15px] font-bold whitespace-nowrap sm:inline-block">Sign in</a>}
              <DemoCta href={demoHref} className="hidden sm:inline-flex" />
              <button type="button" ref={burgerRef} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="kq-mobile-nav" onClick={() => setOpen(!open)}
                className="kq-burger inline-flex size-10 shrink-0 rounded-xl lg:hidden">
                <span /><span />
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div id="kq-mobile-nav" className="kq-panel kq-glass kq-hairline mt-2 p-2 lg:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5">
              {navItems.map(([label, key], i) => (
                <Link key={key} href={toHref(key)} onClick={closeMenu} aria-current={activeKey === key ? "page" : undefined}
                  className="kq-row flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold">
                  {label}
                  <span className="kq-row-index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              ))}
            </nav>
            {signInHref && <a href={signInHref} onClick={closeMenu} className="kq-row mt-0.5 block rounded-xl px-4 py-3 text-base font-bold sm:hidden">Sign in</a>}
            <DemoCta href={demoHref} onClick={closeMenu} className="mt-2 flex w-full sm:hidden" />
          </div>
        )}
      </header>
    </>
  );
}
