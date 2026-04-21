import { Hero } from '@/components/sections/Hero';
import { Manifest } from '@/components/sections/Manifest';
import { Problems } from '@/components/sections/Problems';
import { ValueCards } from '@/components/sections/ValueCards';
import { Downloads } from '@/components/sections/Downloads';
import { Modules } from '@/components/sections/Modules';
import { Format } from '@/components/sections/Format';
import { Feedback } from '@/components/sections/Feedback';
import { FAQ } from '@/components/sections/FAQ';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { studentsSection, teachersSection } from '@/content/values';

export default function Page() {
  return (
    <>
      <Hero />
      <Manifest />
      <Problems />
      <ValueCards
        id="schuelerinnen"
        eyebrow={studentsSection.eyebrow}
        heading={studentsSection.heading}
        lead={studentsSection.lead}
        cards={studentsSection.cards}
        tone="light"
      />
      <ValueCards
        id="lehrkraefte"
        eyebrow={teachersSection.eyebrow}
        heading={teachersSection.heading}
        lead={teachersSection.lead}
        cards={teachersSection.cards}
        tone="dark"
      />
      <Downloads />
      <Modules />
      <Format />
      <Feedback />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
