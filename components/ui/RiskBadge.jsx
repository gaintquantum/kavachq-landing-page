export default function RiskBadge({ level = "HIGH" }) {
  const styles = {
    LOW: "border-green-400/30 bg-green-500/10 text-green-300",
    MEDIUM: "border-yellow-400/30 bg-yellow-500/10 text-yellow-300",
    HIGH: "border-red-400/30 bg-red-500/10 text-red-300",
    CRITICAL: "border-red-500/40 bg-red-600/20 text-red-200",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
        styles[level] || styles.HIGH
      }`}
    >
      {level}
    </span>
  );
}