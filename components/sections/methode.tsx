import Image from "next/image";

import { Eyebrow } from "@/components/eyebrow";

// Textes provisoires en attente du brief client.
const steps = [
  {
    title: "Cadrage",
    description:
      "Analyse du besoin, contraintes d'usage et de fabrication, rédaction du cahier des charges.",
  },
  {
    title: "Conception",
    description:
      "Modélisation CAO 3D, calculs et dimensionnement, plans cotés prêts pour la fabrication.",
  },
  {
    title: "Validation",
    description:
      "Prototypes, essais fonctionnels et itérations jusqu'à la validation du design.",
  },
  {
    title: "Série",
    description:
      "Définition des outillages, lancement de la production et suivi qualité des premières pièces.",
  },
];

export function Methode() {
  return (
    <section id="methode" className="mx-auto max-w-7xl scroll-mt-24 px-6 lg:px-10">
      <div className="flex min-h-svh flex-col justify-center py-16">
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

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-surface p-8">
              <p className="mb-6 font-heading text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 font-heading text-xl font-semibold">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
