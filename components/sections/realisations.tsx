import { Eyebrow } from "@/components/eyebrow";
import { SectionLabel } from "@/components/section-label";
import {
  RealisationsCarousel,
  type Realisation,
} from "@/components/sections/realisations-carousel";

// Titres et descriptions : retour client du 05/10/2026.
// Tags de prestation : provisoires, non validés par le client.
const realisations: Realisation[] = [
  {
    title: "Bracelet Zigbee",
    description:
      "Développement des pièces plastique, bouton en surmoulage SEBS sur ABS/PC, miniaturisation.",
    services: ["Conception", "Prototypage"],
    image: "/realisation-bracelet.jpg",
    alt: "Rendu CAO du bracelet Zigbee blanc",
  },
  {
    title: "Pendentif d'alerte",
    description: "Pour patients Alzheimer.",
    services: ["Conception", "Industrialisation"],
    image: "/realisation-pendentif.jpg",
    alt: "Pendentif d'alerte porté sur un buste de présentation",
  },
  {
    title: "Uzy",
    description: "Pied de table modulable acier et plastique.",
    services: ["Conception"],
    image: "/realisation-borne.jpg",
    alt: "Rendu CAO du pied de table Uzy : profilé acier et pièces plastique noires",
  },
  {
    title: "JOBO",
    description: "GPS pour appareil photo reflex.",
    services: ["Prototypage", "Industrialisation"],
    image: "/realisation-boitier.jpg",
    alt: "Boîtier GPS JOBO noir, avec sa fixation pour griffe d'appareil photo",
  },
  {
    title: "Domotique",
    description:
      "Contrôle des ouvrants et du chauffage : intégration de la carte électronique.",
    services: ["Conception", "Industrialisation"],
    image: "/realisation-terminal.jpg",
    alt: "Terminal domotique noir sur son pied",
  },
  {
    title: "Instrument de musique",
    description: "Intégration des cartes électroniques, design.",
    services: ["Conception", "Prototypage"],
    image: "/realisation-dispositif.jpg",
    alt: "Rendu CAO d'un instrument de musique électronique à touches",
  },
];

export function Realisations() {
  return (
    <section
      id="realisations"
      className="frame scroll-mt-16 xl:scroll-mt-0 md:guide-top px-6 lg:px-10"
    >
      <SectionLabel>Nos réalisations</SectionLabel>
      <div className="py-16 xl:-mt-16">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 xl:hidden">
            <Eyebrow>Nos réalisations</Eyebrow>
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Des produits conçus, prototypés, fabriqués.
          </h2>
        </div>

        <RealisationsCarousel items={realisations} />
      </div>
    </section>
  );
}
