# Anina — Weltengestalter

Lokale Apple-Level-Neugestaltung der Landingpage für **Weltengestalter**, ein Programm für bewusste persönliche Entwicklung für Schüler:innen ab Klasse 11. Eine Initiative von Anina & Stephanie unter dem Dach von Troublemaker Thinking.

## Live

- **Production:** https://anina.vercel.app
- **GitHub:** https://github.com/Hagen92343/anina
- **Lokal:** http://localhost:3000 (`npm run dev`)

## Tech-Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** mit Custom Design-Tokens
- **Framer Motion** (Scroll-Animationen, Reveal, Accordion, Magnetic Buttons)
- **Lenis** (butterweiches Smooth Scrolling)
- **next/font** mit Fraunces (Italic Display) + Inter (Body)

## Projektstruktur

```
app/
  layout.tsx        Fonts, Metadata, SmoothScroll, Navigation
  page.tsx          Komposition aller Sektionen
  globals.css       Tokens, Grain, Reduced-Motion-Handling
components/
  Navigation.tsx    Sticky Blur-Nav, Mobile-Menu
  SmoothScroll.tsx  Lenis-Wrapper mit Anchor-Handling
  primitives/       Reveal, MagneticButton, Icon
  sections/         Hero, Manifest, Problems, ValueCards,
                    Downloads, Modules, Format, Feedback,
                    FAQ, Team, Contact, Footer
content/            Alle Texte als .ts (leicht editierbar)
  site.ts hero.ts problems.ts values.ts modules.ts
  format.ts feedback.ts faq.ts team.ts contact.ts
lib/utils.ts        cn() Helper
public/images/      Original-Bilder (AVIF)
  team/portrait-a.avif … portrait-d.avif
  sections/hero-mood.avif accent-graphic.avif
```

## Design-System

**Farben** (Tailwind):
- `cream-50/100/200` — warme Basis
- `night-500/700/900` — tiefes Mitternachtsblau statt Schwarz
- `dawn-400/500/600` — Sonnenaufgangs-Orange (Primär-Akzent, CTAs)
- `terra-400/500` — Terrakotta
- `gold-400/500` — Gold-Akzente
- `ink-700/900` — Lesetext

**Typografie**
- Headlines groß mit tight tracking (`-0.02em` bis `-0.03em`)
- Leitsatz in Fraunces Italic (`clamp(4rem, 10vw, 10rem)`)
- Body max. `65ch`, Zeilenhöhe 1.6–1.7

**Motion**
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` („apple")
- Word-by-Word Reveal im Hero
- Pin-Scroll-Sequenz für Problem-Statements
- Horizontal-Pin-Scroll für Module (AirPods-Stil)
- Parallax auf Team-Portraits
- Magnetic Buttons mit Cursor-Anziehung
- Respektiert `prefers-reduced-motion`

## Sektionen (14)

1. **Navigation** — Sticky, Blur-Effekt beim Scrollen
2. **Hero** — „I'm the one who shapes my world" + CTA
3. **Manifest** — Zitat + Erklärung innere/äußere Welt
4. **Problems** — 5 Pain-Points als Pin-Scroll-Sequenz
5. **Mehrwert Schüler:innen** — 8 Cards mit Icons
6. **Mehrwert Lehrkräfte** — 5 Cards (Dark Tone)
7. **PDF-Downloads** — Schüler:innen + Lehrkräfte
8. **Module** — 5 Module als horizontales Karussell mit Gradient-Tönen
9. **Format** — Zielgruppe, Aufbau, Add-ons
10. **Feedback** — 3 Testimonial-Karten
11. **FAQ** — Accordion mit „WELTFRIEDEN"-Moment
12. **Team** — Anina & Stephanie mit Parallax
13. **Kontakt** — Multi-Step-Formular (Floating Labels, Progress Bar)
14. **Footer** — Social, Impressum, Datenschutz

## Entwicklung

```bash
npm install      # einmalig
npm run dev      # http://localhost:3000
npm run build    # Production-Build
npm run start    # Built-Version starten
```

## Deployment

Jeder Push auf `main` deployt automatisch auf Vercel (Projekt `anina`, Team `hagenmarggraf-1178`).

```bash
git add .
git commit -m "<beschreibung>"
git push
```

Oder manuell: `vercel --prod`

## Assets & Austausch

- Portraits liegen unter `public/images/team/portrait-{a,b,c,d}.avif`.
  Aktuelle Zuordnung (in `content/team.ts`):
  - Anina → `portrait-a.avif`
  - Stephanie → `portrait-b.avif`
- Hero-Stimmungsbild: `public/images/sections/hero-mood.avif`
- PDFs werden direkt von der Original-Domain geladen (siehe `content/format.ts`)

## Noch offen

- [ ] Echte Portraitfotos zuordnen (`content/team.ts`)
- [ ] Echte Testimonial-Texte (`content/feedback.ts`)
- [ ] Impressum / Datenschutz-Seiten
- [ ] Empfänger-E-Mail im Kontaktformular (`components/sections/Contact.tsx`)
- [ ] Custom Domain auf Vercel (falls gewünscht)

## Accounts

- **GitHub:** Hagen92343
- **Vercel:** hagenmarggraf-1178

---

Gebaut mit Sorgfalt.
