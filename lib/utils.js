export function getRiskColor(level) {
  switch (level) {
    case "LOW":
      return "text-green-400";

    case "MEDIUM":
      return "text-yellow-400";

    case "HIGH":
      return "text-red-400";

    default:
      return "text-slate-400";
  }
}

export function getQVSLabel(score) {
  if (score <= 30) return "LOW";

  if (score <= 70) return "MEDIUM";

  return "HIGH";
}

export function clamp(value, min, max) {
  return Math.min(
    Math.max(value, min),
    max
  );
}