import { Box, Check, Factory, PenTool, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/eyebrow";

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
};

// Textes provisoires en attente du brief client.
const services: Service[] = [
  {
    title: "Conception",
    icon: PenTool,
    description:
      "Nous transformons votre besoin en un dossier technique prêt à fabriquer.",
    deliverables: [
      "Étude de faisabilité",
      "Modélisation CAO 3D",
      "Plans cotés",
      "Choix des matériaux",
    ],
  },
  {
    title: "Prototypage",
    icon: Box,
    description:
      "Chaque itération sécurise la conception avant tout engagement industriel.",
    deliverables: [
      "Maquettes et pièces d'essai",
      "Essais fonctionnels",
      "Itérations de design",
    ],
  },
  {
    title: "Industrialisation",
    icon: Factory,
    description:
      "Nous restons à vos côtés jusqu'aux premières pièces bonnes.",
    deliverables: [
      "Définition des outillages",
      "Mise en série",
      "Suivi de fabrication",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-16 px-6 md:scroll-mt-24 lg:px-10">
      <div className="flex flex-col md:min-h-svh justify-center py-16">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4">
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
                  <li key={deliverable} className="flex items-center gap-3 text-sm font-medium">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden />
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
