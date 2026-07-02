export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-32 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold gradient-text">Contact KAVACH-Q</h1>

        <form className="mt-10 space-y-5">
          <input className="w-full rounded-xl border border-white/10 bg-white/5 p-4" placeholder="Your Name" />
          <input className="w-full rounded-xl border border-white/10 bg-white/5 p-4" placeholder="Email" />
          <input className="w-full rounded-xl border border-white/10 bg-white/5 p-4" placeholder="Company" />
          <textarea
            className="h-40 w-full rounded-xl border border-white/10 bg-white/5 p-4"
            placeholder="Message"
          ></textarea>

          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
