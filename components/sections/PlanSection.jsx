// "use client";

// import {
//   FileText,
//   ShieldCheck,
//   GitBranch,
//   RotateCcw,
//   Brain,
//   ClipboardCheck,
// } from "lucide-react";

// const modules = [
//   {
//     icon: ShieldCheck,
//     title: "Strategy Engine",
//     desc: "Automatically recommends Hybrid PQC or PQC-Only migration paths.",
//   },
//   {
//     icon: FileText,
//     title: "Artifact Generation",
//     desc: "Generate ML-KEM, ML-DSA and SPHINCS+ migration artifacts.",
//   },
//   {
//     icon: GitBranch,
//     title: "Phase Builder",
//     desc: "Create structured migration timelines and execution phases.",
//   },
//   {
//     icon: RotateCcw,
//     title: "Rollback Planner",
//     desc: "Define rollback triggers and recovery steps before execution.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "CAB Workflow",
//     desc: "Approval workflow with audit trail before migration execution.",
//   },
//   {
//     icon: Brain,
//     title: "Migration Advisor",
//     desc: "AI-assisted decision support for critical migration plans.",
//   },
// ];

// const planFlow = ["Strategy", "Artifacts", "Phases", "Rollback", "CAB"];

// export default function PlanSection() {
//   return (
//     <section
//       id="plan"
//       className="relative overflow-hidden bg-[#1f4a75] py-24 text-white"
//     >
//       <div className="absolute left-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
//       <div className="absolute right-[-10%] bottom-[10%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
//           Stage 4 · PLAN
//         </span>

//         <h2 className="mt-6 text-5xl font-black">PQC Migration Planner</h2>

//         <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
//           Generate institution-specific PQC migration strategies, artifacts,
//           timelines, rollback plans, CAB approvals and AI-assisted migration
//           recommendations.
//         </p>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {modules.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="rounded-3xl border border-cyan-400/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
//               >
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
//                   <Icon size={28} className="text-cyan-400" />
//                 </div>

//                 <h3 className="text-xl font-bold">{item.title}</h3>

//                 <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-16 grid gap-6 lg:grid-cols-3">
//           <InfoCard
//             label="Decision Logic"
//             title="Hybrid or PQC-Only"
//             text="Selects the safest path using QVS score, exposure, compatibility and system criticality."
//           />

//           <InfoCard
//             label="Generated Output"
//             title="Migration Package"
//             text="Creates strategy, phases, rollback plan, CAB trail, TLS config and artifact manifest."
//           />

//           <InfoCard
//             label="Approval Gate"
//             title="CAB Review"
//             text="Execution cannot start until approval is completed and locked in the registry."
//           />
//         </div>

//         <div className="mt-12 rounded-[2rem] border border-cyan-400/10 bg-black/20 p-6">
//           <div className="grid gap-4 md:grid-cols-5">
//             {planFlow.map((step, index) => (
//               <div key={step} className="rounded-2xl bg-white/5 p-4 text-center">
//                 <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-bold text-cyan-300">
//                   {index + 1}
//                 </div>
//                 <p className="font-semibold">{step}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function InfoCard({ label, title, text }) {
//   return (
//     <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-6">
//       <p className="text-sm text-cyan-300">{label}</p>
//       <h3 className="mt-2 text-2xl font-black">{title}</h3>
//       <p className="mt-3 leading-7 text-slate-300">{text}</p>
//     </div>
//   );
// }