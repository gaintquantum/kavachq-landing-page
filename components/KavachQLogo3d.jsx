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
        className="whitespace-nowrap bg-linear-to-r from-cyan-100 via-sky-300 to-emerald-200 bg-clip-text text-[clamp(1.75rem,5vw,3.5rem)] font-normal uppercase leading-none text-transparent sm:tracking-widest"
      >
        KAVACH-
        <span className="relative inline-block text-cyan-600">
          Q
          <sup className="absolute -right-3 -top-1 text-[12px] tracking-normal text-cyan-200 sm:-right-4 sm:text-[10px]">
            ™
          </sup>
        </span>
      </span>
    </a>
  );
}