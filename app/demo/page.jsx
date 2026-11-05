import { pageMetadata } from "@/lib/seo";
import DemoForm from "./DemoForm";

export const metadata = pageMetadata({
  title: "Request a Demo",
  description:
    "Request a KAVACHQ by GAINT demo and see how it discovers cryptographic assets, scores quantum risk and plans your post-quantum migration.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-32 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold">
          Book a <span className="gradient-text">KAVACH-Q Demo</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          See how KAVACH-Q discovers cryptographic assets, calculates QVS, and creates a post-quantum migration plan.
        </p>

        <DemoForm />
      </div>
    </main>
  );
}