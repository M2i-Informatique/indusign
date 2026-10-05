import Link from "next/link";

import { Eyebrow } from "@/components/eyebrow";
import { SectionLabel } from "@/components/section-label";

export function Hero() {
  return (
    <section id="accueil" className="frame scroll-mt-16 xl:scroll-mt-0 md:guide-top px-6 lg:px-10">
      <SectionLabel>Bureau d&apos;étude mécanique</SectionLabel>
      <div className="py-16 xl:-mt-16">
        <div>
          <div className="mb-6 xl:hidden">
            <Eyebrow>Bureau d&apos;étude mécanique</Eyebrow>
          </div>

          <h1 className="mb-6 font-heading text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {/* Une seule ligne dès `lg` ; retour à la ligne conservé en
                dessous pour ne pas couper « à la série ». */}
            De l&apos;idée
            <br className="lg:hidden" />{" "}
            <span className="text-primary">à la série.</span>
          </h1>

          <p className="mb-4 text-xl font-medium">
            L&apos;ingénierie au service de vos projets
          </p>

          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Indusign vous accompagne de votre cahier des charges à
            l&apos;industrialisation : proposition de concept et design,
            conception 3D sur Fusion 360 ou Creo, prototypage fonctionnel, choix
            de la technologie de fabrication, suivi d&apos;industrialisation.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Discuter de votre projet
            </Link>
            <Link
              href="#realisations"
              className="border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
