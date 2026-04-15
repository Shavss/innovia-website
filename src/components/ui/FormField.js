export const inputClasses =
  'w-full bg-surface-card border border-neutral-300 rounded-md px-4 py-3 text-base text-neutral-900 ' +
  'placeholder:text-neutral-400 transition-colors ' +
  'focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20';

export default function FormField({
  label,
  htmlFor,
  hint,
  className = '',
  children,
}) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-neutral-800 mb-2"
        >
          {label}
        </label>
      )}
      {children}
      {hint && <p className="mt-2 text-xs text-neutral-500">{hint}</p>}
    </div>
  );
}
