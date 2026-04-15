import { forwardRef } from 'react';
import Link from 'next/link';

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

function variantClasses(variant, onDark) {
  switch (variant) {
    case 'primary':
      return 'bg-accent-600 hover:bg-accent-700 text-white';
    case 'secondary':
      return onDark
        ? 'border border-neutral-100 text-neutral-50 hover:bg-neutral-50 hover:text-neutral-900'
        : 'border border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white';
    case 'ghost':
      return onDark
        ? 'text-neutral-100 hover:text-accent-300 underline underline-offset-4 decoration-transparent hover:decoration-current'
        : 'text-primary-900 hover:text-accent-600 underline underline-offset-4 decoration-transparent hover:decoration-current';
    default:
      return '';
  }
}

function focusRing(onDark) {
  return onDark
    ? 'focus-visible:ring-accent-300 focus-visible:ring-offset-surface-dark'
    : 'focus-visible:ring-accent-600 focus-visible:ring-offset-surface-light';
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide ' +
  'transition-all duration-200 hover:-translate-y-px active:translate-y-0 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    onDark = false,
    href,
    type = 'button',
    className = '',
    children,
    ...rest
  },
  ref,
) {
  const classes =
    `${base} ${variantClasses(variant, onDark)} ${focusRing(onDark)} ${sizes[size]} ${className}`.trim();

  if (href) {
    return (
      <Link ref={ref} href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} type={type} className={classes} {...rest}>
      {children}
    </button>
  );
});

export default Button;
