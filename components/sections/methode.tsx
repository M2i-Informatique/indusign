import Image from "next/image";
import {
  Box,
  ClipboardList,
  DraftingCompass,
  FileCheck,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow } from "@/components/eyebrow";
import { SectionLabel } from "@/components/section-label";

type Step = {
  title: string;
  icon: LucideIcon;
  description: string;
  deliverable: string;
};

// Phases : retour client du 05/10/2026. Descriptions et livrables composés
// à partir des formulations du client (accroche et services), à faire valider.
const steps: Step[] = [
  {
    title: "Pré-études",
    icon: ClipboardList,
    description:
      "Analyse de votre cahier des charges, proposition de concept et design.",
    deliverable: "Concept et design",
  },
  {
    title: "Étude",
    icon: DraftingCompass,
    description:
      "Étude et faisabilité, conception 3D sur Fusion 360 ou Creo, choix des matériaux.",
    deliverable: "Modélisation CAO 3D",
  },
  {
    title: "Prototypage",
    icon: Box,
    description:
      "Prototypage fonctionnel : impression 3D, prototype vraie matière, carte électronique.",
    deliverable: "Prototype fonctionnel",
  },
  {
    title: "Finalisation des études",
    icon: FileCheck,
    description:
      "Dossier de définition et choix de la technologie de fabrication.",
    deliverable: "Dossier de définition",
  },
];

export function Methode() {
  return (
    <section id="methode" className="frame scroll-mt-16 xl:scroll-mt-0 md:guide-top px-6 lg:px-10">
      <SectionLabel>Notre méthode</SectionLabel>
      <div className="py-16 xl:-mt-16">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 xl:hidden">
              <Eyebrow>Notre méthode</Eyebrow>
            </div>
            <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Un process maîtrisé, de la première esquisse aux pièces de série.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Chaque projet suit les mêmes étapes, avec des livrables clairs à
              chaque jalon : vous savez toujours où en est votre produit.
            </p>
          </div>

          <Image
            src="/methode-eclate.jpg"
            alt="Vue éclatée d'un boîtier électronique : capot, carte, capteurs et coque"
            width={1400}
            height={916}
            className="w-full"
          />
        </div>

        <ol className="grid gap-6 md:grid-cols-2 min-[112rem]:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group flex flex-col rounded-2xl border border-transparent bg-surface p-6 transition-[translate,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:bg-background hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-background text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="size-6" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground">{step.description}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2 text-xs font-medium whitespace-nowrap">
                {/* Numéro décoratif : l'ordre est déjà porté par le <ol>. */}
                <span
                  aria-hidden
                  className="rounded-full border border-primary bg-primary px-2.5 py-1 text-primary-foreground"
                >
                  {index + 1}
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-primary">
                  {step.deliverable}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
