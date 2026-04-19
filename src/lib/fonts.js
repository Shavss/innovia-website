import { DM_Serif_Display, Libre_Franklin, Lora, Karla } from 'next/font/google';

export const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif-display',
});

export const libreFranklin = Libre_Franklin({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-franklin',
});

export const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const karla = Karla({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export const fontPairs = {
  'dm-serif-libre-franklin': {
    label: 'DM Serif Display + Libre Franklin',
    heading: 'var(--font-dm-serif-display)',
    body: 'var(--font-libre-franklin)',
  },
  'lora-karla': {
    label: 'Lora + Karla',
    heading: 'var(--font-lora)',
    body: 'var(--font-karla)',
  },
};

export const defaultFontPair = 'lora-karla';
