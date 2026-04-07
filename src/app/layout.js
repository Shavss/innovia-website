import { headingFont, bodyFont } from '@/lib/fonts';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import './globals.css';

export const metadata = {
  title: 'Innovia Partners',
  description: 'Management consultancy for architecture and AEC practices',
};

const isDev = process.env.NODE_ENV === 'development';

const showSwitcher = process.env.NODE_ENV === 'development' 
  || process.env.VERCEL_ENV === 'preview';
  
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        {children}
        {showSwitcher && <ThemeSwitcher />}
      </body>
    </html>
  );
}
