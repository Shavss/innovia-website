import Link from 'next/link';

function classes({ active, onDark }) {
  const inactive = onDark
    ? 'text-primary-200 hover:text-accent-300'
    : 'text-neutral-600 hover:text-accent-600';

  const activeColor = onDark ? 'text-white' : 'text-primary-900';
  const underline = onDark ? 'after:bg-accent-400' : 'after:bg-accent-600';

  const activeClasses = `relative ${activeColor} font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px ${underline}`;

  return `${active ? activeClasses : `${inactive} font-medium`} text-sm tracking-wide pb-1.5 transition-colors focus-visible:outline-none focus-visible:text-accent-600`;
}

export default function NavLink({
  href = '#',
  active = false,
  onDark = false,
  className = '',
  children,
  ...rest
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`${classes({ active, onDark })} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Link>
  );
}
