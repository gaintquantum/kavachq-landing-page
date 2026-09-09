"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";

import { faqData } from "./faqData";
import { qnaCategories, qnaData } from "./questionnaireData";

export default function FAQPage() {
  const [openFaqId, setOpenFaqId] = useState(null);
  const [openQnaId, setOpenQnaId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredQna = useMemo(() => {
    if (activeCategory === "ALL") return qnaData;

    return qnaData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  function changeCategory(categoryId) {
    setActiveCategory(categoryId);
    setOpenQnaId(null);
  }

  return (
    <main className="min-h-screen bg-[#f3f7fa]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0b2742] px-5 pb-20 pt-8 text-white sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.12),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cyan-100/80 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to KAVACH-Q
          </Link>

          <div className="mx-auto mt-14 max-w-3xl text-center">
            <h1
              style={{
                fontFamily: 'Michroma, Futura, "Trebuchet MS", sans-serif',
              }}
              className="mt-4 bg-linear-to-r from-cyan-100 via-sky-300 to-emerald-200 bg-clip-text text-3xl leading-tight text-transparent sm:text-4xl lg:text-5xl"
            >
              FAQs & Sector Q&A
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore common questions about KAVACH-Q and sector-specific
              information for banking, BFSI, government, technical, and
              regulatory stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto -mt-8 grid max-w-7xl grid-cols-1 gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        {/* LEFT FAQ */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="mb-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
              General
            </p>

            <h2 className="mt-2 bg-linear-to-r from-cyan-700 via-sky-600 to-emerald-600 bg-clip-text text-xl font-semibold text-transparent">
              Frequently Asked Questions
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Core questions about KAVACH-Q, quantum security, and post-quantum
              cryptography.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <article
                  key={faq.id}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    isOpen
                      ? "border-cyan-300 bg-cyan-50/40"
                      : "border-slate-200 bg-[#f8fafc] hover:border-cyan-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <span className="text-sm font-medium leading-6 text-[#153f63]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-[#123b63] text-white"
                          : "bg-white text-[#123b63] shadow-sm"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-cyan-100 px-4 pb-5 pt-4 sm:px-5">
                        <p className="text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* RIGHT Q&A */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="mb-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
              Sector Specific
            </p>

            <h2 className="mt-2 bg-linear-to-r from-cyan-700 via-sky-600 to-emerald-600 bg-clip-text text-xl font-semibold text-transparent">
              Sector Q&A
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Select a sector to view relevant questions.
            </p>
          </div>

          {/* CATEGORY TABS */}
          <div className="mb-6 flex flex-wrap gap-2">
            {qnaCategories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => changeCategory(category.id)}
                  className={`rounded-full px-3.5 py-2 text-[10px] font-semibold transition-all ${
                    isActive
                      ? "bg-[#123b63] text-white shadow-sm"
                      : "border border-slate-200 bg-[#f8fafc] text-slate-500 hover:border-cyan-300 hover:text-[#123b63]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-3">
            {filteredQna.map((item) => {
              const isOpen = openQnaId === item.id;

              const category = qnaCategories.find(
                (cat) => cat.id === item.category,
              );

              return (
                <article
                  key={item.id}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    isOpen
                      ? "border-cyan-300 bg-cyan-50/40"
                      : "border-slate-200 bg-[#f8fafc] hover:border-cyan-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenQnaId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <div>
                      <span className="mb-1 inline-block text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                        {category?.label}
                      </span>

                      <p className="text-sm font-medium leading-6 text-[#153f63]">
                        {item.question}
                      </p>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-[#123b63] text-white"
                          : "bg-white text-[#123b63] shadow-sm"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-cyan-100 px-4 pb-5 pt-4 sm:px-5">
                        <p className="text-sm leading-7 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#123b63] px-6 py-8 text-white sm:flex-row sm:px-8">
          <div>
            <h2 className="bg-linear-to-r from-cyan-100 via-sky-300 to-emerald-200 bg-clip-text text-xl font-semibold text-transparent">
              Still have questions?
            </h2>

            <p className="mt-2 text-sm text-slate-300">
              Talk to our team about your organisation&apos;s quantum-readiness
              requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#071b31] transition hover:bg-cyan-200"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
