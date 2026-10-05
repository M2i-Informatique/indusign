import Image from "next/image";
import { Box, Check, Factory, PenTool } from "lucide-react";

import { Eyebrow } from "@/components/eyebrow";
import { SectionLabel } from "@/components/section-label";

// Variante B (bento) de services.tsx, en attente du choix du client.
// Livrables et description Prototypage : retour client du 05/10/2026.
// Descriptions Conception et Industrialisation : provisoires.
export function ServicesBento() {
  return (
    <section id="services-bento" className="frame scroll-mt-16 xl:scroll-mt-0 md:guide-top px-6 lg:px-10">
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

        <ul className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
          {/* Grande carte : Conception */}
          <li className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 lg:row-span-2">
            <div className="p-8">
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <PenTool className="size-6" aria-hidden />
              </div>
              <h3 className="mb-3 font-heading text-2xl font-semibold">Conception</h3>
              <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">
                Nous transformons votre besoin en un dossier technique prêt à
                fabriquer.
              </p>
              <ul className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-x-10">
                {[
                  "Étude et faisabilité",
                  "Modélisation CAO 3D (Creo, Fusion 360)",
                  "Dossier de définition",
                  "Conception de moule",
                  "Choix des matériaux",
                ].map(
                  (deliverable) => (
                    <li key={deliverable} className="flex items-start gap-3 text-sm font-medium">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {deliverable}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="mt-auto overflow-hidden px-8 pb-8">
              <Image
                src="/hero-plan.jpg"
                alt=""
                width={956}
                height={524}
                className="w-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </li>

          {/* Prototypage : fond bleu technique */}
          <li className="group flex flex-col rounded-2xl bg-primary p-8 text-primary-foreground transition-colors duration-300 hover:bg-primary-hover">
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary-foreground/15">
              <Box className="size-6" aria-hidden />
            </div>
            <h3 className="mb-3 font-heading text-2xl font-semibold">Prototypage</h3>
            <p className="mb-6 leading-relaxed text-primary-foreground/80">
              Réalisation du produit fini.
            </p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {["Impression 3D", "Prototype vraie matière", "Carte électronique"].map(
                (deliverable) => (
                  <li
                    key={deliverable}
                    className="rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-medium"
                  >
                    {deliverable}
                  </li>
                ),
              )}
            </ul>
          </li>

          {/* Industrialisation : fond anthracite */}
          <li className="group flex flex-col rounded-2xl bg-foreground p-8 text-background transition-colors duration-300 hover:bg-foreground/90">
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-background/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <Factory className="size-6" aria-hidden />
            </div>
            <h3 className="mb-3 font-heading text-2xl font-semibold">Industrialisation</h3>
            <p className="mb-6 leading-relaxed text-background/70">
              Nous restons à vos côtés jusqu&apos;aux premières pièces bonnes.
            </p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {[
                "Choix des fournisseurs",
                "Suivi des projets",
                "Validation des EI",
                "Visite des sous-traitants en pays low cost ou en local",
              ].map(
                (deliverable) => (
                  <li
                    key={deliverable}
                    className="rounded-full border border-background/20 px-3 py-1 text-xs font-medium"
                  >
                    {deliverable}
                  </li>
                ),
              )}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
