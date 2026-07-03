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
      const documentHeight = document.documentElement.scrollHeight;

      setAtBottom(
        scrollTop + windowHeight >= documentHeight - 100
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes floatY {
            0%,100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .float-y {
            animation: floatY 3s ease-in-out infinite;
          }
        `}
      </style>

      <button
        aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
        onClick={handleClick}
        className="
          float-y
          fixed
          bottom-8
          right-8
          z-999
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-[#081223]
          text-cyan-300
          shadow-[0_0_35px_rgba(0,212,255,0.25)]
          transition-all
          duration-300
          hover:bg-cyan-500
          hover:text-black
          hover:shadow-[0_0_45px_rgba(0,212,255,0.45)]
          max-sm:bottom-4
          max-sm:right-4
          max-sm:h-11
          max-sm:w-11
        "
      >
        {atBottom ? (
          <ChevronUp size={26} strokeWidth={2.5} />
        ) : (
          <ChevronDown size={26} strokeWidth={2.5} />
        )}
      </button>
    </>
  );
}
