import { DM_Serif_Display, Libre_Franklin } from 'next/font/google';

export const headingFont = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const bodyFont = Libre_Franklin({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});
