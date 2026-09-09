export default function KavachQLogo3D() {
  return (
    <a
      href="/"
      aria-label="KAVACH-Q Home"
      className="inline-flex max-w-full items-start no-underline"
    >
      <span
        style={{
          fontFamily: 'Michroma, Futura, "Trebuchet MS", sans-serif',
        }}
        className="
          whitespace-nowrap
          bg-linear-to-r
          from-cyan-100
          via-sky-300
          to-emerald-200
          bg-clip-text
          text-[clamp(1.15rem,8vw,3.5rem)]
          font-normal
          uppercase
          leading-none
          tracking-[0.12em]
          text-transparent
          sm:tracking-[0.18em]
        "
      >
        KAVACH-
        <span className="relative inline-block text-cyan-600">
          Q
          <sup className="absolute -right-3 -top-1 text-[11px] tracking-normal text-cyan-200 sm:-right-4 sm:text-[10px]">
            ™
          </sup>
        </span>
      </span>
    </a>
  );
}