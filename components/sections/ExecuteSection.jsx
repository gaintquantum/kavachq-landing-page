// "use client";

// import {
//   Rocket,
//   Shield,
//   Server,
//   Activity,
//   RefreshCcw,
//   Lock,
// } from "lucide-react";

// const modules = [
//   {
//     icon: Server,
//     title: "On-Prem Agent",
//     desc: "Secure migration execution inside institution networks.",
//   },
//   {
//     icon: Shield,
//     title: "CI/CD Enforcement",
//     desc: "Block vulnerable cryptography before production deployment.",
//   },
//   {
//     icon: Rocket,
//     title: "Dry Run Engine",
//     desc: "Validate migrations in staging before production rollout.",
//   },
//   {
//     icon: Activity,
//     title: "Live Monitoring",
//     desc: "Real-time deployment monitoring and execution telemetry.",
//   },
//   {
//     icon: RefreshCcw,
//     title: "Auto Rollback",
//     desc: "Instant rollback on latency, availability or crypto failures.",
//   },
//   {
//     icon: Lock,
//     title: "Key Rotation",
//     desc: "Automated PQC key lifecycle and renewal management.",
//   },
// ];

// const safetyCards = [
//   ["CI/CD Gate", "Blocks vulnerable crypto"],
//   ["Agent", "Executes inside network"],
//   ["Monitor", "Checks latency and errors"],
//   ["Rollback", "Restores previous config"],
// ];

// export default function ExecuteSection() {
//   return (
//     <section
//       id="execute"
//       className="relative overflow-hidden bg-[#163756] py-24 text-white"
//     >
//       <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
//       <div className="absolute right-[-10%] bottom-[10%] h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
//           Stage 5 · EXECUTE
//         </span>

//         <h2 className="mt-6 text-5xl font-black">
//           CI/CD Enforcement & Migration Execution
//         </h2>

//         <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
//           Safely execute approved PQC migrations using secure agents, CI/CD
//           policy enforcement, dry-run validation, real-time monitoring and
//           automated rollback.
//         </p>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {modules.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="rounded-3xl border border-orange-400/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
//               >
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
//                   <Icon size={28} className="text-orange-400" />
//                 </div>

//                 <h3 className="text-xl font-bold">{item.title}</h3>

//                 <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-16 grid gap-6 lg:grid-cols-4">
//           <StepCard
//             label="Step 01"
//             title="Dry Run"
//             text="Test migration safely in staging before production."
//           />

//           <StepCard
//             label="Step 02"
//             title="Go / No-Go"
//             text="Security officer approves execution after validation."
//           />

//           <StepCard
//             label="Step 03"
//             title="Deploy"
//             text="Agent applies PQC changes during approved window."
//           />

//           <StepCard
//             danger
//             label="Safety"
//             title="Auto Rollback"
//             text="Rollback triggers immediately if failure thresholds breach."
//           />
//         </div>

//         <div className="mt-12 rounded-[2rem] border border-orange-400/10 bg-black/20 p-6">
//           <div className="grid gap-4 md:grid-cols-4">
//             {safetyCards.map(([title, desc]) => (
//               <div key={title} className="rounded-2xl bg-white/5 p-5">
//                 <h4 className="font-bold text-orange-300">{title}</h4>
//                 <p className="mt-2 text-sm text-slate-300">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function StepCard({ label, title, text, danger = false }) {
//   return (
//     <div
//       className={`rounded-3xl border p-6 ${
//         danger
//           ? "border-red-400/20 bg-red-500/10"
//           : "border-orange-400/10 bg-white/5"
//       }`}
//     >
//       <p className={danger ? "text-sm text-red-300" : "text-sm text-orange-300"}>
//         {label}
//       </p>

//       <h3 className="mt-2 text-xl font-black">{title}</h3>

//       <p className="mt-3 leading-7 text-slate-300">{text}</p>
//     </div>
//   );
// }