// import React, { useEffect, useState } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";
"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
export default function ScrollNavigatorButton() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );

      setAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
    );

    if (atBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: documentHeight,
        behavior: "smooth",
      });
    }
  };

  return (
      <button
        type="button"
        aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
        onClick={handleClick}
        className="
  fixed
  bottom-[max(6.25rem,calc(env(safe-area-inset-bottom)+6.25rem))]
  right-[max(1.5rem,env(safe-area-inset-right))]
  z-40
  hidden
  h-12
  w-12
  items-center
  justify-center
  rounded-full
  border
  border-slate-200
  bg-white/95
  text-slate-700
  shadow-[0_10px_30px_rgba(15,23,42,0.12)]
  transition-all
  duration-300
  hover:-translate-y-0.5
  hover:border-blue-200
  hover:text-blue-700
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[#4285F4]
  focus-visible:ring-offset-2
  motion-reduce:transform-none
  sm:inline-flex
"
      >
        {atBottom ? (
          <ChevronUp size={26} strokeWidth={2.5} />
        ) : (
          <ChevronDown size={26} strokeWidth={2.5} />
        )}
      </button>
  );
}
