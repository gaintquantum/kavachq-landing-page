export default function GlowBlob({
  className = "",
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}