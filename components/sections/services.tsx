import { Box, Check, Factory, PenTool, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/eyebrow";
import { SectionLabel } from "@/components/section-label";

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
};

// Livrables et description Prototypage : retour client du 05/10/2026.
// Descriptions Conception et Industrialisation : provisoires.
const services: Service[] = [
  {
    title: "Conception",
    icon: PenTool,
    description:
      "Nous transformons votre besoin en un dossier technique prêt à fabriquer.",
    deliverables: [
      "Étude et faisabilité",
      "Modélisation CAO 3D (Creo, Fusion 360)",
      "Dossier de définition",
      "Conception de moule",
      "Choix des matériaux",
    ],
  },
  {
    title: "Prototypage",
    icon: Box,
    description: "Réalisation du produit fini.",
    deliverables: [
      "Impression 3D",
      "Prototype vraie matière",
      "Carte électronique",
    ],
  },
  {
    title: "Industrialisation",
    icon: Factory,
    description:
      "Nous restons à vos côtés jusqu'aux premières pièces bonnes.",
    deliverables: [
      "Choix des fournisseurs",
      "Suivi des projets",
      "Validation des EI",
      "Visite des sous-traitants en pays low cost ou en local",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="frame scroll-mt-16 xl:scroll-mt-0 md:guide-top px-6 lg:px-10">
      <SectionLabel>Nos services</SectionLabel>
      <div className="py-16 xl:-mt-16">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 xl:hidden">
            <Eyebrow>Nos services</Eyebrow>
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Un partenaire unique, de l&apos;étude à la fabrication.
          </h2>
        </div>

        <ul className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="group flex flex-col rounded-2xl border border-transparent bg-surface p-8 transition-[translate,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:bg-background hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-background text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="flex flex-col gap-3">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3 text-sm font-medium">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
