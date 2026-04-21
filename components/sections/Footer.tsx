import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="bg-night-900 text-cream-100/70 border-t border-cream-100/10">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="text-2xl font-serif serif-italic text-cream-50">{site.name}</p>
          <p className="mt-2 text-sm max-w-prose-narrow">{site.under}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-100/50">Kontakt</p>
          <a href="#kontakt" className="mt-3 block hover:text-cream-50 transition-colors">
            Schreib uns
          </a>
          <a
            href="https://www.troublemaker-thinking.com"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block hover:text-cream-50 transition-colors"
          >
            Troublemaker Thinking ↗
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cream-100/50">Rechtliches</p>
          <a href="#" className="mt-3 block hover:text-cream-50 transition-colors">
            Impressum
          </a>
          <a href="#" className="mt-2 block hover:text-cream-50 transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
      <div className="border-t border-cream-100/10">
        <div className="max-w-content mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-cream-100/40">
          <span>© {site.year} {site.name}</span>
          <span>Gebaut mit Sorgfalt.</span>
        </div>
      </div>
    </footer>
  );
}
