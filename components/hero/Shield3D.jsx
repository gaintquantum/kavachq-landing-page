export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    secondary:
      "border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-300",
  };

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}