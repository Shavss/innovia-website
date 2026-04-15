export default function ColorSwatch({ color, step }) {
  return (
    <div
      className="rounded-lg p-4 text-sm font-medium"
      style={{
        backgroundColor: `var(--${color}-${step})`,
        color: step >= 500 ? '#fff' : 'var(--foreground)',
      }}
    >
      <span className="block">{step}</span>
      <span className="block text-xs opacity-70 mt-1">
        {color}-{step}
      </span>
    </div>
  );
}
