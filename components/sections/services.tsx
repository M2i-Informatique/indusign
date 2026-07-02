import Link from "next/link";
import { ArrowRight, DraftingCompass, Boxes, Factory } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const services = [
  {
    num: "01",
    icon: DraftingCompass,
    title: "Conception & Design",
    text: "Modélisation CAO, design produit, calculs et optimisation. De l'esquisse au dossier de définition.",
    href: "#",
  },
  {
    num: "02",
    icon: Boxes,
    title: "Prototypage",
    text: "Impression 3D, usinage rapide, premières pièces fonctionnelles. Itérer vite, valider sereinement.",
    href: "#",
  },
  {
    num: "03",
    icon: Factory,
    title: "Industrialisation",
    text: "Sourcing fournisseurs, mise au point process, séries pilotes. Du dossier figé aux premières pièces série.",
    href: "#",
  },
];

export function Services() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-24 lg:px-8">
        <SectionHeader
          index="01"
          eyebrow="Nos métiers"
          title={
            <>
              Trois expertises,
              <br />
              une chaîne continue.
            </>
          }
          description="Chacun de nos métiers couvre une phase précise du cycle produit. Ensemble, ils forment un parcours intégré, sans rupture de responsabilité ni perte d'information."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-px border bg-border md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 80}>
              <article className="group flex h-full flex-col bg-background p-8 lg:p-10">
                <div className="mb-10 flex items-start justify-between">
                  <service.icon
                    className="size-9 stroke-[1.25] text-foreground"
                    aria-hidden="true"
                  />
                  <span className="eyebrow">{service.num}</span>
                </div>
                <h3 className="mb-3 text-[22px] font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="mb-8 text-[14.5px] leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <Link
                  href={service.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 border-b border-foreground pb-0.5 text-[13.5px] font-medium transition-all hover:gap-3"
                >
                  En savoir plus
                  <ArrowRight className="size-3.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
