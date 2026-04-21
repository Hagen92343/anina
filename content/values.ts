export type ValueCard = {
  title: string;
  body: string;
  icon: 'compass' | 'heart' | 'shield' | 'chat' | 'spark' | 'target' | 'map' | 'check';
};

export const studentsSection = {
  eyebrow: 'Für Schüler:innen',
  heading: 'Was du mitnimmst',
  lead:
    'Werkzeuge, die bleiben \u2013 für Entscheidungen, Beziehungen und das eigene Lebensgefühl.',
  cards: [
    { title: 'Selbstreflexion & Persönlichkeit', body: 'Deine innere Welt verstehen und bewusst formen.', icon: 'compass' },
    { title: 'Sicher mit Emotionen', body: 'Umgang mit Ängsten, Blockaden und innerem Druck.', icon: 'heart' },
    { title: 'Gegen den inneren Kritiker', body: 'Werkzeuge gegen Stress und die leise Stimme, die klein macht.', icon: 'shield' },
    { title: 'Klar kommunizieren', body: 'Gespräche führen, die dich und andere stärken.', icon: 'chat' },
    { title: 'Mentale Resilienz', body: 'Widerstandskraft, die dich durch schwierige Phasen trägt.', icon: 'spark' },
    { title: 'Werte & Ziele', body: 'Einen inneren Kompass entwickeln, der dich führt.', icon: 'target' },
    { title: 'Eigenverantwortung', body: 'Zukunftskompetenzen, die in keinem Lehrplan stehen.', icon: 'map' },
    { title: 'Bewusste Entscheidungen', body: 'Wahlmöglichkeiten klar sehen \u2013 und bewusst wählen.', icon: 'check' },
  ] as ValueCard[],
};

export const teachersSection = {
  eyebrow: 'Für Lehrkräfte',
  heading: 'Was Ihre Schule spürt',
  lead:
    'Ein Raum, der das Klassenzimmer entlastet \u2013 weil junge Menschen präsenter und wacher zurückkommen.',
  cards: [
    { title: 'Präsentere Schüler:innen', body: 'Ausgeglichener, aufmerksamer, im Dialog.', icon: 'heart' },
    { title: 'Tools für Widerstandskraft', body: 'Methoden, die über den Schultag hinaus wirken.', icon: 'shield' },
    { title: 'Selbstwahrnehmung fördern', body: 'Reflexion als Kulturgut in der Klasse verankern.', icon: 'compass' },
    { title: 'Sicherer Raum', body: 'Ein Ort für echte Entwicklung neben dem Stoff.', icon: 'spark' },
    { title: 'Langfristige Entlastung', body: 'Weniger Reibung, mehr gemeinsame Lernenergie.', icon: 'check' },
  ] as ValueCard[],
};
