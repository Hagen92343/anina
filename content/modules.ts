export type Modul = {
  nummer: string;
  titel: string;
  untertitel: string;
  bullets: string[];
  tone: 'dawn' | 'terra' | 'gold' | 'night' | 'cream';
};

export const modulesSection = {
  eyebrow: 'Der Weg',
  heading: 'Fünf Module \u2013 eine Reise nach innen und wieder hinaus.',
  lead:
    'Vier feste Module + ein flexibles, das sich an die Gruppe anpasst. Jedes Modul öffnet einen neuen Raum.',
  modules: [
    {
      nummer: '01',
      titel: 'Grundlagen & Ziele',
      untertitel: 'Vertrauen, Werte, innerer Goldstandard',
      bullets: [
        'Vertrauensaufbau in der Gruppe',
        'Werte erkennen und benennen',
        'Dein persönlicher \u201eGoldstandard\u201c',
      ],
      tone: 'cream',
    },
    {
      nummer: '02',
      titel: 'Emotionen & Sprache',
      untertitel: 'Wie Sprache dein Erleben formt',
      bullets: [
        'Sprachmuster sichtbar machen',
        'Strategien für ungeliebte Aufgaben',
        'Worte als Werkzeuge der Selbstwirkung',
      ],
      tone: 'dawn',
    },
    {
      nummer: '03',
      titel: 'Inneres Erleben steuern',
      untertitel: 'VAKOG, Reframing, Stressmanagement',
      bullets: [
        'Das VAKOG-Modell erfahrbar machen',
        'Reframing: Perspektiven bewusst wechseln',
        'Stress als Kompass statt Feind',
      ],
      tone: 'terra',
    },
    {
      nummer: '04',
      titel: 'Identität & Veränderung',
      untertitel: 'Wer du bist. Wer du werden willst.',
      bullets: [
        'Metamodelle der Identität',
        'Veränderungsebenen verstehen',
        'Die eigene Geschichte neu schreiben',
      ],
      tone: 'gold',
    },
    {
      nummer: '05',
      titel: 'Selbstbewusstsein & Beziehungen',
      untertitel: 'Eros & Logos, Freundschaft, Mentoring',
      bullets: [
        'Beziehungen bewusst gestalten',
        'Freundschaft als Raum des Wachsens',
        'Mentoring als Haltung',
      ],
      tone: 'night',
    },
  ] as Modul[],
};
