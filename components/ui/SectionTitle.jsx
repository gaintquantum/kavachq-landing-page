export default function SectionTitle({
  title,
  highlight,
  description,
}) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-5xl font-bold">
        {title}
        <span className="gradient-text block">
          {highlight}
        </span>
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}