export default function MetricCard({
  value,
  label,
}) {
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <h3 className="gradient-text text-4xl font-bold">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}