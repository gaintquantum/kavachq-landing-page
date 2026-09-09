"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, House, X } from "lucide-react";
import Logo from "@/public/KAVACH-Q logo with TM.png";

import { getBotStep } from "./botLogic";

export default function Bot() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("welcome");
  const [history, setHistory] = useState([]);

  const current = getBotStep(currentStep);

  // =========================================================
  // GO TO NEXT STEP
  // =========================================================

  function handleNext(next) {
    if (!next) return;

    setHistory((prev) => [...prev, currentStep]);
    setCurrentStep(next);
  }

  // =========================================================
  // GO BACK
  // =========================================================

  function handleBack() {
    if (history.length === 0) return;

    const previousStep = history[history.length - 1];

    setCurrentStep(previousStep);

    setHistory((prev) => prev.slice(0, -1));
  }

  // =========================================================
  // RETURN TO MAIN MENU
  // =========================================================

  function handleHome() {
    setCurrentStep("welcome");
    setHistory([]);
  }

  return (
    <>
      {/* ===================================================== */}
      {/* FLOATING BOT BUTTON                                   */}
      {/* ===================================================== */}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open KAVACH-Q Assistant"
          title="KAVACH-Q Assistant"
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-15
            w-15
            items-center
            justify-center
            rounded-full
            border
            border-cyan-300/30
            bg-linear-to-br
            from-[#055085]
            to-[#17a0ca]
            text-white
            shadow-[0_10px_35px_rgba(5,80,133,0.38)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          <Image src={Logo} alt="KAVACH-Q Logo" className="h-10 w-10" />

          {/* Online indicator */}
          <span
            className="
              absolute
              bottom-1
              right-1
              h-3.5
              w-3.5
              rounded-full
              border-2
              border-white
              bg-emerald-500
            "
          />
        </button>
      )}

      {/* ===================================================== */}
      {/* BOT WINDOW                                            */}
      {/* ===================================================== */}

      {open && (
        <section
          className="
            fixed
            bottom-5
            right-5
            z-50
            flex
            h-140
            w-97.5
            max-h-[calc(100vh-40px)]
            max-w-[calc(100vw-24px)]
            flex-col
            overflow-hidden
            rounded-[26px]
            border
            border-slate-200
            bg-[#f8fafc]
            shadow-[0_25px_80px_rgba(15,23,42,0.25)]

            max-sm:bottom-3
            max-sm:right-3
            max-sm:h-[calc(100vh-24px)]
            max-sm:w-[calc(100vw-24px)]
            max-sm:rounded-[22px]
          "
        >
          {/* ================================================= */}
          {/* HEADER                                            */}
          {/* ================================================= */}

          <header
            className="
              flex
              h-18
              shrink-0
              items-center
              justify-between
              bg-linear-to-r
              from-[#055085]
              via-[#087ba7]
              to-[#17a0ca]
              px-4
              text-white
            "
          >
            {/* Bot identity */}

            <div className="flex items-center gap-3">
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                "
              >
                <Image src={Logo} alt="KAVACH-Q Logo" className="h-10 w-10" />

                {/* Online indicator */}
                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-[#087ba7]
                    bg-emerald-400
                  "
                />
              </div>

              <div>
                <p className="text-sm font-semibold">KAVACH-Q Assistant</p>

                <p className="mt-0.5 text-[11px] text-cyan-50/80">
                  Quantum Security Guide
                </p>
              </div>
            </div>

            {/* ONLY HEADER BUTTON */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close KAVACH-Q Assistant"
              title="Close"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                text-white/80
                transition-all
                duration-200
                hover:bg-white/15
                hover:text-white
              "
            >
              <X size={20} />
            </button>
          </header>

          {/* ================================================= */}
          {/* CONTENT                                           */}
          {/* ================================================= */}

          <div className="flex-1 overflow-y-auto p-5">
            {/* ================================================= */}
            {/* CURRENT BOT RESPONSE                              */}
            {/* ================================================= */}

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >
              {/* Small KAVACH-Q logo */}

              <div
                className="
                  mb-3
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-50
                  text-[#087ba7]
                "
              >
                <Image src={Logo} alt="KAVACH-Q Logo" className="h-10 w-10" />
              </div>

              {/* Label */}

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-700
                "
              >
                KAVACH-Q
              </p>

              {/* Title */}

              <h3
                className="
                  mt-2
                  text-base
                  font-semibold
                  text-[#123b63]
                "
              >
                {current.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-3
                  whitespace-pre-line
                  text-sm
                  leading-7
                  text-slate-600
                "
              >
                {current.message}
              </p>
            </div>

            {/* ================================================= */}
            {/* PREDEFINED OPTIONS                                */}
            {/* ================================================= */}

            <div className="mt-4 space-y-2">
              {current.options?.map((option) => {
                // =============================================
                // LINK OPTION
                // =============================================

                if (option.href) {
                  return (
                    <Link
                      key={option.label}
                      href={option.href}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-left
                        text-sm
                        font-medium
                        text-[#153f63]
                        shadow-sm
                        transition-all
                        duration-200
                        hover:border-cyan-300
                        hover:bg-cyan-50
                        hover:text-[#055085]
                      "
                    >
                      <span>{option.label}</span>

                      <ArrowRight
                        size={17}
                        className="shrink-0 text-cyan-600"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                }

                // =============================================
                // BOT NAVIGATION OPTION
                // =============================================

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleNext(option.next)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-medium
                      text-[#153f63]
                      shadow-sm
                      transition-all
                      duration-200
                      hover:border-cyan-300
                      hover:bg-cyan-50
                      hover:text-[#055085]
                    "
                  >
                    <span>{option.label}</span>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-cyan-600"
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================= */}
          {/* BOTTOM NAVIGATION                                 */}
          {/* Hidden when already on welcome screen             */}
          {/* ================================================= */}

          {currentStep !== "welcome" && (
            <footer
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-t
                border-slate-200
                bg-white
                px-4
                py-3
              "
            >
              {/* BACK */}

              <button
                type="button"
                onClick={handleBack}
                disabled={history.length === 0}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-slate-500
                  transition-colors
                  duration-200
                  hover:text-[#055085]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ArrowLeft size={15} />
                Back
              </button>

              {/* MAIN MENU */}

              <button
                type="button"
                onClick={handleHome}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  font-medium
                  text-[#087ba7]
                  transition-colors
                  duration-200
                  hover:text-[#055085]
                "
              >
                <House size={14} aria-hidden="true" />
                Main Menu
              </button>
            </footer>
          )}
        </section>
      )}
    </>
  );
}
