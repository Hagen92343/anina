import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navigation } from '@/components/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

export const metadata: Metadata = {
  title: 'Weltengestalter \u2013 MEINE bewusste persönliche Entwicklung',
  description:
    'Ein Programm für bewusste persönliche Entwicklung für Schüler:innen ab Klasse 11. Eine Initiative von Anina & Stephanie unter dem Dach von Troublemaker Thinking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream-50 text-ink-900 antialiased">
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
