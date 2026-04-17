import { dmSerifDisplay, libreFranklin, lora, karla } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import FontSwitcher from '@/components/ui/FontSwitcher';
import './globals.css';

export const metadata = {
  title: {
    default: 'Innovia Partners',
    template: '%s · Innovia Partners',
  },
  description:
    'Management consultancy for the world\u2019s most ambitious architecture, design and engineering practices.',
};

const showSwitcher = process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview';

const fontVariables = [
  dmSerifDisplay.variable,
  libreFranklin.variable,
  lora.variable,
  karla.variable,
].join(' ');

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        <Header />
        <main className="relative z-10 flex-1 bg-background pt-16 md:pt-20 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">{children}</main>
        <Footer />
        {showSwitcher && (
          <>
            <ThemeSwitcher />
            <FontSwitcher />
          </>
        )}
      </body>
    </html>
  );
}
