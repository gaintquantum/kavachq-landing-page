// export default function DeploymentSection() {
//   const steps = [
//     "Download Agent",
//     "Register with mTLS",
//     "Run Enterprise Scan",
//     "Calculate QVS",
//     "Generate Migration Plan",
//   ];

//   return (
//     <section id="deployment" className="py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         <h2 className="text-center text-5xl font-bold">
//           Enterprise
//           <span className="gradient-text block">Deployment</span>
//         </h2>

//         <div className="mt-16 grid gap-6 md:grid-cols-5">
//           {steps.map((step, index) => (
//             <div key={step} className="glass rounded-2xl p-6 text-center">
//               <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
//                 {index + 1}
//               </div>

//               <h3 className="text-sm font-semibold">{step}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }