const tones = {
  accent: 'text-accent-600',
  neutral: 'text-neutral-500',
  onDark: 'text-neutral-300',
  accentOnDark: 'text-accent-300',
};

const sizes = {
  sm: 'text-xs mb-4',
  md: 'text-sm mb-8',
};

export default function EyebrowLabel({
  tone = 'accent',
  size = 'md',
  as: Tag = 'p',
  className = '',
  children,
}) {
  return (
    <Tag
      className={`font-semibold tracking-widest uppercase ${sizes[size]} ${tones[tone]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
