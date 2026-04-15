const variants = {
  hairline: 'h-px bg-neutral-200 w-full',
  fade: 'h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent',
};

export default function Divider({ variant = 'hairline', className = '' }) {
  if (variant === 'dot') {
    return (
      <div
        role="separator"
        className={`flex items-center gap-4 w-full ${className}`.trim()}
      >
        <span className="flex-1 h-px bg-neutral-200" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent-600" />
        <span className="flex-1 h-px bg-neutral-200" />
      </div>
    );
  }

  return (
    <hr
      className={`border-0 ${variants[variant] ?? variants.hairline} ${className}`.trim()}
    />
  );
}
