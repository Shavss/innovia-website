import { forwardRef } from 'react';

const paddings = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const Card = forwardRef(function Card(
  {
    padding = 'md',
    hoverable = false,
    as: Tag = 'div',
    className = '',
    children,
    ...rest
  },
  ref,
) {
  const hover = hoverable
    ? 'group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent-600/40 cursor-pointer'
    : '';

  return (
    <Tag
      ref={ref}
      className={`bg-surface-card border border-neutral-200 rounded-lg ${paddings[padding]} ${hover} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Card;
