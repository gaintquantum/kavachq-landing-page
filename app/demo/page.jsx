import Navbar from "@/components/layout/Navbar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "KAVACHQ Product Demo",
  description:
    "Watch the KAVACHQ product walkthrough covering cryptographic discovery, quantum risk and post-quantum migration planning.",
  path: "/demo",
});
export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main
        data-native
        className="min-h-screen bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,.12),transparent_28%),#f8fafc] px-5 pb-20 pt-32 text-slate-950 sm:px-8"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[.2em] text-cyan-700">
            Product walkthrough
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Watch KAVACH-Q in action
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            See how KAVACH-Q presents cryptographic discovery, quantum-risk
            visibility and migration planning. Contact the team when you are
            ready for a demonstration tailored to your environment.
          </p>
          <div className="mt-7 grid gap-3 text-left text-sm text-slate-700 sm:grid-cols-3">
            <p className="rounded-2xl border border-slate-200 bg-white p-4">
              <strong className="block text-slate-950">Discover</strong>See how
              cryptographic assets and security-relevant findings become
              visible.
            </p>
            <p className="rounded-2xl border border-slate-200 bg-white p-4">
              <strong className="block text-slate-950">Prioritise</strong>
              Understand how risk context helps teams focus migration work.
            </p>
            <p className="rounded-2xl border border-slate-200 bg-white p-4">
              <strong className="block text-slate-950">Plan</strong>Explore the
              path from inventory evidence to a staged PQC programme.
            </p>
          </div>
          <section
            data-native
            aria-labelledby="demo-video-title"
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-[0_18px_50px_rgba(15,23,42,0.10)] sm:p-6"
          >
            <div className="mb-5 sm:flex sm:items-end sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[.18em] text-cyan-700">
                  Product walkthrough
                </p>
                <h2
                  id="demo-video-title"
                  className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl"
                >
                  Watch the KAVACH-Q demo
                </h2>
              </div>
              <a
                href="https://www.youtube.com/watch?v=hzU4JHHCHwY"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-bold text-cyan-800 underline underline-offset-4 sm:mt-0"
              >
                Watch on YouTube
              </a>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl bg-slate-950">
              <iframe
                src="https://www.youtube-nocookie.com/embed/hzU4JHHCHwY?rel=0"
                title="KAVACH-Q product demonstration video"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
          <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-center text-white sm:p-9">
            <h2 className="text-2xl font-bold">
              Want a demo for your environment?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
              Contact the KAVACH-Q team with your organisation, industry and
              assessment goals.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
