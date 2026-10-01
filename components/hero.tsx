import Image from "next/image";
import Link from "next/link";

import { Eyebrow } from "@/components/eyebrow";

export function Hero() {
  return (
    <section id="accueil" className="mx-auto max-w-7xl scroll-mt-16 md:scroll-mt-24 px-6 lg:px-10">
      <div className="grid min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-6rem)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
        {/* Texte */}
        <div>
          <div className="mb-6">
            <Eyebrow>Bureau d&apos;étude mécanique</Eyebrow>
          </div>

          <h1 className="mb-6 font-heading text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            De l&apos;idée
            <br />
            <span className="text-primary">à la série.</span>
          </h1>

          <p className="mb-4 text-xl font-medium">
            L&apos;ingénierie au service de vos projets
          </p>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Conception, prototypage, industrialisation. Nous accompagnons les
            industriels dans le développement de leurs produits, du premier
            croquis jusqu&apos;à la mise en fabrication.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Discuter de votre projet
            </Link>
            <Link
              href="#realisations"
              className="rounded-full border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>

        {/* Visuel : plan technique (élément graphique de la charte) */}
        <Image
          src="/hero-plan.jpg"
          alt="Plan technique coté d'une pièce mécanique conçue par Indusign"
          width={956}
          height={524}
          priority
          className="w-full"
        />
      </div>
    </section>
  );
}
