const backgrounds = {
  light: 'bg-surface-light text-foreground',
  dark: 'bg-surface-dark text-neutral-100',
  accent: 'bg-accent-600 text-white',
};

export default function SectionWrapper({
  background = 'light',
  as: Tag = 'section',
  className = '',
  innerClassName = '',
  children,
  ...rest
}) {
  return (
    <Tag className={`${backgrounds[background]} ${className}`.trim()} {...rest}>
      <div
        className={`max-w-[1200px] mx-auto px-container-x py-section-y ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </Tag>
  );
}
