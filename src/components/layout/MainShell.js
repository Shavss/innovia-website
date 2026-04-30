'use client';

import { usePathname } from 'next/navigation';
import { isDarkHeroRoute } from '@/lib/darkHeroRoutes';

export default function MainShell({ children }) {
  const pathname = usePathname();
  const padding = isDarkHeroRoute(pathname) ? '' : 'pt-14 md:pt-16';

  return (
    <main
      className={`relative z-10 flex-1 bg-background shadow-[0_12px_32px_rgba(0,0,0,0.08)] ${padding}`}
    >
      {children}
    </main>
  );
}
