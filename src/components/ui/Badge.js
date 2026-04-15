const variants = {
  solid: 'bg-accent-600 text-white',
  subtle: 'bg-accent-50 text-accent-700',
  outline: 'border border-primary-900 text-primary-900',
  neutral: 'bg-neutral-100 text-neutral-700',
  dark: 'bg-primary-900 text-neutral-50',
  outlineDark: 'border border-neutral-100 text-neutral-50',
  subtleDark: 'bg-neutral-100/10 text-neutral-100',
};

export default function Badge({
  variant = 'solid',
  className = '',
  children,
  ...rest
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variants[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  );
}
