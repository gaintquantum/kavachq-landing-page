export default function TerminalLine({
  children,
  type = "success",
}) {
  const styles = {
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    info: "text-cyan-400",
    command: "text-slate-300",
  };

  return (
    <p className={`font-mono text-sm ${styles[type] || styles.success}`}>
      {children}
    </p>
  );
} 