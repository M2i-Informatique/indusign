import { Eyebrow } from "@/components/eyebrow";
import {
  RealisationsCarousel,
  type Realisation,
} from "@/components/sections/realisations-carousel";

// Libellés provisoires en attente du brief client (nom, contexte, prestation).
const realisations: Realisation[] = [
  {
    title: "Bracelet connecté",
    services: ["Conception", "Prototypage"],
    image: "/realisation-bracelet.jpg",
    alt: "Rendu CAO d'un bracelet connecté blanc",
  },
  {
    title: "Pendentif d'alerte",
    services: ["Conception", "Industrialisation"],
    image: "/realisation-pendentif.jpg",
    alt: "Pendentif d'alerte porté sur un buste de présentation",
  },
  {
    title: "Borne événementielle",
    services: ["Conception"],
    image: "/realisation-borne.jpg",
    alt: "Rendu CAO d'une borne verticale à flamme découpée",
  },
  {
    title: "Boîtier électronique",
    services: ["Prototypage", "Industrialisation"],
    image: "/realisation-boitier.jpg",
    alt: "Boîtier électronique noir moulé",
  },
  {
    title: "Terminal domotique",
    services: ["Conception", "Industrialisation"],
    image: "/realisation-terminal.jpg",
    alt: "Terminal domotique noir sur son pied",
  },
  {
    title: "Dispositif d'imagerie",
    services: ["Conception", "Prototypage"],
    image: "/realisation-dispositif.jpg",
    alt: "Rendu CAO d'un dispositif d'imagerie articulé",
  },
];

export function Realisations() {
  return (
    <section
      id="realisations"
      className="mx-auto max-w-7xl scroll-mt-16 md:scroll-mt-24 px-6 lg:px-10"
    >
      <div className="flex flex-col md:min-h-svh justify-center py-16">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4">
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
