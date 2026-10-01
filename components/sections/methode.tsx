import Image from "next/image";
import {
  ClipboardList,
  DraftingCompass,
  Factory,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow } from "@/components/eyebrow";

type Step = {
  title: string;
  icon: LucideIcon;
  description: string;
  deliverable: string;
};

// Textes provisoires en attente du brief client.
const steps: Step[] = [
  {
    title: "Cadrage",
    icon: ClipboardList,
    description:
      "Analyse du besoin, contraintes d'usage et de fabrication, rédaction du cahier des charges.",
    deliverable: "Cahier des charges",
  },
  {
    title: "Conception",
    icon: DraftingCompass,
    description:
      "Modélisation CAO 3D, calculs et dimensionnement, plans cotés prêts pour la fabrication.",
    deliverable: "Dossier CAO et plans cotés",
  },
  {
    title: "Validation",
    icon: FlaskConical,
    description:
      "Prototypes, essais fonctionnels et itérations jusqu'à la validation du design.",
    deliverable: "Prototype validé",
  },
  {
    title: "Série",
    icon: Factory,
    description:
      "Définition des outillages, lancement de la production et suivi qualité des premières pièces.",
    deliverable: "Premières pièces conformes",
  },
];

export function Methode() {
  return (
    <section id="methode" className="mx-auto max-w-7xl scroll-mt-16 px-6 md:scroll-mt-24 lg:px-10">
      <div className="flex flex-col justify-center py-16 md:min-h-svh">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4">
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

        <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
