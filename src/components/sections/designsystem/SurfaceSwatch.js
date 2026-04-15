export default function SurfaceSwatch({
  label,
  className,
  textClass = 'text-neutral-900',
}) {
  return (
    <div
      className={`${className} ${textClass} rounded-lg p-6 border border-neutral-200`}
    >
      <span className="block font-semibold text-sm">{label}</span>
    </div>
  );
}
