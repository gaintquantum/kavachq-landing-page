import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function KavachQLogo3D() {
  return (
    <a
      href="/"
      aria-label="KAVACH-Q Home"
      className="inline-flex max-w-full items-start no-underline"
    >
      <span
        className={`${michroma.className} whitespace-nowrap text-[clamp(1.75rem,5vw,3.5rem)] font-normal uppercase leading-none text-white sm:tracking-widest`}
      >
        KAVACH-
        <span className="relative inline-block text-cyan-200">
          Q
          <sup className="absolute -right-3 -top-1 text-[8px] tracking-normal text-cyan-100 sm:-right-4 sm:text-[10px]">
            ™
          </sup>
        </span>
      </span>
    </a>
  );
}
